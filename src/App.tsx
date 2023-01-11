import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import FormManager from "./features/formManager/FormManager";
import { theme } from "./theme/theme";
import { Redirect, Route, useHistory } from "react-router-dom";
import { ReduxStoreVisualizer } from "./features/ReduxStoreVisualizer";
// import { ThemeVisualizer } from "./features/ThemeVisualizer";

function App(): React.ReactElement {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("id_token")
  );
  const history = useHistory();
  const regex = /#id_token=(.*)/;
  const url = window.location.hash;
  const cognitoResponse = url.match(regex)?.[1];
  const token = cognitoResponse?.substring(0, cognitoResponse.length - 34);

  if (token) {
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
      <Provider store={store}>
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
            <Box
              sx={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}
            >
              <FormManager />
            </Box>
          )}
        </Route>
        {/* <ThemeVisualizer />*/}
        <ReduxStoreVisualizer />
      </Provider>
    </ThemeProvider>
  );
}

const RedirectComponent = () => {
  window.location.href = `https://${process.env.REACT_APP_AWS_COGNITO_DOMAIN}/login?response_type=token&client_id=${process.env.REACT_APP_AWS_COGNITO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_AWS_COGNITO_REDIRECT_URI}`;
  return <div>redirecting</div>;
};

export default App;
