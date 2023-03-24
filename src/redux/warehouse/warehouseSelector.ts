import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getWarehouse = (state: RootState) => state.warehouse;

export const getWarehouseSelected = createSelector(
  getWarehouse,
  (data) => data.warehouse,
);
