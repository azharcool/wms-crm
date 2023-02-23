import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Warehouse = Loadable({
    loader: () => import("pages/user/warehouse"),
    loading: () => <Spinner />,
  });
  