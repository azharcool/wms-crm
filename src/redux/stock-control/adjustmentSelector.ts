import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getAdjustment = (state: RootState) => state.adjustment;

export const getAdjustmentSelected = createSelector(
  getAdjustment,
  (data) => data.adjustment
);