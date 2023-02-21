/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "pages/admin/settings/screens/team/query/useFetchUsers";
import { useAppDispatch } from "redux/store";

export interface IUserReducer {
  user: IUser | null;
}

const initialState: IUserReducer = {
  user: {} as IUser,
};

interface IPayload {
  user: IUser;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setUser: (state, action: IAction) => {
      state.user = action.payload.user;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = teamSlice.actions;

export const useTeamActions = () => {
  const dispatch = useAppDispatch();
  return {
    setUser: (payload: IPayload) => dispatch(setUser(payload)),
    removeUser: () => dispatch(removeUser()),
  };
};
const { reducer } = teamSlice;

export default reducer;
