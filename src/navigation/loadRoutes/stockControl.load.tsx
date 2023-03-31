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
export const RecieveListing = Loadable({
  loader: () => import("pages/user/stock-control/recieve/Recieve"),
  loading: () => <Spinner />,
});

export const RecieveDetials = Loadable({
  loader: () =>
    import("pages/user/stock-control/recieve/component/detials/RecieveDetails"),
  loading: () => <Spinner />,
});

export const RecieveGeneral = Loadable({
  loader: () =>
    import("pages/user/stock-control/recieve/component/detials/General"),
  loading: () => <Spinner />,
});

export const RecieveHistory = Loadable({
  loader: () =>
    import("pages/user/stock-control/recieve/component/detials/History"),
  loading: () => <Spinner />,
});
