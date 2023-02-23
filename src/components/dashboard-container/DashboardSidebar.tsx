import EventNoteIcon from "@mui/icons-material/EventNote";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import { ChartBar as ChartBarIcon } from "assets/icons/chart-bar";
import { SCREEN_CODES } from "config";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isScreenAccessible, logoURL } from "utils";
import palette from "theme/palette";
import NavItem from "./NavItem";

const items = [
  {
    href: AppRoutes.DASHBOARD,
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
    screenCode: SCREEN_CODES.COMMON,
  },
  {
    href: AppRoutes.WAREHOUSE,
    icon: <WarehouseIcon fontSize="small" />,
    title: "Warehouses",
    screenCode: SCREEN_CODES.WAREHOUSE,
  },
  {
    href: AppRoutes.SETTINGS,
    icon: <SettingsIcon fontSize="small" />,
    title: "Settings",
    screenCode: SCREEN_CODES.SETTINGS,
  },
  

];

export function DashboardSidebar(props: any) {
  const { open, onClose } = props;
  const [screens, serScreens] = useState<any[]>([]);
  const { common } = useSelector((state: any) => state);
  const { permissions } = common;

  useEffect(() => {
    if (permissions) {
      serScreens(items);
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
          backgroundColor: palette.info.dark,
          color: "#000",
        }}
      >
         <Box
              sx={{
                display: "flex",
                paddingTop: 2,
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img src={logoURL} width="80%" height="80" alt="logo" />
            </Box>
        <Divider
          sx={{
            borderColor: palette.info.main,
            my: 2,
          }}
        />
        <Box sx={{ flexGrow: 1, color: "#000", fontSize: "0.8rem" }}>
          {screens.map((item) => {
            return isScreenAccessible(item.screenCode) ? (
              <NavItem
                key={item.title}
                href={item.href}
                icon={item.icon}
                title={item.title}
              />
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
            width: 200,
            borderRightColor:palette.info.dark
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
          width: 200,
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
