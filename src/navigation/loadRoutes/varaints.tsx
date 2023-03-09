import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Variants = Loadable({
    // eslint-disable-next-line import/no-unresolved
    loader: () => import("pages/user/variants"),
    loading: () => <Spinner />,
  });