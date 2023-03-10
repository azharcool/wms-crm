import styled from "@emotion/styled";
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
import { useRef, useState } from "react";
import { getInitials } from "utils/get-initials";
import useDecodedData from "hooks/useDecodedData";
import palette from "theme/palette";
import AccountPopover from "./AccountPopover";

const DashboardNavbarRoot = styled(AppBar)(({ theme }: any) => {
  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
    };
});

export function DashboardNavbar(props: any) {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const decode = useDecodedData();
  const { FullName, email } = decode;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 250,
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
            minHeight: 64,
            left: 0,
            px: 2,
          }}
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
            {/* <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton> */}
            <Box>
              <Box sx={{ maxWidth: 300, marginLeft:'1.5rem' }}>
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
                {FullName}
              </Typography>
              <Typography component="p" sx={{ fontSize: "inherit" }}>
                {email}
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
