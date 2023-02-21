import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
import AddRole from "./components/RoleForm";

import RolesTable from "./components/RolesTable";
import { useApiActions } from "./query/useApiAction";
import { useFetchRoles } from "./query/useFetchRoles";

function Roles() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    data: roles,
    refetch,
    isLoading,
  } = useFetchRoles(currentPage, pageLimit);

  const { deleteRole } = useApiActions();

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

  const handleDeleteRole = async (id: number) => {
    await deleteRole(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                buttonText="Add New Role"
                handleClick={handleOpen}
                title="Role List"
              />
              <Box sx={{ mt: 3 }}>
                <RolesTable
                  handleDeleteRole={handleDeleteRole}
                  openModal={handleOpen}
                  roles={roles?.data || []}
                  setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                  setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                  total={roles?.totalDocs || 0}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddRole handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(Roles);
