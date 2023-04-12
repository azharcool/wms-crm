import DashboardLayout from "components/dashboard-container";
import { Outlet } from "react-router-dom";

function MovementLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default MovementLayout;
