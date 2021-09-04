import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateAge } from "./demographicSlice";
import { Box, TextField } from "@mui/material";

export function Demographics(): React.ReactElement {
  const firstName = useSelector(
    (state: RootState) => state.demographics.firstName
  );
  const age = useSelector((state: RootState) => state.demographics.age);
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column">
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
        onChange={(e) => dispatch(updateAge(parseInt(e.target.value, 10)))}
      />
    </Box>
  );
}
