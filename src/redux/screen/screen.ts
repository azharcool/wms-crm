/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IScreen } from "pages/admin/settings/screens/screens/query/useFetchScreens";
import { useAppDispatch } from "redux/store";

export interface IScreenReducer {
  screen: IScreen | null;
}

const initialState: IScreenReducer = {
  screen: {} as IScreen,
};

interface IPayload {
  screen: IScreen;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setScreen: (state, action: IAction) => {
      state.screen = action.payload.screen;
    },
    removeScreen: (state) => {
      state.screen = null;
    },
  },
});

export const { setScreen, removeScreen } = teamSlice.actions;

export const useScreenActions = () => {
  const dispatch = useAppDispatch();
  return {
    setScreen: (payload: IPayload) => dispatch(setScreen(payload)),
    removeScreen: () => dispatch(removeScreen()),
  };
};
const { reducer } = teamSlice;

export default reducer;
