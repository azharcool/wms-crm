import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
import AddUser from "./components/AddUser";

import UsersTable from "./components/UsersTable";
import { useApiActions } from "./query/useApiAction";
import { useFetchUsers } from "./query/useFetchUsers";

function Users() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    data: users,
    refetch,
    isLoading,
  } = useFetchUsers(currentPage, pageLimit);

  const { toggleUser, deleteUser } = useApiActions();

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

  const handleSwitch = async (userId: number) => {
    await toggleUser(userId);
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
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
                buttonText="Add New User"
                handleClick={handleOpen}
                title="User List"
              />
              <Box sx={{ mt: 3 }}>
                <UsersTable
                  handleDeleteUser={handleDeleteUser}
                  handleSwitch={handleSwitch}
                  openModal={handleOpen}
                  setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                  setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                  total={users?.totalDocs || 0}
                  users={users?.data || []}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddUser handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(Users);
