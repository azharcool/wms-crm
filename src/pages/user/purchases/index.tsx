import DashboardLayout from "components/dashboard-container";
import { Outlet } from "react-router-dom";

function Purchase() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default Purchase;
