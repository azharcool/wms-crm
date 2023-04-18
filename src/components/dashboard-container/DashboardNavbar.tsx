/* eslint-disable react/no-children-prop */
import styled from "@emotion/styled";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import { getSelectedThemeMode } from "redux/theme/themeSelector";
import { setThemeMode } from "redux/theme/themeSlice";
import palette from "theme/palette";
import { getInitials } from "utils/get-initials";
import AccountPopover from "./AccountPopover";

const DashboardNavbarRoot = styled(AppBar)(({ theme }: any) => {
  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  };
});

export function DashboardNavbar(props: any) {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const decode = useDecodedData();
  const getThemeMode = useSelector(getSelectedThemeMode);
  const dispatch = useAppDispatch();

  const handleTheme = () => {
    dispatch(setThemeMode());
  };

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            // lg: 250,
          },
          width: {
            lg: "calc(100% - 250px)",
          },
          boxShadow: "0px 1px 21px rgb(100 116 139 / 15%)",
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            left: {
              // lg: 50,
            },
            width: {
              // lg: "calc(100% - 200px)",
            },
            boxShadow: "0px 1px 21px rgb(100 116 139 / 15%)",
          }}
          {...other}
        >
          <IconButton
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
            onClick={onSidebarOpen}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <Box>
              <Box sx={{ maxWidth: 300, marginLeft: "1.5rem" }}>
                <TextField
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: 50,
                      "& input": {
                        padding: "8px 10px",
                        paddingLeft: "16px",
                        fontSize: "0.9rem",
                      },
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <SvgIcon color="action" fontSize="small">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search..."
                  variant="outlined"
                />
              </Box>
            </Box>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Theme">
            <IconButton
              sx={{
                ml: 2,
              }}
              onClick={handleTheme}
            >
              {getThemeMode === "dark" ? (
                <Brightness4Icon />
              ) : (
                <Brightness5Icon />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton
              sx={{
                ml: 2,
                backgroundColor: palette.warning.orange,
                color: "#fff",
                "&:hover": {
                  color: palette.warning.orange,
                },
              }}
            >
              <Badge badgeContent={4} color="primary" variant="dot">
                <NotificationsNoneIcon fontSize="medium" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => {
              return setOpenAccountPopover(true);
            }}
          >
            <Avatar
              ref={settingsRef}
              // src={`${config.IMAGE_BASE_URL}${user.profilePic}`}
              src=""
              sx={{
                cursor: "pointer",
                height: 40,
                width: 40,
                ml: 2,
                mr: 1,
              }}
            >
              {getInitials("John Doe")}
            </Avatar>
            <Box
              sx={{
                color: palette.text.topNav,
                lineHeight: 1,
                fontSize: "0.9rem",
              }}
            >
              <Typography component="h6" sx={{ fontSize: "inherit" }}>
                {decode?.FullName}
              </Typography>
              <Typography component="p" sx={{ fontSize: "inherit" }}>
                {decode?.email}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </DashboardNavbarRoot>

      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => {
          return setOpenAccountPopover(false);
        }}
      />
    </>
  );
}

export default { DashboardNavbar };
