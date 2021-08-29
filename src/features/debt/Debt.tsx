import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import LoanButtons from "./LoanButtons";
import { LoanInput } from "./LoanInput";

export function Debt(): React.ReactElement {
  const debtData = useSelector((state: RootState) => state.debt);

  return (
    <React.Fragment>
      <LoanButtons />
      {debtData.loans.map((loan) => (
        <LoanInput loan={loan} />
      ))}
    </React.Fragment>
  );
}
