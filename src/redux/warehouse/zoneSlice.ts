import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IZone {
  id: number;
  name: string;
}

export interface IZoneInitialState {
  Zone: IZone;
  ZoneIds: number[];
}

export const initialState: IZoneInitialState = {
  Zone: {
    id: 0,
    name: "",
  },
  ZoneIds: [],
};

const ZoneSlice = createSlice({
  name: "Zone",
  initialState,
  reducers: {
    setZone: (state, action: PayloadAction<IZone>) => {
      state.Zone = action.payload;
    },
    clearZone: (state) => {
      state.Zone = {
        id: 0,
        name: "",
      };
    },
    setZoneId: (state, action: PayloadAction<number>) => {
      const { ZoneIds } = state;
      const { payload } = action;
      const findZone = ZoneIds?.find((i) => i === payload);
      if (findZone) {
        state.ZoneIds = ZoneIds?.filter((i) => i !== payload) || [];
      } else {
        state.ZoneIds?.push(payload);
      }
    },
    setAllZoneIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.ZoneIds = payload.ids;
      } else {
        state.ZoneIds = [];
      }
    },
  },
});

export const {
  setZone,
  clearZone,
  setZoneId,
  setAllZoneIds,
} = ZoneSlice.actions;

export default ZoneSlice.reducer;
