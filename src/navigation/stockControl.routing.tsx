import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as StockControlLoadable from "./loadRoutes/stockControl.load";

const stockControlRouting = (
  <Route
    element={<StockControlLoadable.StockControlLayout />}
    path={`${AppRoutes.stockControl.layout}`}
  >
    {/* warehouse create */}
    <Route
      element={<StockControlLoadable.AdjustmentCreate />}
      path={`${AppRoutes.stockControl.adjustment.create}`}
    />
    <Route
      element={<StockControlLoadable.AdjustmentListing />}
      path={`${AppRoutes.stockControl.adjustment.listing}`}
    />

    <Route
      element={<StockControlLoadable.AdjustmentDetails />}
      path={`${AppRoutes.stockControl.adjustment.details}/:adjustmentId`}
    >
      <Route
        element={<StockControlLoadable.AdjustmentGeneralDetails />}
        path={`${AppRoutes.stockControl.adjustment.generalDetails}`}
      />

      <Route
        element={<StockControlLoadable.AdjustmentHistoryListing />}
        path={`${AppRoutes.stockControl.adjustment.historylisting}`}
      />
    </Route>
  </Route>
);

export default stockControlRouting;
