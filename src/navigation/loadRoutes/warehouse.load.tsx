import { Spinner } from "components/loader";
import Loadable from "react-loadable";

export const WarehouseLayout = Loadable({
  loader: () => import("pages/user/warehouse2/components/WarehouseLayout"),
  loading: () => <Spinner />,
});

// Warehouse Create
export const WarehouseCreate = Loadable({
  loader: () => import("pages/user/warehouse2/components/WarehouseCreate"),
  loading: () => <Spinner />,
});

// Warehouse Listing
export const WarehouseListing = Loadable({
  loader: () => import("pages/user/warehouse2/Warehouse"),
  loading: () => <Spinner />,
});

// Warehouse Details Tab
export const WarehouseDetailsTab = Loadable({
  loader: () =>
    import("pages/user/warehouse2/warehouse-details/WarehouseDetails"),
  loading: () => <Spinner />,
});

// Warehouse General Details
export const WarehouseGeneralDetails = Loadable({
  loader: () =>
    import("pages/user/warehouse2/warehouse-details/general/GeneralDetails"),
  loading: () => <Spinner />,
});

// Areas Listing
export const WarehouseAreasListing = Loadable({
  loader: () => import("pages/user/warehouse2/warehouse-details/areas/Areas"),
  loading: () => <Spinner />,
});

// Areas Details
export const WarehouseAreasDetails = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse2/warehouse-details/areas/components/AreasDetails"
    ),
  loading: () => <Spinner />,
});

// Zones Listing
export const WarehouseZonesListing = Loadable({
  loader: () => import("pages/user/warehouse2/warehouse-details/zones/Zones"),
  loading: () => <Spinner />,
});

// Zones Details
export const WarehouseZonesDetails = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse2/warehouse-details/zones/components/ZonesDetails"
    ),
  loading: () => <Spinner />,
});

// Location Listing
export const WarehouseLocationsListing = Loadable({
  loader: () =>
    import("pages/user/warehouse2/warehouse-details/locations/Locations"),
  loading: () => <Spinner />,
});

// Location Details
export const WarehouseLocationsDetails = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse2/warehouse-details/locations/components/LocationsDetails"
    ),
  loading: () => <Spinner />,
});

// Location Create
export const WarehouseLocationsCreate = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse2/warehouse-details/locations/components/LocationsCreate"
    ),
  loading: () => <Spinner />,
});

// Containers Listing
export const WarehouseContainersListing = Loadable({
  loader: () =>
    import("pages/user/warehouse2/warehouse-details/containers/Containers"),
  loading: () => <Spinner />,
});

// Containers Details
export const WarehouseContainersDetails = Loadable({
  loader: () =>
    import(
      "pages/user/warehouse2/warehouse-details/containers/components/ContainerDetails"
    ),
  loading: () => <Spinner />,
});
