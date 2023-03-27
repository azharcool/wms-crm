import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IArea {
  id: number;
  name: string;
}

export interface IAreaInitialState {
  area: IArea;
  areaIds: number[];
}

export const initialState: IAreaInitialState = {
  area: {
    id: 0,
    name: "",
  },
  areaIds: [],
};

const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    setArea: (state, action: PayloadAction<IArea>) => {
      state.area = action.payload;
    },
    clearArea: (state) => {
      state.area = {
        id: 0,
        name: "",
      };
    },
    setAreaId: (state, action: PayloadAction<number>) => {
      const { areaIds } = state;
      const { payload } = action;
      const findarea = areaIds?.find((i) => i === payload);
      if (findarea) {
        state.areaIds = areaIds?.filter((i) => i !== payload) || [];
      } else {
        state.areaIds?.push(payload);
      }
    },
    setAllAreaIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.areaIds = payload.ids;
      } else {
        state.areaIds = [];
      }
    },
  },
});

export const {
  setArea,
  clearArea,
  setAreaId,
  setAllAreaIds,
} = areaSlice.actions;

export default areaSlice.reducer;
