import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  house: {
    loading: false,
    data: null,
    error: null,
  },
};

const houseSlice = createSlice({
  name: "happyhouseJson",
  initialState,
  reducers: {
    setHouseData(state, action) {
      state.home = action.payload;
    },
  },
});

export const { setHomeData } = naverSlice.actions;
export default naverSlice.reducer;
