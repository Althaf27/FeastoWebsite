import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: "",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    setNavigation: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setNavigation } = navigationSlice.actions;

export const selectNavigationItem = (state) => state.navigation.selectedItem;

export default navigationSlice.reducer;
