import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as StockControlLoadable from "./loadRoutes/setting.load";

const settingRouting = (
  <Route
    element={<StockControlLoadable.SettingLayout />}
    path={`${AppRoutes.settting.layout}`}
  >
    <Route
      element={<StockControlLoadable.BarcodeGenerate />}
      path={`${AppRoutes.settting.barcode.generate}`}
    />

    <Route
      element={<StockControlLoadable.ConfigurationListing />}
      path={`${AppRoutes.settting.configuration.listing}`}
    />
    <Route
      element={<StockControlLoadable.AdjustmentReasonListing />}
      path={`${AppRoutes.settting.configuration.adjustmentReasons}`}
    />
  </Route>
);

export default settingRouting;
