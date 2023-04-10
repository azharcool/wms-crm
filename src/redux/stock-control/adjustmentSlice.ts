import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAdjustment {
  id: number;
  name: string;
}

export interface IAdjustmentInitialState {
  adjustment: IAdjustment;
  adjustmentIds: number[];
}

const initialState: IAdjustmentInitialState = {
  adjustment: {
    id: 0,
    name: "",
  },
  adjustmentIds: [],
};

const adjustmentSlice = createSlice({
  name: "adjusment",
  initialState,
  reducers: {
    setAdjustment: (state, action: PayloadAction<IAdjustment>) => {
      state.adjustment = action.payload;
    },
    setAdjustmentId: (state, action: PayloadAction<number>) => {
      const { adjustmentIds } = state;
      const { payload } = action;
      const findContact = adjustmentIds?.find((i) => i === payload);
      if (findContact) {
        state.adjustmentIds = adjustmentIds?.filter((i) => i !== payload) || [];
      } else {
        state.adjustmentIds?.push(payload);
      }
    },
    setAllAdjustmentIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.adjustmentIds = payload.ids;
      } else {
        state.adjustmentIds = [];
      }
    },
  },
});

export const { setAdjustment, setAdjustmentId, setAllAdjustmentIds } =
  adjustmentSlice.actions;
// export const { setAdjustment } = adjustmentSlice.actions;

export default adjustmentSlice.reducer;
