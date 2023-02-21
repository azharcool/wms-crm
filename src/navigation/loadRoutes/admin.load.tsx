import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Dashboard = Loadable({
  loader: () => import("pages/admin/dashboard"),
  loading: () => <Spinner />,
});

export const Contract = Loadable({
  loader: () => import("pages/admin/contract"),
  loading: () => <Spinner />,
});

export const Calendar = Loadable({
  loader: () => import("pages/admin/calendar"),
  loading: () => <Spinner />,
});

export const Inbox = Loadable({
  loader: () => import("pages/admin/inbox"),
  loading: () => <Spinner />,
});

export const Deals = Loadable({
  loader: () => import("pages/admin/deals"),
  loading: () => <Spinner />,
});
