import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getSupplier = (state: RootState) => state.supplier;

export const getSupplierSelected = createSelector(
  getSupplier,
  (data) => data.supplier,
);

export const getSelectedSupplier = createSelector(
  getSupplier,
  (supplier) => supplier?.supplierIds,
);

export const getSelectedSupplierById = createSelector(
  [getSupplier, (_, id: number) => id],
  (supplier, id: number) => supplier.supplierIds?.includes(id) || false,
);
