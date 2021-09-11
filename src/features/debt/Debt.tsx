import React from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import LoanButtons from "./LoanButtons";
import { LoanInput } from "./LoanInput";
import Layout from "../../components/Layout";
import { Box } from "@mui/system";

export function Debt(): React.ReactElement {
  const debtData = useSelector((state: RootState) => state.debt);

  return (
    <React.Fragment>
      <Layout
        leftColumn={<LoanButtons />}
        rightColumn={
          <Box
            margin={3}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Box display="flex" flexDirection="column">
              {debtData.loans.map((loan) => (
                <LoanInput loan={loan} />
              ))}
            </Box>
          </Box>
        }
      />
    </React.Fragment>
  );
}
