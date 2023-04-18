import { createSlice } from "@reduxjs/toolkit";

type IThemeMode = "dark" | "light";

export interface ICustomFieldsReducer {
  themeMode: IThemeMode;
}

const initialState: ICustomFieldsReducer = {
  themeMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.themeMode = state.themeMode === "dark" ? "light" : "dark";
    },
  },
});

export const { setThemeMode } = themeSlice.actions;

const { reducer } = themeSlice;

export default reducer;
