import { configureStore } from "@reduxjs/toolkit";
import planReducer from "../slices/toggleSlice";

export const store = configureStore({
  reducer: { pricePlan: planReducer },
});
