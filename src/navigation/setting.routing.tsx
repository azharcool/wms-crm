import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as StockControlLoadable from "./loadRoutes/setting.load";

const settingRouting = (
  <Route
    element={<StockControlLoadable.SettingLayout />}
    path={`${AppRoutes.setting.layout}`}
  >
    <Route
      element={<StockControlLoadable.BarcodeGenerate />}
      path={`${AppRoutes.setting.barcode.generate}`}
    />

    <Route
      element={<StockControlLoadable.ConfigurationListing />}
      path={`${AppRoutes.setting.configuration.listing}`}
    />
    <Route
      element={<StockControlLoadable.AdjustmentReasonListing />}
      path={`${AppRoutes.setting.configuration.adjustmentReasons}`}
    />
  </Route>
);

export default settingRouting;
