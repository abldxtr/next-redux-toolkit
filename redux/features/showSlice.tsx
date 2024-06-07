import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

export const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    show: (state) => {
      return (state = !state);
    },
  },
});

export const { show } = showSlice.actions;
// export const { increment, decrement, incrementByAmount } = counter.actions;

export default showSlice.reducer;
