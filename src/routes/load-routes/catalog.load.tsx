import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const Catalog = Loadable({
  loader: () => import("pages/user/catalog"),
  loading: () => <Spinner />,
});

export const Purchase = Loadable({
  loader: () => import("pages/user/purchases/PurchaseOrdersLayout"),
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

export const ProductDetail = Loadable({
  loader: () =>
    import(
      "pages/user/catalog/products/components/product-detail/ProductDetail"
    ),
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
  loader: () =>
    import("pages/user/catalog/bundles/component/bundle-details/BundleDetails"),
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

export const CategoryCreate = Loadable({
  loader: () =>
    import("pages/user/catalog/categories/components/CategoriesCreate"),
  loading: () => <Spinner />,
});

export const CategoryDetail = Loadable({
  loader: () =>
    import("pages/user/catalog/categories/components/CategoriesDetail"),
  loading: () => <Spinner />,
});

export const Brands = Loadable({
  loader: () => import("pages/user/catalog/brands"),
  loading: () => <Spinner />,
});

export const VariantDetails = Loadable({
  loader: () => import("pages/user/catalog/variant/variantDetails"),
  loading: () => <Spinner />,
});

export const Listing = Loadable({
  loader: () => import("pages/user/catalog/listing"),
  loading: () => <Spinner />,
});

export const BulkUpload = Loadable({
  loader: () =>
    import("pages/user/catalog/products/components/Bulk-upload/BulkUpload"),
  loading: () => <Spinner />,
});
