import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getVariants = (state: RootState) => state.variants;

export const getSelectedOptions = createSelector(
  getVariants,
  (variants) => variants.options,
);
