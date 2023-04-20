import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const SettingLayout = Loadable({
  loader: () => import("pages/user/setting/SettingLayout"),
  loading: () => <Spinner />,
});

export const ConfigurationListing = Loadable({
  loader: () => import("pages/user/setting/configuration/Configuration"),
  loading: () => <Spinner />,
});

export const BarcodeGenerate = Loadable({
  loader: () => import("pages/user/setting/barcode/GenerationBarcode"),
  loading: () => <Spinner />,
});

export const AdjustmentReasonListing = Loadable({
  loader: () =>
    import(
      "pages/user/setting/configuration/adjustment-reasons/AdjustmentReasons"
    ),
  loading: () => <Spinner />,
});

export const ContainerTypeListing = Loadable({
  loader: () =>
    import("pages/user/setting/configuration/container-types/ContainerType"),
  loading: () => <Spinner />,
});

export const TaxesListing = Loadable({
  loader: () => import("pages/user/setting/configuration/taxes/Taxes"),

  loading: () => <Spinner />,
});

export const ProductConditionListing = Loadable({
  loader: () =>
    import(
      "pages/user/setting/configuration/product-condition/ProductCondition"
    ),
  loading: () => <Spinner />,
});

export const SettingAccount = Loadable({
  loader: () => import("pages/user/setting/account/SettingAccount"),
  loading: () => <Spinner />,
});

export const BillingListing = Loadable({
  loader: () => import("pages/user/setting/billing/Billing"),
  loading: () => <Spinner />,
});

export const BillingDetails = Loadable({
  loader: () => import("pages/user/setting/billing/component/details"),
  loading: () => <Spinner />,
});

export const UserListing = Loadable({
  loader: () => import("pages/user/setting/setting-user/SettingUser"),
  loading: () => <Spinner />,
});

export const UserCreate = Loadable({
  loader: () => import("pages/user/setting/setting-user/component/UserCreate"),
  loading: () => <Spinner />,
});

export const UserUpdate = Loadable({
  loader: () => import("pages/user/setting/setting-user/component/UserUpdate"),
  loading: () => <Spinner />,
});

export const UserDetails = Loadable({
  loader: () =>
    import("pages/user/setting/setting-user/component/details/UserDetails"),
  loading: () => <Spinner />,
});

export const UserDetailsGeneral = Loadable({
  loader: () =>
    import("pages/user/setting/setting-user/component/details/General"),
  loading: () => <Spinner />,
});

export const UserDetailsHistory = Loadable({
  loader: () =>
    import("pages/user/setting/setting-user/component/details/History"),
  loading: () => <Spinner />,
});

export const RoleListing = Loadable({
  loader: () => import("pages/user/setting/roles/Roles"),
  loading: () => <Spinner />,
});

export const RoleCreate = Loadable({
  loader: () => import("pages/user/setting/roles/component/RoleCreate"),
  loading: () => <Spinner />,
});

export const RoleUpdate = Loadable({
  loader: () => import("pages/user/setting/roles/component/Update/RollUpdate"),
  loading: () => <Spinner />,
});

export const RoleUpdateGeneral = Loadable({
  loader: () => import("pages/user/setting/roles/component/Update/General"),
  loading: () => <Spinner />,
});

export const RoleUpdatePermission = Loadable({
  loader: () => import("pages/user/setting/roles/component/Update/Permission"),
  loading: () => <Spinner />,
});
