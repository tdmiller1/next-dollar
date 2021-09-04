import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { completeFormSection, formStateOrder } from "./formManagerSlice";

interface NavigationProps {
  children: React.ReactElement;
}
const Navigation: React.FC<NavigationProps> = (props) => {
  const { children } = props;
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const labels = {
    DEMOGRAPHICS: "Demographics",
    EMPLOYER: "Employer",
    DEBT: "Debt",
    EXPENSES: "Expenses",
    RETIREMENT_ACCOUNTS: "Retirement Accounts",
    GOALS: "Goals",
  };

  const totalSteps = () => {
    return formStateOrder.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all formStateOrder have been completed,
          // find the first step that has been completed
          formStateOrder.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    dispatch(completeFormSection(formStateOrder[newActiveStep - 1]));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    dispatch(completeFormSection(formStateOrder[activeStep - 2]));
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    dispatch(completeFormSection(formStateOrder[step - 1]));
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        justifyContent: "space-between",
      }}
    >
      <Box ml="auto" mr="auto" my={4} sx={{ width: "95vw" }}>
        <Stepper nonLinear activeStep={activeStep}>
          {formStateOrder.map((step, index) => (
            <Step key={step} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {!isMobile && labels[step]}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box ml="auto" mr="auto" my={4} sx={{ height: "100vh", width: "90vw" }}>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All formStateOrder completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignContent="space-between"
            height={1}
          >
            <Box>{children}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navigation;
