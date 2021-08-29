import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {
  updateIncomeType,
  updateSalary,
  IncomeVariation,
} from "./employerSlice";
import {
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

export function Employer(): React.ReactElement {
  const employerData = useSelector((state: RootState) => state.employer);
  const { primaryIncomeType, salary } = employerData;
  const dispatch = useDispatch();

  return (
    <React.Fragment>
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
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-amount">Salary</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={salary}
          onChange={(e) => dispatch(updateSalary(parseInt(e.target.value, 10)))}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    </React.Fragment>
  );
}
