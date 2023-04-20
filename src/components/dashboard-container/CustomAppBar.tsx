import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Badge,
  Box,
  InputAdornment,
  Stack,
  SvgIcon,
  TextField,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { styled, useTheme } from "@mui/material/styles";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/store";
import { getSelectedThemeMode } from "redux/theme/themeSelector";
import { setThemeMode } from "redux/theme/themeSlice";
import { logoURL } from "utils";
import { getInitials } from "utils/get-initials";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  }),
}));

interface ICustomAppBar {
  open: boolean;
  handleDrawerOpen: () => void;
}

function CustomAppBar(props: ICustomAppBar) {
  const { open, handleDrawerOpen } = props;

  const getThemeMode = useSelector(getSelectedThemeMode);
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const handleTheme = () => {
    dispatch(setThemeMode());
  };

  return (
    <AppBar
      open={open}
      position="fixed"
      sx={{
        background: "transparent",
        backdropFilter: "blur(20px)",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.secondary.contrastText}`,
      }}
    >
      <Toolbar>
        <IconButton
          disableRipple
          aria-label="open drawer"
          color="inherit"
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
          onClick={handleDrawerOpen}
        >
          <img
            alt="logo"
            height="64"
            src={logoURL}
            style={{
              maxWidth: "100%",
              display: "block",
              height: "50px",
              objectFit: "cover",
            }}
          />
        </IconButton>

        <Stack
          alignContent="end"
          alignItems="center"
          direction="row"
          gap={1}
          justifyContent="end"
          width="100%"
        >
          <Box sx={{ maxWidth: 300 }}>
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

          <IconButton onClick={handleTheme}>
            {getThemeMode === "dark" ? (
              <Brightness4Icon
                sx={{
                  color: theme.palette.primary.light,
                }}
              />
            ) : (
              <Brightness5Icon
                sx={{
                  color: theme.palette.primary.dark,
                }}
              />
            )}
          </IconButton>

          <IconButton>
            <Badge badgeContent={4} color="primary" variant="standard">
              <NotificationsNoneIcon
                fontSize="medium"
                sx={{
                  color: theme.palette.primary.dark,
                }}
              />
            </Badge>
          </IconButton>

          <Avatar
            // src={`${config.IMAGE_BASE_URL}${user.profilePic}`}
            src=""
            sx={{
              cursor: "pointer",
              height: 40,
              width: 40,
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.light,
              padding: "10px",
            }}
          >
            {getInitials("Azhar M")}
          </Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default CustomAppBar;
