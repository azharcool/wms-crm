import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAdjustment {
  id: number;
  name: string;
}

export interface IAdjustmentInitialState {
  adjustment: IAdjustment;
}

const initialState: IAdjustmentInitialState = {
  adjustment: {
    id: 0,
    name: "",
  },
};

const adjustmentSlice = createSlice({
  name: "adjusment",
  initialState,
  reducers: {
    setAdjustment: (state, action: PayloadAction<IAdjustment>) => {
      state.adjustment = action.payload;
    },
  },
});

export const { setAdjustment } = adjustmentSlice.actions;

export default adjustmentSlice.reducer