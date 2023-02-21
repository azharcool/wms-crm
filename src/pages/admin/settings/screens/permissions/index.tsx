import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
import PermissionForm from "./components/PermissionForm";

import PermissionTable from "./components/PermissionTable";
import { useApiActions } from "./query/useApiAction";
import { useFetchPermissions } from "./query/useFetchPermissions";

function Permissions() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const { deletePermission } = useApiActions();
  const {
    data: permissions,
    refetch,
    isLoading,
  } = useFetchPermissions(currentPage, pageLimit);

  const handlePageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setPageLimit(limit);
    setTimeout(() => {
      refetch();
    }, 500);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletePermission = async (id: number) => {
    await deletePermission(id);
  };

  return (
    <DashboardLayout isLoading={isLoading}>
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
                buttonText="Add Permissions"
                handleClick={handleOpen}
                title="Permission List"
              />
              <Box sx={{ mt: 3 }}>
                <PermissionTable
                  handleDeletePermission={handleDeletePermission}
                  openModal={handleOpen}
                  permissions={permissions?.data || []}
                  setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                  setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                  total={permissions?.totalDocs || 0}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <PermissionForm handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(Permissions);
