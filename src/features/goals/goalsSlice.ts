import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const enum GoalType {
  FIRE = "FIRE",
  RETIRE_COMFORTABLY = "RETIRE_COMFORTABLY",
  CATCH_UP = "CATCH_UP",
  PAYCHECK = "PAYCHECK",
}

export interface GoalState {
  goalType: GoalType;
}

const initialState: GoalState = {
  goalType: GoalType.RETIRE_COMFORTABLY,
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    updateGoalType: (state, action: PayloadAction<GoalType>) => {
      state.goalType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateGoalType } = goalsSlice.actions;

export default goalsSlice.reducer;
