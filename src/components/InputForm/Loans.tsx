/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import { Button, Box, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SchoolIcon from "@material-ui/icons/School";
import HouseIcon from "@material-ui/icons/House";

interface LoansProps {
  validationCallback: (isValid: boolean) => void;
}

enum LoanTypes {
  Auto,
  Student,
  Mortgage,
  Other,
}
interface LoanObject {
  id: number;
  type: LoanTypes;
  interestRate: number;
}
interface DebtObject {
  autoLoans: LoanObject[];
  studentLoans: LoanObject[];
  mortgages: LoanObject[];
  otherLoans: LoanObject[];
}

interface LoanProps {
  loan: LoanObject;
  updateLoan: (loan: LoanObject) => void;
}

const Loan: React.FC<LoanProps> = (props) => {
  const { loan, updateLoan } = props;
  return (
    <Box display="flex" marginTop={1} marginBottom={1} justifyContent="center">
      <TextField
        id="outlined-basic"
        label="Bonus"
        variant="outlined"
        type="number"
        value={loan.interestRate}
        onChange={(e) =>
          updateLoan({ ...loan, interestRate: parseInt(e.target.value, 10) })
        }
      />
    </Box>
  );
};

const Loans: React.FC<LoansProps> = (props) => {
  const [debtObject, setDebtObject] = useState<DebtObject>({
    autoLoans: [],
    studentLoans: [],
    mortgages: [],
    otherLoans: [],
  });

  function handleAutoLoanAdd() {
    const currentAutoLoans: LoanObject[] = debtObject?.autoLoans;
    const newAutoLoan: LoanObject = {
      type: LoanTypes.Auto,
      interestRate: 0,
      id: currentAutoLoans.length,
    };
    const newAutoLoans = [...currentAutoLoans, newAutoLoan];
    setDebtObject((existingState: DebtObject) => ({
      ...existingState,
      autoLoans: newAutoLoans,
    }));
  }

  function handleStudentLoanAdd() {
    const currentStudentLoans: LoanObject[] = debtObject?.studentLoans;
    const newStudentLoan: LoanObject = {
      type: LoanTypes.Student,
      interestRate: 0,
      id: currentStudentLoans.length,
    };
    const newStudentLoans = [...currentStudentLoans, newStudentLoan];
    setDebtObject((existingState: DebtObject) => ({
      ...existingState,
      studentLoans: newStudentLoans,
    }));
  }
  function handleMortgageLoanAdd() {
    const currentMortgages: LoanObject[] = debtObject?.mortgages;
    const newMortgage: LoanObject = {
      type: LoanTypes.Mortgage,
      interestRate: 0,
      id: currentMortgages.length,
    };
    const newMortgages = [...currentMortgages, newMortgage];
    setDebtObject((existingState: DebtObject) => ({
      ...existingState,
      mortgages: newMortgages,
    }));
  }
  function handleOtherLoansAdd() {
    const currentOtherLoans: LoanObject[] = debtObject?.otherLoans;
    const newOtherLoan: LoanObject = {
      type: LoanTypes.Other,
      interestRate: 0,
      id: currentOtherLoans.length,
    };
    const newOtherLoans = [...currentOtherLoans, newOtherLoan];
    setDebtObject((existingState: DebtObject) => ({
      ...existingState,
      otherLoans: newOtherLoans,
    }));
  }

  function updateLoan(loan: LoanObject) {
    console.log(loan);
  }

  return (
    <Box
      display="flex"
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      flexDirection="column"
      marginTop={1}
    >
      <Box
        display="flex"
        marginTop={1}
        marginBottom={1}
        justifyContent="center"
      >
        <Button
          onClick={handleAutoLoanAdd}
          aria-label="add auto loan"
          variant="outlined"
          startIcon={<DirectionsCarIcon />}
        >
          Auto Loan
        </Button>
        <Button
          onClick={handleStudentLoanAdd}
          aria-label="add student loan"
          variant="outlined"
          startIcon={<SchoolIcon />}
        >
          Student Loan
        </Button>
        <Button
          onClick={handleMortgageLoanAdd}
          aria-label="add mortgage"
          variant="outlined"
          startIcon={<HouseIcon />}
        >
          Mortgage
        </Button>
        <IconButton
          onClick={handleOtherLoansAdd}
          aria-label="add other loan"
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </Box>
      {debtObject.autoLoans.map((loan) => (
        <Loan loan={loan} updateLoan={updateLoan} />
      ))}
      {/* {debtObject.studentLoans.map((loan) => (
        <Loan loan={loan} />
      ))}
      {debtObject.mortgages.map((loan) => (
        <Loan loan={loan} />
      ))}
      {debtObject.otherLoans.map((loan) => (
        <Loan loan={loan} />
      ))} */}
      Each one needs amount total left, % interest rate, a note about a more
      indepth guide to paydown later
    </Box>
  );
};

export default Loans;
