import SettingsIcon from "@mui/icons-material/Settings";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { ChartBar as ChartBarIcon } from "assets/icons/chart-bar";
import { SCREEN_CODES } from "config";
import AppRoutes from "navigation/appRoutes";

export interface IMenuItems {
  id: string;
  title: string;
  location: string;
}

export interface ISideNavMenu {
  id: string;
  href?: string | undefined;
  icon: JSX.Element;
  title: string;
  screenCode: string;
  menuItems: IMenuItems[];
}

export const sideNavMenu: ISideNavMenu[] = [
  {
    id: crypto.randomUUID(),
    href: AppRoutes.DASHBOARD,
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
    screenCode: SCREEN_CODES.COMMON,
    menuItems: [],
  },
  {
    id: crypto.randomUUID(),
    href: `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.listing}`,
    icon: <WarehouseIcon fontSize="small" />,
    title: "Warehouses",
    screenCode: SCREEN_CODES.WAREHOUSE,
    menuItems: [],
  },
  {
    id: crypto.randomUUID(),
    href: AppRoutes.CATALOG.catalog,
    icon: <WarehouseIcon fontSize="small" />,
    title: "Catalog",
    screenCode: SCREEN_CODES.WAREHOUSE,
    menuItems: [
      {
        id: crypto.randomUUID(),
        title: "Products",
        location: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Variants",
        location: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.variants}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Units",
        location: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.units}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Bundles",
        location: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.bundles}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Categories",
        location: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.categories}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Brands",
        location: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.brands}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Listing",
        location: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.listing}`,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    href: AppRoutes.PURCHASE.PURCHASE_ORDER,
    icon: <ChartBarIcon fontSize="small" />,
    title: "Purchases",
    menuItems: [
      {
        id: crypto.randomUUID(),
        title: "Purchase order",
        location: `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.purchaseOrders.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Suppliers",
        location: `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Suppliers Return",
        location: `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplierReturns.listing}`,
      },
    ],
    screenCode: SCREEN_CODES.PURCHASE,
  },
  {
    id: crypto.randomUUID(),
    href: AppRoutes.SETTINGS,
    icon: <SettingsIcon fontSize="small" />,
    title: "Settings",
    screenCode: SCREEN_CODES.SETTINGS,
    menuItems: [],
  },
];
