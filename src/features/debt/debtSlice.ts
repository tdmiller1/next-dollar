import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const enum LoanType {
  AUTO = "AUTO",
  MORTGAGE = "MORTGAGE",
  STUDENT = "STUDENT",
  CREDIT = "CREDIT",
  OTHER = "OTHER",
}

export interface Loan {
  id: string;
  type: LoanType;
  amount: string;
  interestRate: string;
}

export interface DebtSlice {
  loans: Loan[];
}

const initialState: DebtSlice = {
  loans: [],
};

export const debtSlice = createSlice({
  name: "debt",
  initialState,
  reducers: {
    addLoan: (state, action: PayloadAction<Loan>) => {
      state.loans = [...state.loans, action.payload];
    },
    removeLoan: (state, action: PayloadAction<Loan>) => {
      state.loans = state.loans.filter((item) => {
        if (item.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        return false;
      });
    },
    updateLoan: (state, action: PayloadAction<Loan>) => {
      state.loans = state.loans.map((item) => {
        if (item.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...action.payload,
        };
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLoan, updateLoan, removeLoan } = debtSlice.actions;

export default debtSlice.reducer;
