import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "sampleSlice",
  initialState: {
    arr: [],
  },
  reducers: {
    updateArr: (state, action) => {
      state.arr = action.payload;
    },
  },
});

export const { updateArr } = Slice.actions;
export default Slice.reducer;
