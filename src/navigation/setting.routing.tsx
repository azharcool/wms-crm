import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as SettingLoadable from "./loadRoutes/setting.load";

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
      element={<SettingLoadable.SettingAccount />}
      path={`${AppRoutes.setting.account.account}`}
    />
  </Route>
);

export default settingRouting;
