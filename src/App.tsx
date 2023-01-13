import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import decode from "jwt-decode";
import FormManager from "./features/formManager/FormManager";
import { theme } from "./theme/theme";
import { Redirect, Route, useHistory } from "react-router-dom";
import { ReduxStoreVisualizer } from "./features/ReduxStoreVisualizer";
import { updateSub } from "./features/demographics/demographicSlice";

function App(): React.ReactElement {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("id_token")
  );
  const history = useHistory();
  const regex = /#id_token=(.*)/;
  const url = window.location.hash;
  const cognitoResponse = url.match(regex)?.[1];
  console.log(cognitoResponse);
  const token = cognitoResponse?.substring(0, cognitoResponse.length - 34);

  if (token) {
    const tokenObj: { sub: string } = decode(token);
    dispatch(updateSub(tokenObj.sub as string));
    localStorage.setItem("id_token", token);
    setIsAuthenticated(true);
    history.push("/home");
  }

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("id_token"));
  }, [localStorage]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Route path="/login">
        {isAuthenticated && <Redirect to={{ pathname: "/home" }} />}
        {!isAuthenticated && <RedirectComponent />}
      </Route>
      <Route path="/">
        {!isAuthenticated && <Redirect to={{ pathname: "/login" }} />}
        {isAuthenticated && <Redirect to={{ pathname: "/home" }} />}
      </Route>
      <Route path="/home">
        {isAuthenticated && (
          <Box sx={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
            <FormManager />
          </Box>
        )}
      </Route>
      <ReduxStoreVisualizer />
    </ThemeProvider>
  );
}

const RedirectComponent = () => {
  window.location.href = `https://${process.env.REACT_APP_AWS_COGNITO_DOMAIN}/login?response_type=token&client_id=${process.env.REACT_APP_AWS_COGNITO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_AWS_COGNITO_REDIRECT_URI}`;
  return <div>redirecting</div>;
};

export default App;
