import { configureStore } from "@reduxjs/toolkit";
import planReducer from "../slices/toggleSlice";
import navigationSlice from "../slices/navigationSlice";

export const store = configureStore({
  reducer: { pricePlan: planReducer, navigation: navigationSlice },
});
