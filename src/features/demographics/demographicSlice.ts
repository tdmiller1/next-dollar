import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  firstName: string;
  age: number;
}

const initialState: CounterState = {
  firstName: "",
  age: 0,
};

export const demographicSlice = createSlice({
  name: "demographics",
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFirstName, updateAge } = demographicSlice.actions;

export default demographicSlice.reducer;
