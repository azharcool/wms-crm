/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ILeadSource } from "pages/admin/settings/screens/lead-source/query/useFetchLeadSources";
import { useAppDispatch } from "redux/store";

export interface ILeadSourceReducer {
  leadSource: ILeadSource | null;
}

const initialState: ILeadSourceReducer = {
  leadSource: {} as ILeadSource,
};

interface IPayload {
  leadSource: ILeadSource;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const teamSlice = createSlice({
  name: "leadSource",
  initialState,
  reducers: {
    setLeadSource: (state, action: IAction) => {
      state.leadSource = action.payload.leadSource;
    },
    removeLeadSource: (state) => {
      state.leadSource = null;
    },
  },
});

export const { setLeadSource, removeLeadSource } = teamSlice.actions;

export const useLeadSourceActions = () => {
  const dispatch = useAppDispatch();
  return {
    setLeadSource: (payload: IPayload) => dispatch(setLeadSource(payload)),
    removeLeadSource: () => dispatch(removeLeadSource()),
  };
};
const { reducer } = teamSlice;

export default reducer;
