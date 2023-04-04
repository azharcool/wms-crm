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

export const ProductConditionListing = Loadable({
  loader: () =>
    import(
      "pages/user/setting/configuration/product-condition/ProductCondition"
    ),
  loading: () => <Spinner />,
});
