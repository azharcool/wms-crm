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

