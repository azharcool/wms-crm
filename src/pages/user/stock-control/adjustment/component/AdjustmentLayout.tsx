import DashboardLayout from "components/dashboard-container";
import { Outlet } from "react-router-dom";

function AdjustmentLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default AdjustmentLayout;
