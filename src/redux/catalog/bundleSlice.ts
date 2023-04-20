import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBundleInitialState {
  bundleIds: number[];
}

export const initialState: IBundleInitialState = {
  bundleIds: [],
};

const bundleSlice = createSlice({
  name: "bundle",
  initialState,
  reducers: {
    setBundleId: (state, action: PayloadAction<number>) => {
      const { bundleIds } = state;
      const { payload } = action;
      const findContact = bundleIds?.find((i) => i === payload);
      if (findContact) {
        state.bundleIds = bundleIds?.filter((i) => i !== payload) || [];
      } else {
        state.bundleIds?.push(payload);
      }
    },
    setAllBundleIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.bundleIds = payload.ids;
      } else {
        state.bundleIds = [];
      }
    },
    removeAllBundleIds: (state) => {
      state.bundleIds = [];
    },
  },
});

export const { setBundleId, setAllBundleIds, removeAllBundleIds } =
  bundleSlice.actions;

export default bundleSlice.reducer;
