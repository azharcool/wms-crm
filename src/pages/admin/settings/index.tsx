import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GroupsIcon from "@mui/icons-material/Groups";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LockIcon from "@mui/icons-material/Lock";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Box,
  Card,
  CardHeader,
  Container,
  PaletteMode,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import DashboardLayout from "components/dashboard-container";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { isControlAccessible } from "utils";
import { useSelector } from "react-redux";
import { ACCESS_CODES, SCREEN_CODES } from "../../../config";
import SettingBlock from "./components/SettingBlock";

function Settings() {
  const navigate = useNavigate();

  const gotoRoles = () => {
    navigate(AppRoutes.ROLES);
  };

  const gotoScreens = () => {
    navigate(AppRoutes.SCREENS);
  };

  const gotoPermissions = () => {
    navigate(AppRoutes.PERMISSIONS);
  };

  const gotoScreenAccess = () => {
    navigate(AppRoutes.SCREEN_ACCESS);
  };

  // const gotoCustomField = () => {
  //   navigate(AppRoutes.CUSTOM_FIELDS);
  // };

  // const gotoLeadSource = () => {
  //   navigate(AppRoutes.LEAD_SOURCE);
  // };

  // const gotoLeadStatus = () => {
  //   navigate(AppRoutes.LEAD_STATUS);
  // };

  // const gotoPipeline = () => {
  //   navigate(AppRoutes.PIPELINES);
  // };

  const gotoMyTeam = () => {
    navigate(AppRoutes.TEAM);
  };

  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Typography sx={{ mb: 3 }} variant="h4">
              Settings
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Card>
                <CardHeader subheader="" title="Security" />
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <SettingBlock
                    accessible={isControlAccessible(
                      ACCESS_CODES.ROLL,
                      SCREEN_CODES.SETTINGS,
                    )}
                    color={palette.success.lightGreen}
                    handleClick={gotoRoles}
                    icon={
                      <GroupsIcon fontSize="medium" sx={{ color: "#fff" }} />
                    }
                    title="Roles"
                  />
                  <SettingBlock
                    accessible={isControlAccessible(
                      ACCESS_CODES.SCREEN,
                      SCREEN_CODES.SETTINGS,
                    )}
                    handleClick={gotoScreens}
                    icon={
                      <ScreenshotMonitorIcon
                        fontSize="medium"
                        sx={{ color: "#fff" }}
                      />
                    }
                    title="Screens"
                  />
                  <SettingBlock
                    accessible={isControlAccessible("control_01", "setting_01")}
                    color={palette.warning.orange}
                    handleClick={gotoPermissions}
                    icon={<TuneIcon fontSize="medium" sx={{ color: "#fff" }} />}
                    title="Screen Control"
                  />

                  <SettingBlock
                    accessible={isControlAccessible(
                      ACCESS_CODES.SCREEN_ACCESS,
                      SCREEN_CODES.SETTINGS,
                    )}
                    color={palette.success.light}
                    handleClick={gotoScreenAccess}
                    icon={<LockIcon fontSize="medium" sx={{ color: "#fff" }} />}
                    title="Screen Access"
                  />
                </Box>
              </Card>
            </Box>
            {/* <Box sx={{ pt: 3 }}>
            <Card>
              <CardHeader subheader="" title="Lead" />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <SettingBlock
                  accessible={isControlAccessible(
                    ACCESS_CODES.LEAD_SOURCE,
                    SCREEN_CODES.SETTINGS,
                  )}
                  color={palette.warning.orange}
                  // handleClick={gotoLeadSource}
                  icon={
                    <HistoryEduIcon fontSize="medium" sx={{ color: "#fff" }} />
                  }
                  title="Lead Source"
                />
                <SettingBlock
                  accessible={isControlAccessible(
                    ACCESS_CODES.LEAD_STATUS,
                    SCREEN_CODES.SETTINGS,
                  )}
                  color={palette.success.lightGreen}
                  // handleClick={gotoLeadStatus}
                  icon={
                    <AccountTreeIcon fontSize="medium" sx={{ color: "#fff" }} />
                  }
                  title="Lead Status"
                />

                <SettingBlock
                  accessible={isControlAccessible(
                    ACCESS_CODES.PIPELINE_LEAD,
                    SCREEN_CODES.SETTINGS,
                  )}
                  color={palette.success.lightGreen}
                  // handleClick={gotoPipeline}
                  icon={
                    <AccountTreeIcon fontSize="medium" sx={{ color: "#fff" }} />
                  }
                  title="Pipeline - Lead"
                />
              </Box>
            </Card>
          </Box> */}
            {/* <Box sx={{ pt: 3 }}>
            <Card>
              <CardHeader subheader="" title="Custom Fields" />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <SettingBlock
                  accessible={isControlAccessible(
                    ACCESS_CODES.CUSTOM_FIELD,
                    SCREEN_CODES.SETTINGS,
                  )}
                  color={palette.warning.main}
                  // handleClick={gotoCustomField}
                  icon={
                    <HistoryEduIcon fontSize="medium" sx={{ color: "#fff" }} />
                  }
                  title="Custom Fields"
                />
              </Box>
            </Card>
          </Box> */}

            <Box sx={{ pt: 3 }}>
              <Card>
                <CardHeader subheader="" title="My Team" />
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <SettingBlock
                    accessible={isControlAccessible(
                      ACCESS_CODES.MY_TEAM,
                      SCREEN_CODES.SETTINGS,
                    )}
                    color={palette.success.main}
                    handleClick={gotoMyTeam}
                    icon={
                      <GroupsIcon fontSize="medium" sx={{ color: "#fff" }} />
                    }
                    title="My Team"
                  />
                </Box>
              </Card>
            </Box>
          </Container>
        </Box>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default Settings;
