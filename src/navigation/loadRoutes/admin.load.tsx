import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Dashboard = Loadable({
  loader: () => import("pages/admin/dashboard"),
  loading: () => <Spinner />,
});
