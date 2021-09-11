import { Box, Container } from "@material-ui/core";
import React from "react";
import FormSection from "./FormSection";
import Navigation from "./Navigation";

function FormManager(): React.ReactElement {
  return (
    <Navigation>
      <Box my={4} display="flex" justifyContent="center" alignItems="center">
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
