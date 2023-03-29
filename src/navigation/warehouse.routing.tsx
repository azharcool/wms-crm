import { Route } from "react-router-dom";
import AppRoutes from "./appRoutes";
import * as WarehouseLoadable from "./loadRoutes/warehouse.load";

const warehouseRouting = (
  <Route
    element={<WarehouseLoadable.WarehouseLayout />}
    path={`${AppRoutes.warehouse.warehouseLayout}`}
  >
    {/* warehouse create */}
    <Route
      element={<WarehouseLoadable.WarehouseCreate />}
      path={`${AppRoutes.warehouse.create}`}
    />
    <Route
      element={<WarehouseLoadable.WarehouseCreate />}
      path={`${AppRoutes.warehouse.update}/:detailsId`}
    />

    {/* warehouse listing */}
    <Route
      element={<WarehouseLoadable.WarehouseListing />}
      path={`${AppRoutes.warehouse.listing}`}
    />

    {/* warehouse details */}
    <Route
      element={<WarehouseLoadable.WarehouseDetailsTab />}
      path={`${AppRoutes.warehouse.details}/:detailsId`}
    >
      <Route
        element={<WarehouseLoadable.WarehouseGeneralDetails />}
        path={`${AppRoutes.warehouse.generalDetails}`}
      />

      {/* listing  */}
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

    {/*  details */}
    <Route
      element={<WarehouseLoadable.WarehouseAreasDetails />}
      path={`${AppRoutes.warehouse.areasDetails}/:areaId`}
    />
    <Route
      element={<WarehouseLoadable.WarehouseZonesDetails />}
      path={`${AppRoutes.warehouse.zonesDetails}/:zoneId`}
    />

    <Route
      element={<WarehouseLoadable.WarehouseLocationsDetails />}
      path={`${AppRoutes.warehouse.locationsDetails}/:locationId`}
    />
    <Route
      element={<WarehouseLoadable.WarehouseContainersDetails />}
      path={`${AppRoutes.warehouse.containersDetails}/:containerId`}
    />

    {/* create */}
    <Route
      element={<WarehouseLoadable.WarehouseLocationsCreate />}
      path={`${AppRoutes.warehouse.locationCreate}`}
    />
  </Route>
);

export default warehouseRouting;
