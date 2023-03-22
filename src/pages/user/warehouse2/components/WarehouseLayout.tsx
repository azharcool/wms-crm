import DashboardLayout from "components/dashboard-container";
import { Outlet } from "react-router-dom";

function WarehouseLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default WarehouseLayout;
