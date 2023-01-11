import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FormStateType {
  DEMOGRAPHICS = "DEMOGRAPHICS",
  EXPENSES = "EXPENSES",
  EMPLOYER = "EMPLOYER",
  DEBT = "DEBT",
  GOALS = "GOALS",
  RETIREMENT_ACCOUNTS = "RETIREMENT_ACCOUNTS",
}

export const formStateOrder = [
  FormStateType.DEMOGRAPHICS,
  FormStateType.EMPLOYER,
  FormStateType.DEBT,
  FormStateType.EXPENSES,
  FormStateType.RETIREMENT_ACCOUNTS,
  FormStateType.GOALS,
];

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
    completeFormSection: (state, action: PayloadAction<FormStateType>) => {
      const currentFormSection = action.payload;
      const currentSectionIndex = formStateOrder.indexOf(currentFormSection);
      const nextSectionIndex = currentSectionIndex + 1;

      state.currentFormSection = formStateOrder[nextSectionIndex];
    },
  },
});

// Action creators are generated for each case reducer function
export const { completeFormSection } = formManagerSlice.actions;

export default formManagerSlice.reducer;
