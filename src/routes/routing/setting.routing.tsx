import { Route } from "react-router-dom";
import AppRoutes from "../appRoutes";
import * as SettingLoadable from "../load-routes/setting.load";

const settingRouting = (
  <Route
    element={<SettingLoadable.SettingLayout />}
    path={`${AppRoutes.setting.layout}`}
  >
    <Route
      element={<SettingLoadable.BarcodeGenerate />}
      path={`${AppRoutes.setting.barcode.generate}`}
    />

    <Route
      element={<SettingLoadable.ConfigurationListing />}
      path={`${AppRoutes.setting.configuration.listing}`}
    />

    <Route
      element={<SettingLoadable.AdjustmentReasonListing />}
      path={`${AppRoutes.setting.configuration.adjustmentReasons}`}
    />
 <Route
      element={<SettingLoadable.CurrencyRateListing />}
      path={`${AppRoutes.setting.configuration.CurrencyRate}`}
    />
    <Route
      element={<SettingLoadable.TaxesListing />}
      path={`${AppRoutes.setting.configuration.taxes}`}
    />

    <Route
      element={<SettingLoadable.ProductConditionListing />}
      path={`${AppRoutes.setting.configuration.productCondition}`}
    />

    <Route
      element={<SettingLoadable.SettingAccount />}
      path={`${AppRoutes.setting.account.account}`}
    />

    <Route
      element={<SettingLoadable.BillingListing />}
      path={`${AppRoutes.setting.billing.listing}`}
    />

    <Route
      element={<SettingLoadable.BillingDetails />}
      path={`${AppRoutes.setting.billing.details}`}
    />

    <Route
      element={<SettingLoadable.UserListing />}
      path={`${AppRoutes.setting.user.listing}`}
    />

    <Route
      element={<SettingLoadable.UserCreate />}
      path={`${AppRoutes.setting.user.create}`}
    />

    <Route
      element={<SettingLoadable.UserUpdate />}
      path={`${AppRoutes.setting.user.update}/:userId`}
    />

    <Route
      element={<SettingLoadable.UserDetails />}
      path={`${AppRoutes.setting.user.details}/:userId`}
    >
      <Route
        element={<SettingLoadable.UserDetailsGeneral />}
        path={`${AppRoutes.setting.user.general}`}
      />
      <Route
        element={<SettingLoadable.UserDetailsHistory />}
        path={`${AppRoutes.setting.user.history}`}
      />
    </Route>

    <Route
      element={<SettingLoadable.RoleListing />}
      path={`${AppRoutes.setting.role.listing}`}
    />

    <Route
      element={<SettingLoadable.RoleCreate />}
      path={`${AppRoutes.setting.role.create}`}
    />
    <Route
      element={<SettingLoadable.RoleUpdate />}
      path={`${AppRoutes.setting.role.update}/:roleId`}
    >
      <Route
        element={<SettingLoadable.RoleUpdateGeneral />}
        path={`${AppRoutes.setting.role.general}`}
      />
      <Route
        element={<SettingLoadable.RoleUpdatePermission />}
        path={`${AppRoutes.setting.role.permission}`}
      />
    </Route>
  </Route>
);

export default settingRouting;
