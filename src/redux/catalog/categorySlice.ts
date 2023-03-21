import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategoryInitialState {
  categoryIds: number[];
}

export const initialState: ICategoryInitialState = {
  categoryIds: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      const { categoryIds } = state;
      const { payload } = action;
      const findContact = categoryIds?.find((i) => i === payload);
      if (findContact) {
        state.categoryIds = categoryIds?.filter((i) => i !== payload) || [];
      } else {
        state.categoryIds?.push(payload);
      }
    },
    setAllCategoryIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.categoryIds = payload.ids;
      } else {
        state.categoryIds = [];
      }
    },
  },
});

export const { setCategoryId, setAllCategoryIds } = categorySlice.actions;

export default categorySlice.reducer;
