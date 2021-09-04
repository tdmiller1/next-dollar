import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Debt } from "../debt/Debt";
import { Demographics } from "../demographics/Demographics";
import { Employer } from "../employer/Employer";
import { Expenses } from "../expenses/Expenses";
import { Goals } from "../goals/Goals";
import { RetirementAccounts } from "../retirementAccounts/RetirementAccounts";
import { FormStateType } from "./formManagerSlice";

const FormSection = (): React.ReactElement => {
  const formManagerData = useSelector((state: RootState) => state.formManager);

  const { currentFormSection } = formManagerData;
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

export default FormSection;
