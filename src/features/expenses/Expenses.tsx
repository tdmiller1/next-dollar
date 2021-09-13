import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
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
  updateExpensesRange,
} from "./expensesSlice";

export function Expenses(): React.ReactElement {
  const expensesData = useSelector((state: RootState) => state.expenses);
  const dispatch = useDispatch();

  const ExpensesRange = () => {
    let leftSideValue = 0;
    let rightSideValue = 100;
    const range = expensesData.expensesRange as number;
    const multiplier = range ? range / 200 : 0;
    if (expensesData.expensesType === ExpensesType.FIXED) {
      leftSideValue = Math.floor(
        expensesData.fixedExpenseTotal -
          expensesData.fixedExpenseTotal * multiplier
      );
      rightSideValue = Math.ceil(
        expensesData.fixedExpenseTotal +
          expensesData.fixedExpenseTotal * multiplier
      );
    }

    leftSideValue = Math.floor(
      expensesData.expensesTotal - expensesData.expensesTotal * multiplier
    );
    rightSideValue = Math.ceil(
      expensesData.expensesTotal + expensesData.expensesTotal * multiplier
    );

    return (
      <Typography>
        ${leftSideValue} - ${rightSideValue}
      </Typography>
    );
  };

  return (
    <Layout
      leftColumn={
        <>
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
          <Box sx={{ width: 500 }}>
            <Stack
              spacing={1}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <ArrowBack />
              <Typography sx={{ pr: 1 }}>Conservative</Typography>
              <Slider
                aria-label="Volume"
                value={expensesData.expensesRange}
                onChange={(e, newValue) =>
                  dispatch(
                    updateExpensesRange({
                      expensesRange: newValue,
                    })
                  )
                }
              />
              <Typography sx={{ pl: 1 }}>Liberal</Typography>
              <ArrowForward />
            </Stack>
          </Box>
          <ExpensesRange />
        </>
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
