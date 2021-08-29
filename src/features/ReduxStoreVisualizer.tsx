import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import ReactJson from "react-json-view";

export function ReduxStoreVisualizer(): React.ReactElement {
  const demographics = useSelector((state: RootState) => state.demographics);
  const employer = useSelector((state: RootState) => state.employer);
  const debt = useSelector((state: RootState) => state.debt);
  const goals = useSelector((state: RootState) => state.goals);
  const retirementAccounts = useSelector(
    (state: RootState) => state.retirementAccounts
  );
  const expenses = useSelector((state: RootState) => state.expenses);
  const storeJSON = {
    ...demographics,
    ...employer,
    ...debt,
    ...goals,
    ...retirementAccounts,
    ...expenses,
  };

  return <ReactJson src={storeJSON} />;
}
