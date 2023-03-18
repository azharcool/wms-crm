import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getProduct = (state: RootState) => state.product;

export const getSelectedProduct = createSelector(
  getProduct,
  (product) => product.productIds,
);

export const getSelectedProductById = createSelector(
  [getProduct, (_, id: number) => id],
  (product, id: number) => product.productIds.includes(id) || false,
);
