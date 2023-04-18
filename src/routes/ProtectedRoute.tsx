import useUserInfo from "hooks/useUserInfo";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AppRoutes from "./appRoutes";

export default function ProtectedRoute() {
  const { isLoggedIn } = useUserInfo();
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate state={{ path: location.pathname }} to={AppRoutes.LOGIN} />
  );
}
