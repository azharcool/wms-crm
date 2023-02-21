import Loadable from "react-loadable";

import { Spinner } from "components/loader";

export const Contact = Loadable({
  loader: () => import("pages/user/contacts"),
  loading: () => <Spinner />,
});

export const ContactDetails = Loadable({
  loader: () => import("pages/user/contacts/details"),
  loading: () => <Spinner />,
});
