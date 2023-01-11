import { ArrowBack, ArrowForward } from "@material-ui/icons";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { isNegative } from "../../helpers/hooks";
import { RootState } from "../../store";
import {
  IncomeVariation,
  updateIncomeType,
  updateSalary,
  updateNewJobRisk,
} from "./employerSlice";

export function Employer(): React.ReactElement {
  const employerData = useSelector((state: RootState) => state.employer);
  const { primaryIncomeType, salary, newJobRisk } = employerData;
  const dispatch = useDispatch();

  return (
    <Layout
      leftColumn={
        <>
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
          <Box sx={{ width: 500 }}>
            <Typography sx={{ py: 2 }} variant="body1">
              How hard would it be for you to find a new job?
            </Typography>
            <Stack
              spacing={1}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <ArrowBack />
              <Typography sx={{ pr: 1 }}>Easy</Typography>
              <Slider
                aria-label="Volume"
                value={newJobRisk}
                onChange={(e, newValue) =>
                  dispatch(updateNewJobRisk(newValue as number))
                }
              />
              <Typography sx={{ pl: 1 }}>Hard</Typography>
              <ArrowForward />
            </Stack>
            <Typography sx={{ py: 2 }} variant="subtitle2">
              (This information will be used to calculate your emergency fund)
            </Typography>
          </Box>
        </>
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
            onChange={(e) => {
              const salary = parseInt(e.target.value, 10);
              if (isNegative(salary)) return;
              dispatch(updateSalary(salary));
            }}
          />
        </FormControl>
      }
    />
  );
}
