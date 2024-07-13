import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: "annually",
};

export const planSlice = createSlice({
  name: "pricePlan",
  initialState: initialState,
  reducers: {
    setPlan: (state) => {
      state.plan = state.plan === "annually" ? "monthly" : "annually";
    },
  },
});

export const { setPlan } = planSlice.actions;

export const selectPlan = (state) => state.pricePlan.plan;

export default planSlice.reducer;
