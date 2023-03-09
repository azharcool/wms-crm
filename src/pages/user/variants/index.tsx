import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
// import PermissionForm from "./components/PermissionForm";
import Warehouses from "./component/__mock__/warhouses.json";
import WarehouseTable from "./component/VariantsTable";
import WarehouseForm from "./component/WarehouseForm";
// import { useApiActions } from "./query/useApiAction";
// import { useFetchPermissions } from "./query/useFetchPermissions";


function Variants() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteWarehouse= async (id: string) => {
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
        
          <Card>
            <CardContent sx={{ paddingTop: 0 }}>
              <TableToolbar
                buttonText="New Variant"
                handleClick={handleOpen}
                title="Variants"
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
    
      </Box>
      <WarehouseForm handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(Variants);
