import { Route, Routes } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as AdminLoadable from "./loadRoutes/admin.load";
import * as AuthLoadable from "./loadRoutes/auth.load";
import * as ContactLoadable from "./loadRoutes/contact.load";
import * as SettingsLoadable from "./loadRoutes/settings.load";
import * as UserLoadable from "./loadRoutes/user.load";
import PermissionsLayout from "./PermissionProtect";
import ProtectedRoute from "./ProtectedRoute";
import SettingPermissionsLayout from "./SettingPermissionsLayout";

function Application() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<PermissionsLayout />}>
          <Route
            element={<AdminLoadable.Dashboard />}
            path={AppRoutes.DASHBOARD}
          />
          <Route
              element={<UserLoadable.Warehouse />}
              path={AppRoutes.WAREHOUSE}
            />
             <Route
              element={<UserLoadable.WarehouseDetails />}
              path={`${AppRoutes.WAREHOUSE_DETAILS}/:warehouseId`}
              />
                <Route
              element={<UserLoadable.AreaDetails />}
              path={`${AppRoutes.AREA_DETAILS}/:areaId`}
              />
              <Route
              element={<UserLoadable.ZoneDetails />}
              path={`${AppRoutes.ZONE_DETAILS}/:zoneId`}
              />
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
              path={AppRoutes.PERMISSIONS}
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
          </Route>

        </Route>
      </Route>
      <Route element={<AuthLoadable.Login />} path={AppRoutes.LOGIN} />
    </Routes>
  );
}

export default Application;
