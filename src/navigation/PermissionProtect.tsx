import { Outlet } from "react-router-dom";

export default function PermissionsLayout() {
  // const state = useSelector((state: any) => state);
  // const { common, user } = state;
  // const location = useLocation();
  // const decodedToken: any = jwtDecode(user.token);
  // const pathName = `/${location.pathname.split?.("/")?.[1]}`;
  // const permission = common.permissions.find(
  //   (x: any) => x.screenUrl === pathName,
  // );
  // return permission || decodedToken.RoleName === ADMIN_ROLE ? (
  //   <Outlet />
  // ) : (
  //   <Navigate state={{ path: location.pathname }} to={AppRoutes.DASHBOARD} />
  // );
  return <Outlet />;
}
