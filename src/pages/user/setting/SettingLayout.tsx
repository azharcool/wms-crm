import DashboardLayout from "components/dashboard-container";
import { Outlet } from "react-router-dom";

function SettingLayout() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default SettingLayout;
