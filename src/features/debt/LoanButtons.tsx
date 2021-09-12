import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addLoan, LoanType } from "./debtSlice";
import { Grid, Button } from "@mui/material";
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
        amount: "100",
        interestRate: "4.03",
      })
    );
  }

  return (
    <Grid container justifyContent="center">
      <Grid item lg={12} md={6}>
        <Button
          sx={{ margin: 2 }}
          onClick={() => handleAddLoan(LoanType.AUTO)}
          aria-label="add auto loan"
          variant="outlined"
          startIcon={<DirectionsCarIcon />}
        >
          Auto Loan
        </Button>
      </Grid>
      <Grid item lg={12} md={6}>
        <Button
          sx={{ margin: 2 }}
          onClick={() => handleAddLoan(LoanType.STUDENT)}
          aria-label="add student loan"
          variant="outlined"
          startIcon={<SchoolIcon />}
        >
          Student Loan
        </Button>
      </Grid>
      <Grid item lg={12} md={6}>
        <Button
          sx={{ margin: 2 }}
          onClick={() => handleAddLoan(LoanType.MORTGAGE)}
          aria-label="add mortgage"
          variant="outlined"
          startIcon={<HouseIcon />}
        >
          Mortgage
        </Button>
      </Grid>
      <Grid item lg={12} md={6}>
        <Button
          sx={{ margin: 2 }}
          onClick={() => handleAddLoan(LoanType.CREDIT)}
          aria-label="add credit card debt"
          variant="outlined"
          startIcon={<HouseIcon />}
        >
          Credit Card
        </Button>
      </Grid>
      <Grid item lg={12} md={6}>
        <Button
          sx={{ margin: 2 }}
          onClick={() => handleAddLoan(LoanType.OTHER)}
          aria-label="add other loan"
          variant="outlined"
          startIcon={<HouseIcon />}
        >
          Other
        </Button>
      </Grid>
    </Grid>
  );
}
