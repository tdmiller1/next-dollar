import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const enum RetirementAccountType {
  ORIGINAL,
  ROTH_IRA,
  TRADITIONAL_IRA,
  SEP_PLAN,
  PUBLIC_SCHOOL_PLAN,
}

export interface RetirementAccount {
  id: RetirementAccountType;
  name: string;
  taxDeffered: boolean;
  employerSponsored: boolean;
}

interface RetirementAccountAction {
  account: RetirementAccount;
  checked: boolean;
  amount: number;
}

export interface RetirementAccountState {
  retirementAccounts: {
    [RetirementAccountType.ORIGINAL]: {
      active: boolean;
      amount: number;
    };
    [RetirementAccountType.ROTH_IRA]: {
      active: boolean;
      amount: number;
    };
    [RetirementAccountType.TRADITIONAL_IRA]: {
      active: boolean;
      amount: number;
    };
    [RetirementAccountType.SEP_PLAN]: {
      active: boolean;
      amount: number;
    };
    [RetirementAccountType.PUBLIC_SCHOOL_PLAN]: {
      active: boolean;
      amount: number;
    };
  };
}

const initialState: RetirementAccountState = {
  retirementAccounts: {
    [RetirementAccountType.ORIGINAL]: { active: false, amount: 0 },
    [RetirementAccountType.ROTH_IRA]: { active: false, amount: 0 },
    [RetirementAccountType.TRADITIONAL_IRA]: { active: false, amount: 0 },
    [RetirementAccountType.SEP_PLAN]: { active: false, amount: 0 },
    [RetirementAccountType.PUBLIC_SCHOOL_PLAN]: { active: false, amount: 0 },
  },
};

export const retirementAccountSlice = createSlice({
  name: "retirementAccounts",
  initialState,
  reducers: {
    toggleRetirementAccount: (
      state,
      action: PayloadAction<RetirementAccountAction>
    ) => {
      state.retirementAccounts[action.payload.account.id] = {
        active: action.payload.checked,
        amount: action.payload.amount,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleRetirementAccount } = retirementAccountSlice.actions;

export default retirementAccountSlice.reducer;
