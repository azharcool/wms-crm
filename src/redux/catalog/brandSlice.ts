import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategoryInitialState {
  brandIds: number[];
}

export const initialState: ICategoryInitialState = {
  brandIds: [],
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrandId: (state, action: PayloadAction<number>) => {
      const { brandIds } = state;
      const { payload } = action;
      const findContact = brandIds?.find((i) => i === payload);
      if (findContact) {
        state.brandIds = brandIds?.filter((i) => i !== payload) || [];
      } else {
        state.brandIds?.push(payload);
      }
    },
    setAllBrandIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.brandIds = payload.ids;
      } else {
        state.brandIds = [];
      }
    },

    removeAllBrandIds: (state) => {
      state.brandIds = [];
    },
  },
});

export const { setBrandId, setAllBrandIds, removeAllBrandIds } =
  brandSlice.actions;

export default brandSlice.reducer;
