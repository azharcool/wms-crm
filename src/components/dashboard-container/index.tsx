import { Box, CircularProgress, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useState } from "react";
import { useCommonActions } from "redux/common/common";
import palette from "theme/palette";
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
  return (
    <>
      <DashboardLayoutRoot>
        <DashboardNavbar
          onSidebarOpen={() => {
            return setSidebarOpen(true);
          }}
        />

        <Box
          sx={{
            backgroundColor: palette.gray.light,
            display: "flex",
            flex: "1 1 auto",
            maxWidth: "100%",
            height: "auto",
            minHeight: "100vh",
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
              <Toolbar />
              {children}
            </Box>
          )}
        </Box>
      </DashboardLayoutRoot>

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
