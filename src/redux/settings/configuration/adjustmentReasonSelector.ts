import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getAdjustmentReason = (state: RootState) => state.adjustmentReason;

export const getSelectedAdjustmentReason = createSelector(
  getAdjustmentReason,
  (adjustmentReason) => adjustmentReason.adjustmentReasonIds,
);

export const getSelectedAdjustmentReasonById = createSelector(
  [getAdjustmentReason, (_, id: number) => id],
  (adjustmentReason, id: number) =>
    adjustmentReason.adjustmentReasonIds.includes(id) || false,
);
