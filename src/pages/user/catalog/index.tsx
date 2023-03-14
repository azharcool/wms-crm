import DashboardLayout from "components/dashboard-container";
import { Outlet } from "react-router-dom";

function Catalog() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default Catalog;
