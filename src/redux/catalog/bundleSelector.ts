import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getBundle = (state: RootState) => state.bundle;

export const getSelectedBundle = createSelector(
  getBundle,
  (bundle) => bundle.bundleIds,
);

export const getSelectedBundleById = createSelector(
  [getBundle, (_, id: number) => id],
  (bundle, id: number) => bundle.bundleIds.includes(id) || false,
);
