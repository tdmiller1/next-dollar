/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

import { Box, TextField } from "@material-ui/core";

interface DemographicsProps {
  validationCallback: (isValid: boolean) => void;
}

const Demographics: React.FC<DemographicsProps> = (props) => {
  const { validationCallback } = props;
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [zipcode, setZipcode] = useState<number | null>(null);

  useEffect(() => {
    if (firstName && age && zipcode) validationCallback(true);
  }, [firstName, age, zipcode]);

  return (
    <Box
      display="flex"
      sx={{ flexGrow: 1 }}
      justifyContent="center"
      flexDirection="column"
      marginTop={1}
    >
      <Box
        display="flex"
        marginTop={1}
        marginBottom={1}
        justifyContent="center"
      >
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value as string)}
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
          label="Age"
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
          label="Zipcode"
          type="number"
          variant="outlined"
          value={zipcode}
          onChange={(e) => setZipcode(parseInt(e.target.value, 10))}
        />
      </Box>
    </Box>
  );
};

export default Demographics;
