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

export const AdjustmentUpdate = Loadable({
  loader: () =>
    import("pages/user/stock-control/adjustment/component/AdjustmentEdit"),
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

// export const AdjustmentGeneralDetails = Loadable({
//   loader: () =>
//     import("pages/user/stock-control/adjustment/component/details/General"),
//   loading: () => <Spinner />,
// });

// export const AdjustmentHistoryListing = Loadable({
//   loader: () =>
//     import(
//       "pages/user/stock-control/adjustment/component/details/history/HistoryListing"
//     ),
//   loading: () => <Spinner />,

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

export const PutAwayV2Create = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/putaway-v2/component/create/PutAwayV2Create"
    ),
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
    import(
      "pages/user/stock-control/putaway-v2/component/details/general/General"
    ),
  loading: () => <Spinner />,
});

export const PutAwayV2History = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/putaway-v2/component/details/history/History"
    ),
  loading: () => <Spinner />,
});
// StockCount
export const StockCountListing = Loadable({
  loader: () => import("pages/user/stock-control/stock-count/StockCount"),
  loading: () => <Spinner />,
});
export const StockCountCreate = Loadable({
  loader: () =>
    import("pages/user/stock-control/stock-count/component/StockCountCreate"),
  loading: () => <Spinner />,
});

export const StockCountDetails = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/stock-count/component/details/StockCountDetails"
    ),
  loading: () => <Spinner />,
});
// Movement
export const MovementCreate = Loadable({
  loader: () =>
    import("pages/user/stock-control/movement/component/MovementCreate"),
  loading: () => <Spinner />,
});

export const MovementListing = Loadable({
  loader: () => import("pages/user/stock-control/movement/Movement"),
  loading: () => <Spinner />,
});

export const MovementDetails = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/movement/component/details/MovementDetails"
    ),
  loading: () => <Spinner />,
});

// export const ReceiveGeneral = Loadable({
//   loader: () =>
//     import(
//       "pages/user/stock-control/receive/component/detials/general/General"
//     ),
//   loading: () => <Spinner />,
// });

// export const ReceiveHistory = Loadable({
//   loader: () =>
//     import(
//       "pages/user/stock-control/receive/component/detials/history/History"
//     ),
//   loading: () => <Spinner />,
// });

// tranfer
export const TransferListing = Loadable({
  loader: () => import("pages/user/stock-control/transfer/StockTransfer"),
  loading: () => <Spinner />,
});

export const TransferCreate = Loadable({
  loader: () =>
    import("pages/user/stock-control/transfer/component/TransferCreate"),
  loading: () => <Spinner />,
});

export const TransferUpdate = Loadable({
  loader: () =>
    import("pages/user/stock-control/transfer/component/TransferUpdate"),
  loading: () => <Spinner />,
});

export const TransferDetails = Loadable({
  loader: () =>
    import(
      "pages/user/stock-control/transfer/component/details/TransferLayout"
    ),
  loading: () => <Spinner />,
});

export const TransferDetailsGeneral = Loadable({
  loader: () =>
    import("pages/user/stock-control/transfer/component/details/General"),
  loading: () => <Spinner />,
});

export const TransferDetailsHistory = Loadable({
  loader: () =>
    import("pages/user/stock-control/transfer/component/details/History"),
  loading: () => <Spinner />,
});

// reorder
export const ReorderListing = Loadable({
  loader: () => import("pages/user/stock-control/reorder/Reorder"),
  loading: () => <Spinner />,
});

export const ReorderDetails = Loadable({
  loader: () =>
    import("pages/user/stock-control/reorder/component/details/ReorderDetails"),
  loading: () => <Spinner />,
});
