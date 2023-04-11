import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getAdjustment = (state: RootState) => state.adjustment;

export const getAdjustmentSelected = createSelector(
  getAdjustment,
  (data) => data.adjustment,
);

export const getSelectedAdjustment = createSelector(
  getAdjustment,
  (adjustment) => adjustment.adjustmentIds,
);

export const getSelectedAdjustmentById = createSelector(
  [getAdjustment, (_, id: number) => id],
  (adjustment, id: number) => adjustment.adjustmentIds.includes(id) || false,
);
