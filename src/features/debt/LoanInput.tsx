import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { isNegative } from "../../helpers/hooks";
import { updateLoan, removeLoan, Loan } from "./debtSlice";

interface LoanInputProps {
  loan: Loan;
}

export const LoanInput: React.FC<LoanInputProps> = ({ loan }) => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="row"
    >
      <Typography variant="body1" sx={{ minWidth: 100 }}>
        {loan.type}
      </Typography>
      <Box margin={2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount1">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount1"
            label="Amount"
            type="number"
            placeholder="Amount"
            value={loan.amount}
            onChange={(e) => {
              const amount = parseInt(e.target.value, 10);
              if (amount) return;
              dispatch(
                updateLoan({
                  ...loan,
                  id: loan.id,
                  amount,
                })
              );
            }}
          />
        </FormControl>
      </Box>
      <Box margin={2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount2">
            Interest Rate
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount2"
            label="Interest Rate"
            value={loan.interestRate}
            type="number"
            onChange={(e) => {
              const interestRate = parseInt(e.target.value, 10);
              if (isNegative(interestRate)) return;
              dispatch(
                updateLoan({
                  ...loan,
                  id: loan.id,
                  interestRate,
                })
              );
            }}
            placeholder="Interest Rate"
          />
        </FormControl>
      </Box>
      <IconButton
        onClick={() => dispatch(removeLoan(loan))}
        aria-label="remove loan"
        component="span"
      >
        <Delete />
      </IconButton>
    </Box>
  );
};
