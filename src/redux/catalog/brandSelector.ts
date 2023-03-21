import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getBrand = (state: RootState) => state.brand;

export const getSelectedBrand = createSelector(
  getBrand,
  (category) => category.brandIds,
);

export const getSelectedBrandById = createSelector(
  [getBrand, (_, id: number) => id],
  (brand, id: number) => brand.brandIds.includes(id) || false,
);
