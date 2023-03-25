import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getArea = (state: RootState) => state.area;

export const getAreaSelected = createSelector(
  getArea,
  (data) => data.area,
);

export const getAreaWarehouse = createSelector(
  getArea,
  (area) => area?.areaIds,
);

export const getSelectedAreaById = createSelector(
  [getArea, (_, id: number) => id],
  (area, id: number) => area.areaIds?.includes(id) || false,
);
