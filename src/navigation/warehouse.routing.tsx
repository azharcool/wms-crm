import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as WarehouseLoadable from "./loadRoutes/warehouse.load";

function WarehouseRouting() {
  return (
    <Route
      element={<WarehouseLoadable.WarehouseLayout />}
      path={`${AppRoutes.warehouse.warehouseLayout}`}
    >
      {/* warehouse create */}
      <Route
        element={<WarehouseLoadable.WarehouseCreate />}
        path={`${AppRoutes.warehouse.create}`}
      />

      {/* warehouse listing */}
      <Route
        element={<WarehouseLoadable.WarehouseListing />}
        path={`${AppRoutes.warehouse.listing}`}
      />

      {/* warehouse tabs */}
      <Route
        element={<WarehouseLoadable.WarehouseDetailsTab />}
        path={`${AppRoutes.warehouse.details}/:detailsId`}
      >
        <Route
          element={<WarehouseLoadable.WarehouseGeneralDetails />}
          path={`${AppRoutes.warehouse.generalDetails}`}
        />
        <Route
          element={<WarehouseLoadable.WarehouseAreasListing />}
          path={`${AppRoutes.warehouse.areas}`}
        />
        <Route
          element={<WarehouseLoadable.WarehouseZonesListing />}
          path={`${AppRoutes.warehouse.zones}`}
        />
        <Route
          element={<WarehouseLoadable.WarehouseLocationsListing />}
          path={`${AppRoutes.warehouse.locations}`}
        />
        <Route
          element={<WarehouseLoadable.WarehouseContainersListing />}
          path={`${AppRoutes.warehouse.containers}`}
        />
      </Route>

      {/* warehouse details */}
      <Route
        element={<WarehouseLoadable.WarehouseAreasDetails />}
        path={`${AppRoutes.warehouse.areasDetails}`}
      />
      <Route
        element={<WarehouseLoadable.WarehouseZonesDetails />}
        path={`${AppRoutes.warehouse.zonesDetails}`}
      />
      <Route
        element={<WarehouseLoadable.WarehouseLocationsDetails />}
        path={`${AppRoutes.warehouse.locationsDetails}`}
      />
      <Route
        element={<WarehouseLoadable.WarehouseContainersDetails />}
        path={`${AppRoutes.warehouse.containersDetails}`}
      />
    </Route>
  );
}

export default WarehouseRouting;
