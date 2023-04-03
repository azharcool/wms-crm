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
    import("pages/user/stock-control/receive/component/detials/General"),
  loading: () => <Spinner />,
});

export const ReceiveHistory = Loadable({
  loader: () =>
    import("pages/user/stock-control/receive/component/detials/History"),
  loading: () => <Spinner />,
});

// Putaway-v1
export const PutAwayV1Listing = Loadable({
  loader: () => import("pages/user/stock-control/putaway-v1/PutAwayV1"),
  loading: () => <Spinner />,
});

// Putaway-v2
export const PutAwayV2Listing = Loadable({
  loader: () => import("pages/user/stock-control/putaway-v2/PutAwayV2"),
  loading: () => <Spinner />,
});

export const PutAwayV2Detials = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/putaway-v2/component/details/PutAwayV2Details"
    ),
  loading: () => <Spinner />,
});

export const PutAwayV2General = Loadable({
  loader: () =>
    import("pages/user/stock-control/putaway-v2/component/details/General"),
  loading: () => <Spinner />,
});

export const PutAwayV2History = Loadable({
  loader: () =>
    import("pages/user/stock-control/putaway-v2/component/details/History"),
  loading: () => <Spinner />,
});
