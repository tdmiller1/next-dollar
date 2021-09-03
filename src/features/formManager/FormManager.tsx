import { Box } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Debt } from "../debt/Debt";
import { Demographics } from "../demographics/Demographics";
import { Employer } from "../employer/Employer";
import { Expenses } from "../expenses/Expenses";
import { Goals } from "../goals/Goals";
import { RetirementAccounts } from "../retirementAccounts/RetirementAccounts";
import { FormStateType, updateCurrentFormSection } from "./formManagerSlice";

function FormManager(): React.ReactElement {
  const formManagerData = useSelector((state: RootState) => state.formManager);
  const dispatch = useDispatch();

  const { currentFormSection } = formManagerData;

  const FormSection = () => {
    switch (currentFormSection) {
      case FormStateType.DEMOGRAPHICS:
        return <Demographics />;
      case FormStateType.EXPENSES:
        return <Expenses />;
      case FormStateType.EMPLOYER:
        return <Employer />;
      case FormStateType.DEBT:
        return <Debt />;
      case FormStateType.GOALS:
        return <Goals />;
      case FormStateType.RETIREMENT_ACCOUNTS:
        return <RetirementAccounts />;
      default:
        return <Demographics />;
    }
  };

  const Navigation = () => {
    return (
      <button
        onClick={() =>
          dispatch(updateCurrentFormSection(FormStateType.EXPENSES))
        }
      >
        Submit
      </button>
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <FormSection />
      <Navigation />
    </Box>
  );
}

export default FormManager;
