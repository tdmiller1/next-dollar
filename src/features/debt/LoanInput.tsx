import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { updateLoan, removeLoan, Loan } from "./debtSlice";

interface LoanInputProps {
  loan: Loan;
}

export const LoanInput: React.FC<LoanInputProps> = ({ loan }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {loan.type}
      <input
        value={loan.amount}
        type="number"
        onChange={(e) =>
          dispatch(
            updateLoan({
              ...loan,
              id: loan.id,
              amount: parseInt(e.target.value, 10),
            })
          )
        }
        placeholder="Amount"
      />
      <input
        value={loan.interestRate}
        type="number"
        onChange={(e) =>
          dispatch(
            updateLoan({
              ...loan,
              id: loan.id,
              interestRate: parseInt(e.target.value, 10),
            })
          )
        }
        placeholder="Interest Rate"
      />
      <IconButton
        onClick={() => dispatch(removeLoan(loan))}
        aria-label="remove loan"
        component="span"
      >
        <Delete />
      </IconButton>
    </div>
  );
};
