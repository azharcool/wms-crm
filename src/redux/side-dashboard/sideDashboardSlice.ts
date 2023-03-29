import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISideDashboardInitialState {
  expanded: string;
}

export const initialState: ISideDashboardInitialState = {
  expanded: "",
};

const sideDashboardSlice = createSlice({
  name: "side-dashboard",
  initialState,
  reducers: {
    setExpanded: (state, action: PayloadAction<string>) => {
      state.expanded = action.payload;
    },
  },
});

export const { setExpanded } = sideDashboardSlice.actions;

export default sideDashboardSlice.reducer;
