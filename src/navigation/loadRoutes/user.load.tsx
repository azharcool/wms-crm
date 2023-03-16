import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Warehouse = Loadable({
  loader: () => import("pages/user/warehouse"),
  loading: () => <Spinner />,
});

export const WarehouseDetails = Loadable({
  loader: () => import("pages/user/warehouse/screens/warehouse-details"),
  loading: () => <Spinner />,
});

export const AreaDetails = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse/screens/warehouse-details/component/tabs/areas/screens/area-details"
    ),
  loading: () => <Spinner />,
});

export const ZoneDetails = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse/screens/warehouse-details/component/tabs/zones/screens/zone-details"
    ),
  loading: () => <Spinner />,
});

export const LocationDetails = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse/screens/warehouse-details/component/tabs/locations/screens/locations-details"
    ),
  loading: () => <Spinner />,
});
export const ContainerDetails = Loadable({
  loader: () =>
    import(
      // eslint-disable-next-line import/no-unresolved
      "pages/user/warehouse/screens/warehouse-details/component/tabs/containers/screens/container-details"
    ),
  loading: () => <Spinner />,
});
export const PurchaseOrder = Loadable({
  loader: () =>
    import(
      // eslint-disable-next-line import/no-unresolved
      "pages/user/purchases/purchase-order"
    ),
  loading: () => <Spinner />,
});

export const AllOrderDetails = Loadable({
  loader: () =>
    import(
      "pages/user/purchases/purchase-order/tabs/all-order/screens/allOrder-details"
    ),
  loading: () => <Spinner />,
});

export const AddPurchaseOrder = Loadable({
  loader: () =>
    import("pages/user/purchases/purchase-order/screens/add-purchase"),
  loading: () => <Spinner />,
});

export const Catalog = Loadable({
  loader: () => import("pages/user/catalog"),
  loading: () => <Spinner />,
});

export const Purchase = Loadable({
  loader: () => import("pages/user/purchases"),
  loading: () => <Spinner />,

});

export const Suppliers = Loadable({
  loader: () => import("pages/user/purchases/suppliers"),
  loading: () => <Spinner />,
});

export const Products = Loadable({
  loader: () => import("pages/user/catalog/products"),
  loading: () => <Spinner />,
});

export const ProductCreate = Loadable({
  loader: () => import("pages/user/catalog/products/components/ProductCreate"),
  loading: () => <Spinner />,
});

export const Units = Loadable({
  loader: () => import("pages/user/catalog/units"),
  loading: () => <Spinner />,
});

export const UnitsHistory = Loadable({
  loader: () => import("pages/user/catalog/units/component/unit-history"),
  loading: () => <Spinner />,
});

export const Bundles = Loadable({
  loader: () => import("pages/user/catalog/bundles"),
  loading: () => <Spinner />,
});

export const Variant = Loadable({
  loader: () => import("pages/user/catalog/variant/index"),
  loading: () => <Spinner />,
});
export const BundlesDetail = Loadable({
  loader: () => import("pages/user/catalog/bundles/component/BundleDetails"),
  loading: () => <Spinner />,
});

export const CreateBundles = Loadable({
  loader: () => import("pages/user/catalog/bundles/component/BundleCreate"),
  loading: () => <Spinner />,
});

export const Categories = Loadable({
  loader: () => import("pages/user/catalog/categories"),
  loading: () => <Spinner />,
});

export const Brands = Loadable({
  loader: () => import("pages/user/catalog/brands"),
  loading: () => <Spinner />,
});

export const Listing = Loadable({
  loader: () => import("pages/user/catalog/listing"),
  loading: () => <Spinner />,
});
