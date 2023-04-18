import Loadable from "react-loadable";

import { Spinner } from "components/loader";

export const Login = Loadable({
  loader: () => import("pages/auth/login"),
  loading: () => <Spinner />,
});
