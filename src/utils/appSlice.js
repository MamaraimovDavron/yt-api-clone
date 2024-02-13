import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { open: true },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
  },
});

export default appSlice.reducer;
