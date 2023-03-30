import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const PurchasesLayout = Loadable({
  loader: () => import("pages/user/purchases/PurchaseOrdersLayout"),
  loading: () => <Spinner />,
});

// Purchase Orders
export const PurchasesOrderListing = Loadable({
  loader: () => import("pages/user/purchases/purchase-orders/index"),
  loading: () => <Spinner />,
});

export const PurchasesOrderCreate = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/purchase-orders/component/PurchaseOrderCreate"
    ),
  loading: () => <Spinner />,
});

export const PurchasesOrderUpdate = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/purchase-orders/component/PurchaseOrderUpdate"
    ),
  loading: () => <Spinner />,
});

export const PurchasesOrderDetails = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/purchase-orders/component/PurchaseOrderDetails"
    ),
  loading: () => <Spinner />,
});

// Supplier
export const SupplierListing = Loadable({
  loader: () => import("pages/user/purchases/suppliers/index"),
  loading: () => <Spinner />,
});

export const SupplierCreate = Loadable({
  loader: () =>
    import("pages/user/purchases/suppliers/component/SupplierCreate"),
  loading: () => <Spinner />,
});

export const SupplierUpdate = Loadable({
  loader: () =>
    import("pages/user/purchases/suppliers/component/SupplierUpdate"),
  loading: () => <Spinner />,
});

// Supplier Details Tab
export const SupplierDetailsTab = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/suppliers/component/supplier-details/SupplierDetails"
    ),
  loading: () => <Spinner />,
});

// Supplier General Details
export const SupplierGeneralDetails = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/suppliers/component/supplier-details/general/GeneralDetails"
    ),
  loading: () => <Spinner />,
});

// Supplier Address Details
export const SupplierAddressDetails = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/suppliers/component/supplier-details/address/AddressDetails"
    ),
  loading: () => <Spinner />,
});

// Supplier BankAccount Details
export const SupplierBankAccountDetails = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/suppliers/component/supplier-details/bank/BankAccountDetails"
    ),
  loading: () => <Spinner />,
});

// Supplier Purchases Listing
export const SupplierPurchasesListing = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/suppliers/component/supplier-details/purchases/PurchasesListing"
    ),
  loading: () => <Spinner />,
});

// Supplier History Listing
export const SupplierHistoryListing = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/suppliers/component/supplier-details/history/HistoryListing"
    ),
  loading: () => <Spinner />,
});

// Supplier Return
export const SupplierReturnListing = Loadable({
  loader: () => import("pages/user/purchases/supplier-return/index"),
  loading: () => <Spinner />,
});

export const SupplierReturnCreate = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/supplier-return/components/SupplierReturnCreate"
    ),
  loading: () => <Spinner />,
});

export const SupplierReturnUpdate = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/supplier-return/components/SupplierReturnUpdate"
    ),
  loading: () => <Spinner />,
});

export const SupplierReturnDetails = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/supplier-return/components/SupplierReturnDetails"
    ),
  loading: () => <Spinner />,
});
