import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExpensesRange {
  expensesRange: number | number[];
}

export interface ExpensesAction {
  expensesType: ExpensesType;
}

export interface FixedExpensesTotal {
  fixedExpenseTotal: number;
}

export const enum ExpensesType {
  FIXED = "FIXED",
  CALCULATED = "CALCULATED",
}

export interface LineItem {
  id: string;
  name: string;
  amount: number;
}

export interface ExpensesState {
  fixedExpenseTotal: number;
  expensesType: ExpensesType;
  expensesTotal: number;
  expensesRange: number | number[];
  lineItems: LineItem[];
}

const initialState: ExpensesState = {
  fixedExpenseTotal: 0,
  expensesType: ExpensesType.FIXED,
  expensesTotal: 30,
  expensesRange: 5,
  lineItems: [
    {
      id: "khj214-hj2k34234-9s8ef",
      name: "rent",
      amount: 12,
    },
    {
      id: "khj214-hj2234k34234-9s8ef",
      name: "pets",
      amount: 18,
    },
  ],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    updateExpensesType: (state, action: PayloadAction<ExpensesAction>) => {
      state.expensesType = action.payload.expensesType;
    },
    updateFixedExpensesValue: (
      state,
      action: PayloadAction<FixedExpensesTotal>
    ) => {
      state.fixedExpenseTotal = action.payload.fixedExpenseTotal;
    },
    updateExpensesRange: (state, action: PayloadAction<ExpensesRange>) => {
      state.expensesRange = action.payload.expensesRange;
    },
    addLineItem: (state, action: PayloadAction<LineItem>) => {
      state.lineItems = [...state.lineItems, action.payload];
    },
    removeLineItem: (state, action: PayloadAction<LineItem>) => {
      state.expensesTotal = state.expensesTotal - action.payload.amount;
      state.lineItems = state.lineItems.filter((lineItem) => {
        if (lineItem.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return lineItem;
        }
        return false;
      });
    },
    updateLineItem: (state, action: PayloadAction<LineItem>) => {
      state.lineItems = state.lineItems.map((lineItem) => {
        if (lineItem.id !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return lineItem;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...lineItem,
          ...action.payload,
        };
      });
      state.expensesTotal = state.lineItems.reduce((a, b) => a + b.amount, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateExpensesType,
  addLineItem,
  removeLineItem,
  updateLineItem,
  updateFixedExpensesValue,
  updateExpensesRange,
} = expensesSlice.actions;

export default expensesSlice.reducer;
