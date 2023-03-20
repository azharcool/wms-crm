import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getCategory = (state: RootState) => state.category;

export const getSelectedCategory = createSelector(
  getCategory,
  (category) => category.categoryIds,
);

export const getSelectedCategoryById = createSelector(
  [getCategory, (_, id: number) => id],
  (category, id: number) => category.categoryIds.includes(id) || false,
);
