import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAdjustmentReasonInitialState {
  adjustmentReasonIds: number[];
}

export const initialState: IAdjustmentReasonInitialState = {
  adjustmentReasonIds: [],
};

const adjustmentReasonSlice = createSlice({
  name: "adjustmentReason",
  initialState,
  reducers: {
    setAdjustmentReasonId: (state, action: PayloadAction<number>) => {
      const { adjustmentReasonIds } = state;
      const { payload } = action;
      const findContact = adjustmentReasonIds?.find((i) => i === payload);
      if (findContact) {
        state.adjustmentReasonIds =
          adjustmentReasonIds?.filter((i) => i !== payload) || [];
      } else {
        state.adjustmentReasonIds?.push(payload);
      }
    },
    setAllAdjustmentReasonIds: (
      state,
      action: PayloadAction<{ checked: boolean; ids: number[] }>,
    ) => {
      const { payload } = action;
      if (payload.checked) {
        state.adjustmentReasonIds = payload.ids;
      } else {
        state.adjustmentReasonIds = [];
      }
    },
  },
});

export const { setAdjustmentReasonId, setAllAdjustmentReasonIds } =
  adjustmentReasonSlice.actions;

export default adjustmentReasonSlice.reducer;
