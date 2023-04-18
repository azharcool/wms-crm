import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

export const getTheme = (state: RootState) => state.theme;

export const getSelectedThemeMode = createSelector(
  getTheme,
  (theme) => theme.themeMode,
);
