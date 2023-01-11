import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum RetirementAccountType {
  ORIGINAL,
  ROTH_IRA,
  TRADITIONAL_IRA,
  SEP_PLAN,
  PUBLIC_SCHOOL_PLAN,
  HSA_PLAN,
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
  match?: boolean;
}

export interface RetirementAccountState {
  retirementAccounts: {
    [RetirementAccountType.ORIGINAL]: {
      active: boolean;
      amount: number;
      match?: boolean;
    };
    [RetirementAccountType.ROTH_IRA]: {
      active: boolean;
      amount: number;
      match?: boolean;
    };
    [RetirementAccountType.TRADITIONAL_IRA]: {
      active: boolean;
      amount: number;
      match?: boolean;
    };
    [RetirementAccountType.SEP_PLAN]: {
      active: boolean;
      amount: number;
      match?: boolean;
    };
    [RetirementAccountType.PUBLIC_SCHOOL_PLAN]: {
      active: boolean;
      amount: number;
      match?: boolean;
    };
    [RetirementAccountType.HSA_PLAN]: {
      active: boolean;
      amount: number;
      match?: boolean;
    };
  };
}

const initialState: RetirementAccountState = {
  retirementAccounts: {
    [RetirementAccountType.ORIGINAL]: {
      active: false,
      amount: 0,
      match: false,
    },
    [RetirementAccountType.ROTH_IRA]: {
      active: false,
      amount: 0,
      match: false,
    },
    [RetirementAccountType.TRADITIONAL_IRA]: {
      active: false,
      amount: 0,
      match: false,
    },
    [RetirementAccountType.SEP_PLAN]: {
      active: false,
      amount: 0,
      match: false,
    },
    [RetirementAccountType.PUBLIC_SCHOOL_PLAN]: {
      active: false,
      amount: 0,
      match: false,
    },
    [RetirementAccountType.HSA_PLAN]: {
      active: false,
      amount: 0,
      match: false,
    },
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
        match: action.payload.match,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleRetirementAccount } = retirementAccountSlice.actions;

export default retirementAccountSlice.reducer;
