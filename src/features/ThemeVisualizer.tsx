import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
export function ThemeVisualizer(): React.ReactElement {
  return (
    <Box>
      <Button>Test</Button>
      <Button disabled={true}>Disabled</Button>
      <Button startIcon={<DirectionsCarIcon />}>Icon Button</Button>
      <IconButton>
        <DirectionsCarIcon />
      </IconButton>
      <FormLabel>Checkboxes</FormLabel>
      <Checkbox checked={true} />
      <Checkbox checked={false} />
      <TextField label="Test Label" value="Entered Value" />
      <TextField label="Test Label" />
      <FormControl component="fieldset">
        <FormLabel>Radio Buttons</FormLabel>
        <RadioGroup aria-label="gender" name="controlled-radio-buttons-group">
          <FormControlLabel value="one" control={<Radio />} label="One" />
          <FormControlLabel value="two" control={<Radio />} label="Two" />
        </RadioGroup>
      </FormControl>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            benevolent
          </Typography>
          <Typography sx={{ mb: 1.5 }}>adjective</Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Learn More</Button>
        </CardActions>
      </Card>
      <Typography variant="h1">Responsive h1</Typography>
      <Typography variant="h2">Responsive h2</Typography>
      <Typography variant="h3">Responsive h3</Typography>
      <Typography variant="h4">Responsive h4</Typography>
      <Typography variant="h5">Responsive h5</Typography>
      <Typography variant="h6">Responsive h6</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="button">button</Typography>
      <br />
      <Typography variant="caption">caption</Typography>
      <br />
      <Typography variant="overline">overline</Typography>
    </Box>
  );
}
