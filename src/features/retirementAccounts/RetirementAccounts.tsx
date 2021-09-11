import React from "react";
import {
  FormGroup,
  Grid,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  Box,
  OutlinedInput,
} from "@mui/material";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { isNegative } from "../../helpers/hooks";

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
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} sm={6} display="flex" flexDirection="column">
        <FormGroup>
          {RETIREMENT_ACCOUNTS.map((account) => {
            const accountData =
              retirementAccountsData.retirementAccounts[account.id];
            return (
              <Box
                margin={2}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Box display="flex" sx={{ minWidth: 175 }}>
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
                </Box>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel
                    disabled={!accountData.active}
                    htmlFor="outlined-adornment-amount"
                  >
                    Amount
                  </InputLabel>
                  <OutlinedInput
                    type="number"
                    id="outlined-adornment-amount"
                    disabled={!accountData.active}
                    label="Amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    value={accountData.amount}
                    onChange={(e) => {
                      const amount = parseInt(e.target.value, 10);
                      if (isNegative(amount)) return;
                      dispatch(
                        toggleRetirementAccount({
                          ...accountData,
                          account,
                          amount,
                          checked: accountData.active,
                        })
                      );
                    }}
                  />
                </FormControl>
              </Box>
            );
          })}
        </FormGroup>
      </Grid>
    </Grid>
  );
}
