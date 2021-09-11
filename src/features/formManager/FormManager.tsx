import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { FormStateType } from "./formManagerSlice";
import FormSection from "./FormSection";
import Navigation from "./Navigation";

function FormManager(): React.ReactElement {
  const formManagerData = useSelector((state: RootState) => state.formManager);
  const { currentFormSection } = formManagerData;

  const SectionTitles = {
    [FormStateType.DEMOGRAPHICS]: "User Info",
    [FormStateType.EMPLOYER]: "Employer",
    [FormStateType.DEBT]: "Debt",
    [FormStateType.EXPENSES]: "Expenses",
    [FormStateType.RETIREMENT_ACCOUNTS]: "Retirement Accounts",
    [FormStateType.GOALS]: "Goals",
  };

  return (
    <Navigation>
      <Box mb={4} display="flex" justifyContent="center" alignItems="center">
        <Container
          sx={{
            "@media screen and (min-width: 600px)": {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
            "@media screen and (max-width: 600px)": {
              paddingLeft: "8px",
              paddingRight: "8px",
            },
          }}
        >
          <Box justifyContent="center" display="flex" mb={6}>
            <Typography variant="h4">
              {SectionTitles[currentFormSection]}
            </Typography>
          </Box>
          <Box
            width={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <FormSection />
          </Box>
        </Container>
      </Box>
    </Navigation>
  );
}

export default FormManager;
