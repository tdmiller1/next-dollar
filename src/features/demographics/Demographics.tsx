import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { isNegative } from "../../helpers/hooks";
import { RootState } from "../../store";
import { updateAge, updateFirstName } from "./demographicSlice";

export function Demographics(): React.ReactElement {
  const firstName = useSelector(
    (state: RootState) => state.demographics.firstName
  );
  const age = useSelector((state: RootState) => state.demographics.age);
  const dispatch = useDispatch();

  return (
    <Layout
      leftColumn={
        <>
          <TextField
            sx={{ marginBottom: 4 }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => dispatch(updateFirstName(e.target.value))}
          />
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            type="number"
            value={age}
            onChange={(e) => {
              const age = parseInt(e.target.value, 10);
              if (isNegative(age)) return;
              dispatch(updateAge(age));
            }}
          />
        </>
      }
      rightColumn={<React.Fragment></React.Fragment>}
    />
  );
}
