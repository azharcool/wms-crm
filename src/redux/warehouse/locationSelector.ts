import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getLocation = (state: RootState) => state.location;

export const getlocationSelected = createSelector(
  getLocation,
  (data) => data.Location,
);

export const getSelectedLocation = createSelector(
  getLocation,
  (location) => location?.LocationIds,
);

export const getSelectedLocationById = createSelector(
  [getLocation, (_, id: number) => id],
  (location, id: number) => location.LocationIds?.includes(id) || false,
);
