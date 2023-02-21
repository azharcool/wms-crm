/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { ILeadStatus } from "pages/admin/settings/screens/lead-status/query/useFetchLeadStatuses";
import { useAppDispatch } from "redux/store";

export interface ILeadStatusReducer {
  leadStatus: ILeadStatus | null;
}

const initialState: ILeadStatusReducer = {
  leadStatus: {} as ILeadStatus,
};

interface IPayload {
  leadStatus: ILeadStatus;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const teamSlice = createSlice({
  name: "leadStatus",
  initialState,
  reducers: {
    setLeadStatus: (state, action: IAction) => {
      state.leadStatus = action.payload.leadStatus;
    },
    removeLeadStatus: (state) => {
      state.leadStatus = null;
    },
  },
});

export const { setLeadStatus, removeLeadStatus } = teamSlice.actions;

export const useLeadStatusActions = () => {
  const dispatch = useAppDispatch();
  return {
    setLeadStatus: (payload: IPayload) => dispatch(setLeadStatus(payload)),
    removeLeadStatus: () => dispatch(removeLeadStatus()),
  };
};
const { reducer } = teamSlice;

export default reducer;
