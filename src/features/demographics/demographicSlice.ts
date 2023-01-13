import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  firstName: string;
  age: number;
  sub: string;
}

const initialState: CounterState = {
  firstName: "",
  age: 0,
  sub: "",
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
    updateSub: (state, action: PayloadAction<string>) => {
      state.sub = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFirstName, updateAge, updateSub } =
  demographicSlice.actions;

export default demographicSlice.reducer;
