import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addLoan, LoanType } from "./debtSlice";
import { Button } from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SchoolIcon from "@material-ui/icons/School";
import HouseIcon from "@material-ui/icons/House";

export default function LoanButtons(): React.ReactElement {
  const dispatch = useDispatch();

  function handleAddLoan(type: LoanType) {
    dispatch(
      addLoan({
        id: uuidv4(),
        type,
        amount: 100,
        interestRate: 0.4,
      })
    );
  }

  return (
    <React.Fragment>
      <Button
        onClick={() => handleAddLoan(LoanType.AUTO)}
        aria-label="add auto loan"
        variant="outlined"
        startIcon={<DirectionsCarIcon />}
      >
        Auto Loan
      </Button>
      <Button
        onClick={() => handleAddLoan(LoanType.STUDENT)}
        aria-label="add student loan"
        variant="outlined"
        startIcon={<SchoolIcon />}
      >
        Student Loan
      </Button>
      <Button
        onClick={() => handleAddLoan(LoanType.MORTGAGE)}
        aria-label="add mortgage"
        variant="outlined"
        startIcon={<HouseIcon />}
      >
        Mortgage
      </Button>
      <Button
        onClick={() => handleAddLoan(LoanType.CREDIT)}
        aria-label="add credit card debt"
        variant="outlined"
        startIcon={<HouseIcon />}
      >
        Credit Card
      </Button>
      <Button
        onClick={() => handleAddLoan(LoanType.OTHER)}
        aria-label="add other loan"
        variant="outlined"
        startIcon={<HouseIcon />}
      >
        Other
      </Button>
    </React.Fragment>
  );
}
