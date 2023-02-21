/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IPermission } from "pages/admin/settings/screens/permissions/query/useFetchPermissions";
import { useAppDispatch } from "redux/store";

export interface IPermissionReducer {
  permission: IPermission | null;
}

const initialState: IPermissionReducer = {
  permission: {} as IPermission,
};

interface IPayload {
  permission: IPermission;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const teamSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    setPermission: (state, action: IAction) => {
      state.permission = action.payload.permission;
    },
    removePermission: (state) => {
      state.permission = null;
    },
  },
});

export const { setPermission, removePermission } = teamSlice.actions;

export const usePermissionActions = () => {
  const dispatch = useAppDispatch();
  return {
    setPermission: (payload: IPayload) => dispatch(setPermission(payload)),
    removePermission: () => dispatch(removePermission()),
  };
};
const { reducer } = teamSlice;

export default reducer;
