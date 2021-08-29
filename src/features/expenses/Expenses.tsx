import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { updateExpensesType, ExpensesType } from "./expensesSlice";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { ExpenseCalculator } from "./ExpenseCalculator";

export function Expenses(): React.ReactElement {
  const expensesData = useSelector((state: RootState) => state.expenses);
  const dispatch = useDispatch();

  return (
    <Box>
      <FormControl component="fieldset">
        <FormLabel component="legend">Expenses</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="controlled-radio-buttons-group"
          value={expensesData.expensesType}
          onChange={(e) =>
            dispatch(
              updateExpensesType({
                expensesType: e.target.value as ExpensesType,
              })
            )
          }
        >
          <FormControlLabel
            value={ExpensesType.FIXED}
            control={<Radio />}
            label="Fixed"
          />
          <FormControlLabel
            value={ExpensesType.CALCULATED}
            control={<Radio />}
            label="Calculated"
          />
        </RadioGroup>
      </FormControl>
      {expensesData.expensesType === ExpensesType.FIXED && (
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-amount">
            Fixed Expenses
          </InputLabel>
          <Input
            value={0}
            onChange={(e) => console.log(e)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      )}
      {expensesData.expensesType === ExpensesType.CALCULATED && (
        <ExpenseCalculator />
      )}
    </Box>
  );
}
