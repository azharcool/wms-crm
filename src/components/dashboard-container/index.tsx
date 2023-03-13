import { Box, CircularProgress, Container, PaletteMode } from "@mui/material";
import { styled } from "@mui/material/styles";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useState } from "react";
import { useCommonActions } from "redux/common/common";
import palette from "theme/palette";
import { CssBaseline } from "@mui/material";
import { grey, purple, red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { DashboardNavbar } from "./DashboardNavbar";
import { DashboardSidebar } from "./DashboardSidebar";
import { useFetchRolePermissionsInit } from "./query/useFetchPermissions";

const DashboardLayoutRoot: any = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 5,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 250,
    },
  };
});

function DashboardLayout(props: any) {
  const { children, isLoading } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const data = useDecodedData();
  const { data: rolePermissions } = useFetchRolePermissionsInit(data?.RoleId);
  const { setPermissions } = useCommonActions();
  useEffect(() => {
    if (rolePermissions) {
      const newPermissions: any[] = [];
      rolePermissions?.data?.map((permission: any) => {
        const { screen } = permission;
        const newObj = {
          ...screen,
          permissions: permission.permissions,
        };
        newPermissions.push(newObj);
        return permission;
      });

      setPermissions({ permissions: newPermissions });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rolePermissions]);

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
    <>
      <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
        <CssBaseline />
        <DashboardLayoutRoot>
          <Box
            sx={{
              // backgroundColor: palette.gray.light,
              display: "flex",
              flex: "1 1 auto",
              maxWidth: "100%",
              height: "auto",
              minHeight: "100vh",
              borderBottomLeftRadius: 60,
              borderTopLeftRadius: 70,
            }}
          >
            {isLoading ? (
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <CircularProgress color="info" size={20} />
                </Box>
              </Container>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flex: "1 1 auto",
                  flexDirection: "column",
                  width: "100%",
                  paddingTop: 2,
                }}
              >
                {children}
              </Box>
            )}
          </Box>
        </DashboardLayoutRoot>
      </ThemeProvider>
      <DashboardNavbar
        onSidebarOpen={() => {
          return setSidebarOpen(true);
        }}
      />

      <DashboardSidebar
        open={isSidebarOpen}
        onClose={() => {
          return setSidebarOpen(false);
        }}
      />
    </>
  );
}

export default DashboardLayout;
