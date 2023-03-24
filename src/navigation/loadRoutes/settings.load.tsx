import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Settings = Loadable({
  loader: () => import("pages/admin/settings"),
  loading: () => <Spinner />,
});

export const Team = Loadable({
  loader: () => import("pages/admin/settings/screens/team"),
  loading: () => <Spinner />,
});

export const Screens = Loadable({
  loader: () => import("pages/admin/settings/screens/screens"),
  loading: () => <Spinner />,
});

export const ScreenAccess = Loadable({
  loader: () => import("pages/admin/settings/screens/screens-access"),
  loading: () => <Spinner />,
});

export const Permissions = Loadable({
  loader: () => import("pages/admin/settings/screens/permissions"),
  loading: () => <Spinner />,
});

export const Roles = Loadable({
  loader: () => import("pages/admin/settings/screens/roles"),
  loading: () => <Spinner />,
});
export const Barcode = Loadable({
  loader: () => import("pages/admin/settings/screens/barcode/index"),
  loading: () => <Spinner />,
});
