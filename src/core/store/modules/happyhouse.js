import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: {
    loading: false,
    data: null,
    error: null,
  },
};

const naverSlice = createSlice({
  name: "happyhouseJson",
  initialState,
  reducers: {
    setNaver(state, action) {
      state.naver = action.payload;
    },
  },
});

export const { setNaver } = naverSlice.actions;
export default naverSlice.reducer;
