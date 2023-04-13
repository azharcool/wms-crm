import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { ChartBar as ChartBarIcon } from "assets/icons/chart-bar";
import { SCREEN_CODES } from "config";
import AppRoutes from "navigation/appRoutes";

const { stockControl, setting, warehouse, purchases } = AppRoutes;

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
    href: `/${warehouse.warehouseLayout}/${warehouse.listing}`,
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
        location: `/${purchases.layout}/${purchases.purchaseOrders.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Suppliers",
        location: `/${purchases.layout}/${purchases.supplier.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Suppliers Return",
        location: `/${purchases.layout}/${purchases.supplierReturns.listing}`,
      },
    ],
    screenCode: SCREEN_CODES.PURCHASE,
  },
  {
    id: crypto.randomUUID(),
    href: "Stock",
    icon: <InventoryIcon fontSize="small" />,
    title: "Stock Control",
    menuItems: [
      {
        id: crypto.randomUUID(),
        title: "Recieve",
        location: `/${stockControl.layout}/${stockControl.recieve.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Putaway v1",
        location: `/${stockControl.layout}/${stockControl.putaway_v1.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Putaway v2",
        location: `/${stockControl.layout}/${stockControl.putaway_v2.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Adjustment",
        location: `/${stockControl.layout}/${stockControl.adjustment.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Stock Count",
        location: `/${stockControl.layout}/${stockControl.stock_count.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Movement",
        location: `/${stockControl.layout}/${stockControl.movement.listing}`,
      },
      {
        id: crypto.randomUUID(),
        title: "Transfer",
        location: `/${stockControl.layout}/${stockControl.transfer.listing}`,
      },
    ],
    screenCode: "",
  },
  {
    id: crypto.randomUUID(),
    href: AppRoutes.SETTINGS,
    icon: <SettingsIcon fontSize="small" />,
    title: "Settings",
    screenCode: SCREEN_CODES.SETTINGS,
    menuItems: [
      {
        id: crypto.randomUUID(),
        title: "Configuration",
        location: `/${setting.layout}/${setting.configuration.listing}`,
      },
      // {
      //   id: crypto.randomUUID(),
      //   title: "Roles",
      //   location: `/${settting.layout}/${settting.configuration.listing}`,
      // },
      {
        id: crypto.randomUUID(),
        title: "Barcode",
        location: `/${setting.layout}/${setting.barcode.generate}`,
      },
    ],
  },
];
