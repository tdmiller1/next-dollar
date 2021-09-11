import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { GoalType, updateGoalType } from "./goalsSlice";
import {
  CardActionArea,
  CardMedia,
  FormControl,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import fire from "../../static/images/fire.png";
import catchUp from "../../static/images/catch-up.jpg";
import paycheck from "../../static/images/paycheck.png";
import retirement from "../../static/images/retirement.jpg";

export function Goals(): React.ReactElement {
  const goalType = useSelector((state: RootState) => state.goals.goalType);
  const dispatch = useDispatch();

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="personal finance goals"
        name="controlled-radio-buttons-group"
        value={goalType}
      >
        <Grid container rowSpacing={2} columnSpacing={{ md: 4 }}>
          <Grid item sm={12} md={6}>
            <Card>
              <CardActionArea
                onClick={() => dispatch(updateGoalType(GoalType.FIRE))}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={fire}
                  alt="fire"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    FIRE
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Fire words
                  </Typography>
                </CardContent>
                <Radio value={GoalType.FIRE} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              <CardActionArea
                onClick={() =>
                  dispatch(updateGoalType(GoalType.RETIRE_COMFORTABLY))
                }
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={retirement}
                  alt="retirement"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Retire Comfortably
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Retire Comfortably words
                  </Typography>
                </CardContent>
                <Radio value={GoalType.RETIRE_COMFORTABLY} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              <CardActionArea
                onClick={() => dispatch(updateGoalType(GoalType.CATCH_UP))}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={catchUp}
                  alt="catch up"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Catch up
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Catch up words
                  </Typography>
                </CardContent>
                <Radio value={GoalType.CATCH_UP} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <Card>
              <CardActionArea
                onClick={() => dispatch(updateGoalType(GoalType.PAYCHECK))}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={paycheck}
                  alt="paycheck"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stop living paycheck to paycheck
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stop living paycheck to paycheck words
                  </Typography>
                </CardContent>
                <Radio value={GoalType.PAYCHECK} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
