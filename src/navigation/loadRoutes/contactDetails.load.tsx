import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const ContactDetails = Loadable({
  loader: () => import("pages/user/contacts/details"),
  loading: () => <Spinner />,
});
