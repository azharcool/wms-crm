import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getWarehouse = (state: RootState) => state.warehouse;

export const getWarehouseSelected = createSelector(
  getWarehouse,
  (data) => data.warehouse,
);

export const getSelectedWarehouse = createSelector(
  getWarehouse,
  (warehouse) => warehouse?.warehouseIds,
);

export const getSelectedWarehouseById = createSelector(
  [getWarehouse, (_, id: number) => id],
  (warehouse, id: number) => warehouse.warehouseIds?.includes(id) || false,
);
