import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import FormManager from "./features/formManager/FormManager";
import { theme } from "./theme/theme";
import { ReduxStoreVisualizer } from "./features/ReduxStoreVisualizer";

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <FormManager />
        <ReduxStoreVisualizer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
