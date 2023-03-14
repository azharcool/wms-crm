import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
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

  return (
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
  );
}

export default memo(Warehouse);
