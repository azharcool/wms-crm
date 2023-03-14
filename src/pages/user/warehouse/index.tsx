import { Box, Card, CardContent, Container, PaletteMode } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
// import PermissionForm from "./components/PermissionForm";

import WarehouseForm from "./component/WarehouseForm";
import WarehouseTable from "./component/WarehouseTable";
import Warehouses from "./component/__mock__/warhouses.json";
// import { useApiActions } from "./query/useApiAction";
// import { useFetchPermissions } from "./query/useFetchPermissions";

function Warehouse() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteWarehouse = async (id: string) => {
    // await deletePermission(id);
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
          <Container maxWidth={false}>
            <Card>
              <CardContent sx={{ paddingTop: 0 }}>
                <TableToolbar
                  isAdd
                  buttonText="New"
                  handleClick={handleOpen}
                  title="Warehouses"
                />
                <Box sx={{ mt: 3 }}>
                  <WarehouseTable
                    handleDeleteWarehouse={handleDeleteWarehouse}
                    openModal={handleOpen}
                    warehouses={Warehouses}
                    total={0}
                    // permissions={permissions?.data || []}
                    // setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                    // setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                    // total={permissions?.totalDocs || 0}
                  />
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Box>
        <WarehouseForm handleClose={handleClose} open={open} />
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default memo(Warehouse);
