import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Box,
} from "@material-ui/core";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";

import {
  toggleRetirementAccount,
  RetirementAccountType,
} from "./retirementAccountsSlice";

export function RetirementAccounts(): React.ReactElement {
  const retirementAccountsData = useSelector(
    (state: RootState) => state.retirementAccounts
  );
  const dispatch = useDispatch();
  const RETIREMENT_ACCOUNTS = [
    {
      id: RetirementAccountType.ORIGINAL,
      name: "401k",
      taxDeffered: true,
      employerSponsored: true,
    },
    {
      id: RetirementAccountType.ROTH_IRA,
      name: "Roth IRA",
      taxDeffered: false,
      employerSponsored: false,
    },
    {
      id: RetirementAccountType.TRADITIONAL_IRA,
      name: "Traditional IRA",
      taxDeffered: true,
      employerSponsored: false,
    },
    {
      id: RetirementAccountType.SEP_PLAN,
      name: "SEP Plan",
      taxDeffered: true,
      employerSponsored: false,
    },
    {
      id: RetirementAccountType.PUBLIC_SCHOOL_PLAN,
      name: "403(b) Plan",
      taxDeffered: true,
      employerSponsored: true,
    },
  ];

  return (
    <FormGroup>
      {RETIREMENT_ACCOUNTS.map((account) => {
        const accountData =
          retirementAccountsData.retirementAccounts[account.id];
        return (
          <Box margin={2} display="flex" flexDirection="row">
            <FormControlLabel
              control={
                <Checkbox
                  checked={accountData.active}
                  onChange={(e) => {
                    dispatch(
                      toggleRetirementAccount({
                        ...accountData,
                        account,
                        checked: e.target.checked,
                        amount: accountData.amount,
                      })
                    );
                  }}
                />
              }
              label={account.name}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="standard-adornment-amount">
                Amount
              </InputLabel>
              <Input
                id={`${account.name}-standard-adornment-amount`}
                value={accountData.amount}
                onChange={(e) => {
                  dispatch(
                    toggleRetirementAccount({
                      ...accountData,
                      account,
                      amount: parseInt(e.target.value, 10),
                      checked: accountData.active,
                    })
                  );
                }}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
          </Box>
        );
      })}
    </FormGroup>
  );
}
