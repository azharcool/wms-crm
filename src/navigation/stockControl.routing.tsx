import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as StockControlLoadable from "./loadRoutes/stockControl.load";

const stockControlRouting = (
  <Route
    element={<StockControlLoadable.StockControlLayout />}
    path={`${AppRoutes.stockControl.layout}`}
  >
    {/* Adjustment Routing */}
    <Route
      element={<StockControlLoadable.AdjustmentCreate />}
      path={`${AppRoutes.stockControl.adjustment.create}`}
    />
     <Route
      element={<StockControlLoadable.AdjustmentUpdate />}
      path={`${AppRoutes.stockControl.adjustment.update}/:adjustmentId`}
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

    {/* Recieve Routing */}
    <Route
      element={<StockControlLoadable.ReceiveListing />}
      path={`${AppRoutes.stockControl.recieve.listing}`}
    />

    <Route
      element={<StockControlLoadable.ReceiveDetials />}
      path={`${AppRoutes.stockControl.recieve.details}/:recieveId`}
    >
      <Route
        element={<StockControlLoadable.ReceiveGeneral />}
        path={`${AppRoutes.stockControl.recieve.general}`}
      />
      <Route
        element={<StockControlLoadable.ReceiveHistory />}
        path={`${AppRoutes.stockControl.recieve.history}`}
      />
    </Route>

    {/* Putaway-v1 Routing */}
    <Route
      element={<StockControlLoadable.PutAwayV1Listing />}
      path={`${AppRoutes.stockControl.putaway_v1.listing}`}
    />

    {/* Putaway-v2 Routing */}
    <Route
      element={<StockControlLoadable.PutAwayV2Listing />}
      path={`${AppRoutes.stockControl.putaway_v2.listing}`}
    />

    <Route
      element={<StockControlLoadable.PutAwayV2Create />}
      path={`${AppRoutes.stockControl.putaway_v2.create}`}
    />

    <Route
      element={<StockControlLoadable.PutAwayV2Detials />}
      path={`${AppRoutes.stockControl.putaway_v2.details}/:putawayId`}
    >
      <Route
        element={<StockControlLoadable.PutAwayV2General />}
        path={`${AppRoutes.stockControl.putaway_v2.general}`}
      />
      <Route
        element={<StockControlLoadable.PutAwayV2History />}
        path={`${AppRoutes.stockControl.putaway_v2.history}`}
      />
    </Route>
  </Route>
);

export default stockControlRouting;
