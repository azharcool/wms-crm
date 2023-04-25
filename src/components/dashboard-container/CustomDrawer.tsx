import CircleIcon from "@mui/icons-material/Circle";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getExpandedSelected } from "redux/side-dashboard/sideDashboardSelector";
import { setExpanded } from "redux/side-dashboard/sideDashboardSlice";
import { logoURL } from "utils";
import { sideNavMenu } from "./sideBarNavMenu";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface ICustomDrawer {
  open: boolean;
  handleDrawerClose: () => void;
}

function CustomDrawer(props: ICustomDrawer) {
  const { open, handleDrawerClose } = props;

  const [openCollapseId, setOpenCollapseId] = useState("");

  const getExpanded = useSelector(getExpandedSelected);
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleCollapse = (id: string) => {
    let collapseId = id;
    if (collapseId === openCollapseId) {
      collapseId = "";
    }
    setOpenCollapseId(collapseId);
  };

  return (
    <Drawer
      open={open}
      sx={{
        ".MuiDrawer-paper": {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
      variant="permanent"
    >
      <DrawerHeader
        sx={{
          justifyContent: "start",
        }}
      >
        <IconButton disableRipple onClick={handleDrawerClose}>
          <img
            alt="logo"
            height="80"
            src={logoURL}
            style={{
              maxWidth: "100%",
              display: "block",
            }}
          />
        </IconButton>
      </DrawerHeader>
      <PerfectScrollbar>
        <List>
          {sideNavMenu.map((item) => {
            return (
              <>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {
                    dispatch(setExpanded(item.href || ""));
                    if (item.menuItems.length === 0 && item.href) {
                      navigate(item.href);
                    }
                  }}
                >
                  <Tooltip title={item.title}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: theme.palette.primary.light,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: theme.palette.primary.light,
                      "& .MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: "500",
                      },
                    }}
                  />

                  {open &&
                    item.menuItems.length !== 0 &&
                    (item.href === getExpanded ? (
                      <ExpandLess
                        fontSize="small"
                        sx={{
                          color: theme.palette.primary.light,
                        }}
                      />
                    ) : (
                      <ExpandMore
                        fontSize="small"
                        sx={{
                          color: theme.palette.primary.light,
                        }}
                      />
                    ))}
                </ListItemButton>
                <Collapse
                  unmountOnExit
                  in={item.href === getExpanded}
                  timeout="auto"
                >
                  <List disablePadding component="div">
                    {item.menuItems.map((item) => {
                      return (
                        <Link key={item.id} href={item.location}>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon
                              sx={{
                                minWidth: "15px",
                              }}
                            >
                              <CircleIcon
                                fontSize="small"
                                sx={{
                                  fontSize: "8px",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={item.title}
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "13px",
                                  fontWeight: "400",
                                },
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </List>
                </Collapse>
              </>
            );
          })}
        </List>
      </PerfectScrollbar>
    </Drawer>
  );
}

export default CustomDrawer;
