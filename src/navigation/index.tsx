import { Route, Routes } from "react-router-dom";
import PermissionsLayout from "./PermissionProtect";
import ProtectedRoute from "./ProtectedRoute";
import SettingPermissionsLayout from "./SettingPermissionsLayout";
import AppRoutes from "./appRoutes";
import catalogRouting from "./catalog.routing";
import * as AdminLoadable from "./loadRoutes/admin.load";
import * as AuthLoadable from "./loadRoutes/auth.load";
import * as SettingsLoadable from "./loadRoutes/settings.load";
import purchasesRouting from "./purchases.routing";
import settingRouting from "./setting.routing";
import stockControlRouting from "./stockControl.routing";
import warehouseRouting from "./warehouse.routing";

function Application() {
  return (
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
            <Route element={<SettingsLoadable.Team />} path={AppRoutes.TEAM} />
            <Route
              element={<SettingsLoadable.Barcode />}
              path={AppRoutes.BARCODE}
            />
          </Route>
        </Route>
      </Route>
      <Route element={<AuthLoadable.Login />} path={AppRoutes.LOGIN} />
    </Routes>
  );
}

export default Application;
