import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
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
    <Layout
      leftColumn={
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
      }
      rightColumn={
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
      }
    />
  );
}
