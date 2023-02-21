import { Outlet } from "react-router-dom";

export default function SettingPermissionsLayout() {
  // const state = useSelector((state: any) => state);
  // const { common } = state;
  // const location = useLocation();
  // const permissionArray: any[] = [];
  // // common.permissions.map((screen: any) => {
  // //   screen?.permissions?.map((permission: any) => {
  // //     if (!permission) return false;
  // //     permissionArray.push(permission);
  // //     return permission;
  // //   });
  // //   return screen;
  // // });
  // // const screen = common.permissions.find(
  // //   (x: any) => x.screenUrl === location.pathname,
  // // );
  return <Outlet />;
}
