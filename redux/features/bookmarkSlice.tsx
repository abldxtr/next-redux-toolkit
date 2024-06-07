import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  type: string;
  image: string;
  lang: string;
  plot: string;
}

const initialState: Movie[] = [];

export const favaSlice = createSlice({
  name: "fava",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Movie>) => {
      if (state.findIndex((pre) => pre.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.filter((item) => item.id !== action.payload.id);
      }
    },
    remove: (state, action: PayloadAction<Movie>) => {
      const id = action.payload.id;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { add, remove } = favaSlice.actions;
// export const { increment, decrement, incrementByAmount } = counter.actions;

export default favaSlice.reducer;
