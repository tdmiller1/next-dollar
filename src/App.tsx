import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import { ReduxStoreVisualizer } from "./features/ReduxStoreVisualizer";
import { Demographics } from "./features/demographics/Demographics";
import { Employer } from "./features/employer/Employer";
import { Expenses } from "./features/expenses/Expenses";
import { Goals } from "./features/goals/Goals";
import { Debt } from "./features/debt/Debt";
import { RetirementAccounts } from "./features/retirementAccounts/RetirementAccounts";

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Demographics />
      <Employer />
      <Debt />
      <Goals />
      <RetirementAccounts />
      <Expenses />
      <ReduxStoreVisualizer />
    </Provider>
  );
}

export default App;
