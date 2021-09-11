import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { isNegative } from "../../helpers/hooks";
import { RootState } from "../../store";
import { ExpenseCalculator } from "./ExpenseCalculator";
import {
  ExpensesType,
  updateExpensesType,
  updateFixedExpensesValue,
} from "./expensesSlice";

export function Expenses(): React.ReactElement {
  const expensesData = useSelector((state: RootState) => state.expenses);
  const dispatch = useDispatch();

  return (
    <Layout
      leftColumn={
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
      }
      rightColumn={
        <>
          {expensesData.expensesType === ExpensesType.FIXED && (
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Fixed Expenses
              </InputLabel>
              <OutlinedInput
                type="number"
                sx={{ marginBottom: 4 }}
                id="outlined-adornment-amount"
                value={expensesData.fixedExpenseTotal}
                label="Fixed Expenses"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                onChange={(e) => {
                  const fixedExpenseTotal = parseInt(e.target.value, 10);
                  if (isNegative(fixedExpenseTotal)) return;
                  dispatch(
                    updateFixedExpensesValue({
                      fixedExpenseTotal,
                    })
                  );
                }}
              />
            </FormControl>
          )}
          {expensesData.expensesType === ExpensesType.CALCULATED && (
            <ExpenseCalculator />
          )}
        </>
      }
    />
  );
}
