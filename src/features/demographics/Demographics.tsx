import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Person from "../../static/images/person.png";
import { RootState } from "../../store";
import { updateAge, updateFirstName } from "./demographicSlice";

export function Demographics(): React.ReactElement {
  const firstName = useSelector(
    (state: RootState) => state.demographics.firstName
  );
  const age = useSelector((state: RootState) => state.demographics.age);
  const dispatch = useDispatch();

  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12} sm={6} display="flex" flexDirection="column">
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
      </Grid>
      <Grid item xs={12} sm={6} display="flex" justifyContent="center">
        <img className="personImage" src={Person} width={300} />
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "auto",
            paddingTop: "115px",
            color: "black",
          }}
        >
          {firstName}
        </Typography>
      </Grid>
    </Grid>
  );
}
