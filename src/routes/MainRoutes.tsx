import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AppRoutes from "./appRoutes";
import * as AdminLoadable from "./load-routes/admin.load";
import * as AuthLoadable from "./load-routes/auth.load";
import catalogRouting from "./routing/catalog.routing";
import purchasesRouting from "./routing/purchases.routing";
import settingRouting from "./routing/setting.routing";
import stockControlRouting from "./routing/stockControl.routing";
import warehouseRouting from "./routing/warehouse.routing";

function MainRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route
              element={<AdminLoadable.Dashboard />}
              path={AppRoutes.DASHBOARD}
            />

            {catalogRouting}
            {warehouseRouting}
            {purchasesRouting}
            {stockControlRouting}
            {settingRouting}
          </Route>
          <Route element={<AuthLoadable.Login />} path={AppRoutes.LOGIN} />
        </Routes>
      </Router>
    </>
  );
}

export default MainRoutes;
