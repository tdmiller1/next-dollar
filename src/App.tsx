import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import FormManager from "./features/formManager/FormManager";
import { theme } from "./theme/theme";
// import { ReduxStoreVisualizer } from "./features/ReduxStoreVisualizer";
// import { ThemeVisualizer } from "./features/ThemeVisualizer";

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Box sx={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
          <FormManager />
        </Box>
        {/* <ThemeVisualizer />
        <ReduxStoreVisualizer /> */}
      </Provider>
    </ThemeProvider>
  );
}

export default App;
