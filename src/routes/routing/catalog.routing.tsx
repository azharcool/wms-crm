import { Route } from "react-router-dom";
import AppRoutes from "../appRoutes";
import * as CatalogLoadable from "../load-routes/catalog.load";

const catalogRouting = (
  <Route
    element={<CatalogLoadable.Catalog />}
    path={`${AppRoutes.CATALOG.catalog}`}
  >
    <Route path={`${AppRoutes.CATALOG.products}`}>
      <Route index element={<CatalogLoadable.Products />} />
      <Route
        element={<CatalogLoadable.ProductCreate />}
        path={`${AppRoutes.CATALOG.productCreate}`}
      />
      <Route
        element={<CatalogLoadable.ProductDetail />}
        path={`${AppRoutes.CATALOG.productDetail}/:productId`}
      />
      <Route
        element={<CatalogLoadable.BulkUpload />}
        path={`${AppRoutes.CATALOG.bulkUpload}`}
      />
    </Route>
    <Route path={`${AppRoutes.CATALOG.units}`}>
      <Route index element={<CatalogLoadable.Units />} />
      <Route
        element={<CatalogLoadable.UnitsHistory />}
        path={`${AppRoutes.CATALOG.unitHistory}/:unitId`}
      />
    </Route>
    <Route path={`${AppRoutes.CATALOG.categories}`}>
      <Route index element={<CatalogLoadable.Categories />} />
      <Route
        element={<CatalogLoadable.CategoryDetail />}
        path={`${AppRoutes.CATALOG.categoryDetail}/:categoryId`}
      />
      <Route
        element={<CatalogLoadable.CategoryCreate />}
        path={`${AppRoutes.CATALOG.categoryCreate}`}
      />
    </Route>
    <Route path={`${AppRoutes.CATALOG.brands}`}>
      <Route index element={<CatalogLoadable.Brands />} />
    </Route>
    <Route path={`${AppRoutes.CATALOG.bundles}`}>
      <Route index element={<CatalogLoadable.Bundles />} />
      <Route
        element={<CatalogLoadable.BundlesDetail />}
        path={`${AppRoutes.CATALOG.bundleDetails}/:bundleId`}
      />
      <Route
        element={<CatalogLoadable.CreateBundles />}
        path={`${AppRoutes.CATALOG.bundleCreate}/:bundleId`}
      />
    </Route>
    <Route path={`${AppRoutes.CATALOG.listing}`}>
      <Route index element={<CatalogLoadable.Listing />} />
    </Route>
    <Route path={`${AppRoutes.CATALOG.variants}`}>
      <Route index element={<CatalogLoadable.Variant />} />
      <Route path={`${AppRoutes.CATALOG.variantsDetails}/:variantId`}>
        <Route index element={<CatalogLoadable.VariantDetails />} />
      </Route>
    </Route>
  </Route>
);

export default catalogRouting;
