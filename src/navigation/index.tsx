/* eslint-disable import/no-unresolved */
import { PaletteMode } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as AdminLoadable from "./loadRoutes/admin.load";
import * as AuthLoadable from "./loadRoutes/auth.load";
import * as SettingsLoadable from "./loadRoutes/settings.load";
import * as UserLoadable from "./loadRoutes/user.load";
import PermissionsLayout from "./PermissionProtect";
import ProtectedRoute from "./ProtectedRoute";
import SettingPermissionsLayout from "./SettingPermissionsLayout";

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
              element={<UserLoadable.LocationDetails />}
              path={`${AppRoutes.LOCATION_DETAILS}/:locationId`}
            />
            <Route
              // eslint-disable-next-line import/namespace
              element={<UserLoadable.ContainerDetails />}
              path={`${AppRoutes.CONTAINER_DETAILS}/:containerId`}
            />
            <Route
              element={<UserLoadable.PurchaseOrder />}
              path={`${AppRoutes.PURCHASE_ORDER}`}
            />
            <Route
              element={<UserLoadable.AllOrderDetails />}
              path={`${AppRoutes.All_ORDER_DETAILS}/:orderId`}
            />
            <Route
              element={<UserLoadable.AddPurchaseOrder />}
              path={`${AppRoutes.ADD_PURCHASE_ORDER}`}
            />
            <Route
              element={<UserLoadable.AllOrderDetails />}
              path={`${AppRoutes.PURCHASE.All_ORDER_DETAILS}/:orderId`}
            />
            <Route
              element={<UserLoadable.AddPurchaseOrder />}
              path={`${AppRoutes.PURCHASE.ADD_PURCHASE_ORDER}`}
            />
            <Route
              element={<UserLoadable.Suppliers />}
              path={`${AppRoutes.PURCHASE.SUPPLIERS}`}
            />

            <Route
              element={<UserLoadable.Catalog />}
              path={`${AppRoutes.CATALOG.catalog}`}
            >
              <Route path={`${AppRoutes.CATALOG.products}`}>
                <Route index element={<UserLoadable.Products />} />
                <Route
                  element={<UserLoadable.ProductCreate />}
                  path={`${AppRoutes.CATALOG.productCreate}`}
                />
              </Route>
              <Route path={`${AppRoutes.CATALOG.units}`}>
                <Route index element={<UserLoadable.Units />} />
              </Route>
              <Route path={`${AppRoutes.CATALOG.categories}`}>
                <Route index element={<UserLoadable.Categories />} />
              </Route>
            </Route>

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
              <Route
                element={<SettingsLoadable.Team />}
                path={AppRoutes.TEAM}
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
