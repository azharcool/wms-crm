/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "redux/store";

export interface Permission {
  id: number;
  permissions: string;
  permissionDescription: string;
  permissionCode: string;
  status: number;
  screenId: number;
  screenName?: any;
}

export interface IPermissions {
  id: number;
  screenName: string;
  screenCode: string;
  status: number;
  screenUrl: string;
  permissions: Permission[];
}

export interface ICommonReducer {
  permissions: IPermissions[] | null;
}

const initialState: ICommonReducer = {
  permissions: [] as IPermissions[],
};

interface IPayload {
  permissions: IPermissions[];
}

interface IAction {
  payload: IPayload;
  type: string;
}
const commonSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    setPermissions: (state, action: IAction) => {
      state.permissions = action.payload.permissions;
    },
  },
});

export const { setPermissions } = commonSlice.actions;

export const useCommonActions = () => {
  const dispatch = useAppDispatch();
  return {
    setPermissions: (payload: IPayload) => dispatch(setPermissions(payload)),
  };
};
const { reducer } = commonSlice;

export default reducer;
