import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const enum IncomeVariation {
  FIXED = "FIXED",
  VARIABLE = "VARIABLE",
}

export interface EmployerState {
  primaryIncomeType: IncomeVariation;
  salary: number;
}

const initialState: EmployerState = {
  primaryIncomeType: IncomeVariation.FIXED,
  salary: 0,
};

export const employerSlice = createSlice({
  name: "employer",
  initialState,
  reducers: {
    updateIncomeType: (state, action: PayloadAction<IncomeVariation>) => {
      state.primaryIncomeType = action.payload;
    },
    updateSalary: (state, action: PayloadAction<number>) => {
      state.salary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateIncomeType, updateSalary } = employerSlice.actions;

export default employerSlice.reducer;
