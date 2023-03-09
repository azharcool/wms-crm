import { Box, CircularProgress, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useState } from "react";
import { useCommonActions } from "redux/common/common";
import palette from "theme/palette";
import { CssBaseline } from "@mui/material";
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
    backgroundColor: palette.info.dark,
    paddingTop: 5,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 200,
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

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
        <DashboardLayoutRoot>
          <Box
            sx={{
              backgroundColor: palette.gray.light,
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
