/** @jsxImportSource @emotion/react */
import React, { useState } from "react";

import StepperNavigation from "../components/StepperNavigation";
import Demographics from "../components/InputForm/Demographics";
import Income from "../components/InputForm/Income";
import Loans from "../components/InputForm/Loans";
import { Box } from "@material-ui/core";

function InputForm(): React.ReactElement {
  const [invalidForm, setInvalidForm] = useState(true);

  function validationCallback(isValid: boolean) {
    setInvalidForm(!isValid);
    console.log(invalidForm);
  }

  const steps = [
    {
      stepName: "Demographics",
      component: <Demographics validationCallback={validationCallback} />,
    },
    {
      stepName: "Income",
      component: <Income validationCallback={validationCallback} />,
    },
    {
      stepName: "Loans",
      component: <Loans validationCallback={validationCallback} />,
    },
    { stepName: "Goals", component: <div>test 4</div> },
  ];

  return (
    <Box display="flex" sx={{ flexGrow: 1 }} justifyContent="center">
      <Box margin={4} width={760}>
        <StepperNavigation
          invalidForm={false}
          validationCallback={validationCallback}
          steps={steps}
        />
        <InputForm />
      </Box>
    </Box>
  );
}

export default InputForm;
