import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductInitialState {
  productIds: number[];
}

export const initialState: IProductInitialState = {
  productIds: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductId: (state, action: PayloadAction<number>) => {
      const { productIds } = state;
      const { payload } = action;
      const findContact = productIds?.find((i) => i === payload);
      if (findContact) {
        state.productIds = productIds?.filter((i) => i !== payload) || [];
      } else {
        state.productIds?.push(payload);
      }
    },
    setAllProductIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.productIds = payload.ids;
      } else {
        state.productIds = [];
      }
    },

    removeAllProductIds: (state) => {
      state.productIds = [];
    },
  },
});

export const { setProductId, setAllProductIds, removeAllProductIds } =
  productSlice.actions;

export default productSlice.reducer;
