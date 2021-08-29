/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

interface IncomeProps {
  validationCallback: (isValid: boolean) => void;
}

const Income: React.FC<IncomeProps> = (props) => {
  const { validationCallback } = props;
  const [age, setAge] = useState<number | null>(null);
  const [zipcode, setZipcode] = useState<number | null>(null);
  const [incomeVariation, setIncomeVariation] = useState("fixed");

  return (
    <Box
      display="flex"
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      flexDirection="column"
      marginTop={1}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend">Income Variation</FormLabel>
        <RadioGroup
          value={incomeVariation}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setIncomeVariation((event.target as HTMLInputElement).value)
          }
          row
          aria-label="gender"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="fixed"
            control={<Radio />}
            label="Fixed Income"
          />
          <FormControlLabel
            value="variable"
            control={<Radio />}
            label="Variable Income"
          />
        </RadioGroup>
      </FormControl>
      {incomeVariation === "fixed" && (
        <Box display="flex" flexDirection="row" justifyContent="space-around">
          <Box>
            <Box
              display="flex"
              marginTop={1}
              marginBottom={1}
              justifyContent="center"
            >
              <TextField
                id="outlined-basic"
                label="Salary"
                variant="outlined"
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))}
              />
            </Box>
            <Box
              display="flex"
              marginTop={1}
              marginBottom={1}
              justifyContent="center"
            >
              <TextField
                id="outlined-basic"
                label="Bonus"
                variant="outlined"
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))}
              />
            </Box>
            <Box
              display="flex"
              marginTop={1}
              marginBottom={1}
              justifyContent="center"
            >
              <TextField
                id="outlined-basic"
                label="Additional Income"
                variant="outlined"
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))}
              />
            </Box>
          </Box>
          <Box>
            <div>Cool money building visual like </div>building an accounting
            sheet with $$$ <div>and a large total income number</div>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Income;
