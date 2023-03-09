import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useAppDispatch } from "redux/store";

export interface ICustomFieldsReducer {
  isDarkMode?: boolean;
  newTheme?: any[];
  darkTheme?: any[];
}

const initialState: ICustomFieldsReducer = {
  isDarkMode: false,
  newTheme: [] as any[],
  darkTheme: [] as any[],
};

interface IPayload {
  isDarkMode?: boolean;
  newTheme?: any[];
  darkTheme?: any[];
}

interface IAction {
  payload: IPayload;
  type: any;
}

const customThemeSlice = createSlice({
  name: "customTheme",
  initialState,
  reducers: {
    setIsDarkmode(state) {
      // eslint-disable-next-line no-param-reassign
      state.isDarkMode = !state.isDarkMode;
    },
  },
});
export const { setIsDarkmode } = customThemeSlice.actions;

export const useContactActions = () => {
  const dispatch = useAppDispatch();
  return {
    setIsDarkmode: () => dispatch(setIsDarkmode()),
  };
};
const { reducer } = customThemeSlice;

export default reducer;
