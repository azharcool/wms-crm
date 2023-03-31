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

            {warehouseRouting}
            {purchasesRouting}
            {stockControlRouting}
            {settingRouting}

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
                <Route
                  element={<UserLoadable.ProductDetail />}
                  path={`${AppRoutes.CATALOG.productDetail}/:productId`}
                />
              </Route>
              <Route path={`${AppRoutes.CATALOG.units}`}>
                <Route index element={<UserLoadable.Units />} />
                <Route
                  element={<UserLoadable.UnitsHistory />}
                  path={`${AppRoutes.CATALOG.unitHistory}/:unitId`}
                />
              </Route>
              <Route path={`${AppRoutes.CATALOG.categories}`}>
                <Route index element={<UserLoadable.Categories />} />
                <Route
                  element={<UserLoadable.CategoryDetail />}
                  path={`${AppRoutes.CATALOG.categoryDetail}/:categoryId`}
                />
                <Route
                  element={<UserLoadable.CategoryCreate />}
                  path={`${AppRoutes.CATALOG.categoryCreate}`}
                />
              </Route>
              <Route path={`${AppRoutes.CATALOG.brands}`}>
                <Route index element={<UserLoadable.Brands />} />
              </Route>
              <Route path={`${AppRoutes.CATALOG.bundles}`}>
                <Route index element={<UserLoadable.Bundles />} />
                <Route
                  element={<UserLoadable.BundlesDetail />}
                  path={`${AppRoutes.CATALOG.bundleDetails}/:bundleId`}
                />
                <Route
                  element={<UserLoadable.CreateBundles />}
                  path={`${AppRoutes.CATALOG.bundleCreate}/:bundleId`}
                />
              </Route>
              <Route path={`${AppRoutes.CATALOG.listing}`}>
                <Route index element={<UserLoadable.Listing />} />
              </Route>
              <Route path={`${AppRoutes.CATALOG.variants}`}>
                <Route index element={<UserLoadable.Variant />} />
                <Route path={`${AppRoutes.CATALOG.variantsDetails}/:variantId`}>
                  <Route index element={<UserLoadable.VariantDetails />} />
                </Route>
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
