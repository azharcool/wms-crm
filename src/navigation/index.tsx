/* eslint-disable import/no-unresolved */
import { PaletteMode } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./appRoutes";
import catalogRouting from "./catalog.routing";
import * as AdminLoadable from "./loadRoutes/admin.load";
import * as AuthLoadable from "./loadRoutes/auth.load";
import * as SettingsLoadable from "./loadRoutes/settings.load";
import PermissionsLayout from "./PermissionProtect";
import ProtectedRoute from "./ProtectedRoute";
import purchasesRouting from "./purchases.routing";
import settingRouting from "./setting.routing";
import SettingPermissionsLayout from "./SettingPermissionsLayout";
import stockControlRouting from "./stockControl.routing";
import warehouseRouting from "./warehouse.routing";

function Application() {
  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<PermissionsLayout />}>
            <Route
              element={<AdminLoadable.Dashboard />}
              path={AppRoutes.DASHBOARD}
            />

            {catalogRouting}
            {warehouseRouting}
            {purchasesRouting}
            {stockControlRouting}
            {settingRouting}

            <Route
              element={<SettingPermissionsLayout />}
              path={AppRoutes.SETTINGS}
            >
              <Route
                index
                element={<SettingsLoadable.Settings />}
                path={AppRoutes.SETTINGS}
              />
              <Route
                element={<SettingsLoadable.Permissions />}
                path={AppRoutes.SETTINGS}
              />
              <Route
                element={<SettingsLoadable.ScreenAccess />}
                path={AppRoutes.SCREEN_ACCESS}
              />
              <Route
                element={<SettingsLoadable.Roles />}
                path={AppRoutes.ROLES}
              />
              <Route
                element={<SettingsLoadable.Screens />}
                path={AppRoutes.SCREENS}
              />
              <Route
                element={<SettingsLoadable.Team />}
                path={AppRoutes.TEAM}
              />
              <Route
                element={<SettingsLoadable.Barcode />}
                path={AppRoutes.BARCODE}
              />
            </Route>
          </Route>
        </Route>
        <Route element={<AuthLoadable.Login />} path={AppRoutes.LOGIN} />
      </Routes>
    </ThemeProvider>
  );
}

export default Application;
