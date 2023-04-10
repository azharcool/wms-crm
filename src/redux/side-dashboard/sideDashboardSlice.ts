import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISideDashboardInitialState {
  expanded: string;
  route: string;
}

export const initialState: ISideDashboardInitialState = {
  expanded: "",
  route: "",
};

const sideDashboardSlice = createSlice({
  name: "side-dashboard",
  initialState,
  reducers: {
    setExpanded: (state, action: PayloadAction<string>) => {
      if (state.expanded === action.payload) {
        state.expanded = "";
      } else {
        state.expanded = action.payload;
      }
    },
    setRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload;
    },
  },
});

export const { setExpanded, setRoute } = sideDashboardSlice.actions;

export default sideDashboardSlice.reducer;
