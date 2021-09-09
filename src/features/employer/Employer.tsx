import {
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  IncomeVariation,
  updateIncomeType,
  updateSalary,
} from "./employerSlice";

export function Employer(): React.ReactElement {
  const employerData = useSelector((state: RootState) => state.employer);
  const { primaryIncomeType, salary } = employerData;
  const dispatch = useDispatch();

  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} sm={6} display="flex" flexDirection="column">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="radio-buttons-group"
            value={primaryIncomeType}
            onChange={(e) =>
              dispatch(updateIncomeType(e.target.value as IncomeVariation))
            }
          >
            <FormControlLabel
              value={IncomeVariation.FIXED}
              control={<Radio />}
              label="Fixed"
            />
            <FormControlLabel
              value={IncomeVariation.VARIABLE}
              control={<Radio />}
              label="Variable"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} display="flex" flexDirection="column">
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            type="number"
            sx={{ marginBottom: 4 }}
            id="outlined-adornment-amount"
            label="Amount"
            value={salary}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            onChange={(e) =>
              dispatch(updateSalary(parseInt(e.target.value, 10)))
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
