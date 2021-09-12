import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useDispatch } from "react-redux";
import { isNegative } from "../../helpers/hooks";
import { updateLoan, removeLoan, Loan } from "./debtSlice";

interface LoanInputProps {
  loan: Loan;
}

export const LoanInput: React.FC<LoanInputProps> = ({ loan }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="row"
    >
      <Typography variant="body1" sx={{ minWidth: isMobile ? 90 : 175 }}>
        {loan.type}
      </Typography>
      <Box margin={isMobile ? 1 : 2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount1">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount1"
            label="Amount"
            placeholder="Amount"
            value={loan.amount}
            onChange={(e) => {
              const amount = e.target.value;
              if (isNegative(amount)) return;
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
      <Box margin={isMobile ? 0 : 2}>
        <FormControl fullWidth>
          <InputLabel htmlFor="outlined-adornment-amount2">
            Interest Rate
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount2"
            label="Interest Rate"
            value={loan.interestRate}
            onChange={(e) => {
              const interestRate = e.target.value;
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
