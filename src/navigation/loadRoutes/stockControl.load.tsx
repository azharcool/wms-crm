import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const StockControlLayout = Loadable({
  loader: () =>
    import("pages/user/stock-control/adjustment/component/AdjustmentLayout"),
  loading: () => <Spinner />,
});

// Adjustment
export const AdjustmentCreate = Loadable({
  loader: () =>
    import("pages/user/stock-control/adjustment/component/AdjustmentCreate"),
  loading: () => <Spinner />,
});

export const AdjustmentListing = Loadable({
  loader: () => import("pages/user/stock-control/adjustment/Adjustment"),
  loading: () => <Spinner />,
});

export const AdjustmentDetails = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/adjustment/component/details/DetailLayout"
    ),
  loading: () => <Spinner />,
});

export const AdjustmentGeneralDetails = Loadable({
  loader: () =>
    import("pages/user/stock-control/adjustment/component/details/General"),
  loading: () => <Spinner />,
});

export const AdjustmentHistoryListing = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/adjustment/component/details/history/HistoryListing"
    ),
  loading: () => <Spinner />,
});

// Recieve
export const ReceiveListing = Loadable({
  loader: () => import("pages/user/stock-control/receive/Receive"),
  loading: () => <Spinner />,
});

export const ReceiveDetials = Loadable({
  loader: () =>
    import("pages/user/stock-control/receive/component/detials/ReceiveDetails"),
  loading: () => <Spinner />,
});

export const ReceiveGeneral = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/receive/component/detials/general/General"
    ),
  loading: () => <Spinner />,
});

export const ReceiveHistory = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/receive/component/detials/history/History"
    ),
  loading: () => <Spinner />,
});
