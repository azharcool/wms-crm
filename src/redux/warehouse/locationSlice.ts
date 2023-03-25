import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILocation {
  id: number;
  name: string;
}

export interface ILocationInitialState {
  Location: ILocation;
  LocationIds: number[];
}

export const initialState: ILocationInitialState = {
  Location: {
    id: 0,
    name: "",
  },
  LocationIds: [],
};

const LocationSlice = createSlice({
  name: "Location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<ILocation>) => {
      state.Location = action.payload;
    },
    clearLocation: (state) => {
      state.Location = {
        id: 0,
        name: "",
      };
    },
    setLocationId: (state, action: PayloadAction<number>) => {
      const { LocationIds } = state;
      const { payload } = action;
      const findLocation = LocationIds?.find((i) => i === payload);
      if (findLocation) {
        state.LocationIds = LocationIds?.filter((i) => i !== payload) || [];
      } else {
        state.LocationIds?.push(payload);
      }
    },
    setAllLocationIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.LocationIds = payload.ids;
      } else {
        state.LocationIds = [];
      }
    },
  },
});

export const {
  setLocation,
  clearLocation,
  setLocationId,
  setAllLocationIds,
} = LocationSlice.actions;

export default LocationSlice.reducer;
