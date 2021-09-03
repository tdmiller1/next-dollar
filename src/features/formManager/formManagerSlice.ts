import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const enum FormStateType {
  DEMOGRAPHICS = "DEMOGRAPHICS",
  EXPENSES = "EXPENSES",
  EMPLOYER = "EMPLOYER",
  DEBT = "DEBT",
  GOALS = "GOALS",
  RETIREMENT_ACCOUNTS = "RETIREMENT_ACCOUNTS",
}

export interface FormManagerState {
  currentFormSection: FormStateType;
}

const initialState: FormManagerState = {
  currentFormSection: FormStateType.DEMOGRAPHICS,
};

export const formManagerSlice = createSlice({
  name: "formManager",
  initialState,
  reducers: {
    updateCurrentFormSection: (state, action: PayloadAction<FormStateType>) => {
      state.currentFormSection = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCurrentFormSection } = formManagerSlice.actions;

export default formManagerSlice.reducer;
