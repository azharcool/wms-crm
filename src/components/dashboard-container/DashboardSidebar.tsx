<<<<<<< HEAD
import WarehouseIcon from "@mui/icons-material/Warehouse";
=======
>>>>>>> 7a02ddf814a238e170877aabe56a128cacd08f4c
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "assets/icons/chart-bar";
import { SCREEN_CODES } from "config";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { isScreenAccessible, logoURL } from "utils";
import NavItem from "./NavItem";

export interface IMenuItems {
  id: string;
  title: string;
  location: string;
}
export interface ISideNavMenu {
  id: string;
  // href: string;
  icon: JSX.Element;
  title: string;
  screenCode: string;
  menuItems: IMenuItems[];
}

const sideNavMenu: ISideNavMenu[] = [
  {
    id: crypto.randomUUID(),
    // href: AppRoutes.DASHBOARD,
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
    screenCode: SCREEN_CODES.COMMON,
    menuItems: [],
  },
  {
    id: crypto.randomUUID(),
    // href: AppRoutes.DASHBOARD,
    icon: <WarehouseIcon fontSize="small" />,
    title: "Warehouses",
    screenCode: SCREEN_CODES.WAREHOUSE,
    menuItems: [],
  },
  {
    id: crypto.randomUUID(),
    // href: AppRoutes.WAREHOUSE,
    icon: <WarehouseIcon fontSize="small" />,
    title: "Catalog",
    screenCode: SCREEN_CODES.WAREHOUSE,
    menuItems: [
      {
        id: crypto.randomUUID(),
        title: "Products",
        location: AppRoutes.CATALOG.products,
      },
      {
        id: crypto.randomUUID(),
        title: "Variants",
        location: AppRoutes.CATALOG.variants,
      },
      {
        id: crypto.randomUUID(),
        title: "Units",
        location: AppRoutes.CATALOG.units,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    // href: AppRoutes.SETTINGS,
    icon: <SettingsIcon fontSize="small" />,
    title: "Settings",
    screenCode: SCREEN_CODES.SETTINGS,
<<<<<<< HEAD
=======
    menuItems: [],
  },
  {
    id: crypto.randomUUID(),
    // href: AppRoutes.PURCHASE_ORDER,
    icon: <ChartBarIcon fontSize="small" />,
    title: "Purchases",
    menuItems: [],
    screenCode: SCREEN_CODES.PURCHASE,
>>>>>>> 7a02ddf814a238e170877aabe56a128cacd08f4c
  },
];

export function DashboardSidebar(props: any) {
  const { open, onClose } = props;
  const [screens, serScreens] = useState<any[]>([]);
  const { common } = useSelector((state: any) => state);
  const { permissions } = common;

  useEffect(() => {
    if (permissions) {
      // serScreens(items);
    }
  }, [permissions]);

  const lgUp = useMediaQuery(
    (theme: any) => {
      return theme.breakpoints.up("lg");
    },
    {
      defaultMatches: true,
      noSsr: false,
    },
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          // backgroundColor: palette.info.dark,
<<<<<<< HEAD
          backgroundColor: "#2f3044",
=======
          backgroundColor: "#152238",
>>>>>>> 7a02ddf814a238e170877aabe56a128cacd08f4c
          // background: "linear-gradient(0deg,#eb5c2c 2%,#f39521 52%,#f39521);",
          color: "#2f3044",
          // zIndex:8,
          // "&::after": {
          //   content: '""',
          //   position: "absolute",
          //   backgroundImage: `url(${curveBtm})`,
          //   width: "300px",
          //   height: "100px",
          //   bottom: "0",
          //   left:"1rem",
          //   backgroundRepeat:"no-repeat",
          //   zIndex: 9,
          // },
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingTop: 2,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
<<<<<<< HEAD
          <img src={logoURL} width="80%" height="80" alt="logo" />
=======
          <img alt="logo" height="80" src={logoURL} width="80%" />
>>>>>>> 7a02ddf814a238e170877aabe56a128cacd08f4c
        </Box>
        <Divider
          sx={{
            borderColor: palette.info.main,
            my: 2,
          }}
        />
<<<<<<< HEAD
        <Box sx={{ flexGrow: 1, color: "#1e1e2d", fontSize: "0.8rem" }}>
          {screens.map((item) => {
=======
        <Box sx={{ flexGrow: 1, color: "#000", fontSize: "0.8rem" }}>
          {sideNavMenu.map((item) => {
>>>>>>> 7a02ddf814a238e170877aabe56a128cacd08f4c
            return isScreenAccessible(item.screenCode) ? (
              <NavItem key={item.id} item={item} />
            ) : null;
          })}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        open
        anchor="left"
        PaperProps={{
          sx: {
            width: 250,
<<<<<<< HEAD
            // borderRightColor: palette.info.dark,
=======
            borderRightColor: palette.info.dark,
>>>>>>> 7a02ddf814a238e170877aabe56a128cacd08f4c
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={open}
      PaperProps={{
        sx: {
          color: "#000",
          width: 250,
        },
      }}
      sx={{
        zIndex: (theme) => {
          return theme.zIndex.appBar + 100;
        },
      }}
      variant="temporary"
      onClose={onClose}
    >
      {content}
    </Drawer>
  );
}

export default { DashboardSidebar };
