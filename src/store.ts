import { configureStore } from "@reduxjs/toolkit";

import demographicReducer from "./features/demographics/demographicSlice";
import employerReducer from "./features/employer/employerSlice";
import debtReducer from "./features/debt/debtSlice";
import goalsReducer from "./features/goals/goalsSlice";
import retirementAccountReducer from "./features/retirementAccounts/retirementAccountsSlice";
import expensesReducer from "./features/expenses/expensesSlice";
import formManagerReducer from "./features/formManager/formManagerSlice";

export const store = configureStore({
  reducer: {
    demographics: demographicReducer,
    employer: employerReducer,
    debt: debtReducer,
    goals: goalsReducer,
    retirementAccounts: retirementAccountReducer,
    expenses: expensesReducer,
    formManager: formManagerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
