import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getZone = (state: RootState) => state.zone;

export const getZoneSelected = createSelector(
  getZone,
  (data) => data.Zone,
);

export const getSelectedZone = createSelector(
  getZone,
  (Zone) => Zone?.ZoneIds,
);

export const getSelectedZoneById = createSelector(
  [getZone, (_, id: number) => id],
  (Zone, id: number) => Zone.ZoneIds?.includes(id) || false,
);
