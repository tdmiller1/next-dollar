import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import ReactJson from "react-json-view";
import { Box } from "@mui/material";

export function ReduxStoreVisualizer(): React.ReactElement {
  const demographics = useSelector((state: RootState) => state.demographics);
  const employer = useSelector((state: RootState) => state.employer);
  const debt = useSelector((state: RootState) => state.debt);
  const goals = useSelector((state: RootState) => state.goals);
  const retirementAccounts = useSelector(
    (state: RootState) => state.retirementAccounts
  );
  const expenses = useSelector((state: RootState) => state.expenses);
  const formManager = useSelector((state: RootState) => state.formManager);
  const storeJSON = {
    ...demographics,
    ...employer,
    ...debt,
    ...goals,
    ...retirementAccounts,
    ...expenses,
    ...formManager,
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <ReactJson src={storeJSON} />
    </Box>
  );
}
