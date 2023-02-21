/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IRole } from "pages/admin/settings/screens/roles/query/useFetchRoles";
import { useAppDispatch } from "redux/store";

export interface IRoleReducer {
  role: IRole | null;
}

const initialState: IRoleReducer = {
  role: {} as IRole,
};

interface IPayload {
  role: IRole;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setRole: (state, action: IAction) => {
      state.role = action.payload.role;
    },
    removeRole: (state) => {
      state.role = null;
    },
  },
});

export const { setRole, removeRole } = teamSlice.actions;

export const useRoleActions = () => {
  const dispatch = useAppDispatch();
  return {
    setRole: (payload: IPayload) => dispatch(setRole(payload)),
    removeRole: () => dispatch(removeRole()),
  };
};
const { reducer } = teamSlice;

export default reducer;
