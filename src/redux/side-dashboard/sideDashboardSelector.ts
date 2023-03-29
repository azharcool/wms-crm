import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getSideDashboard = (state: RootState) => state.sideDashboard;

export const getExpandedSelected = createSelector(
  getSideDashboard,
  (data) => data.expanded,
);
