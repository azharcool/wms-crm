import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
import AddScreen from "./components/ScreenForm";

import ScreensTable from "./components/ScreensTable";
import { useApiActions } from "./query/useApiAction";
import { useFetchScreens } from "./query/useFetchScreens";

function Screens() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    data: screens,
    refetch,
    isLoading,
  } = useFetchScreens(currentPage, pageLimit);

  const { deleteScreen } = useApiActions();

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

  const handleDeleteScreen = async (id: number) => {
    await deleteScreen(id);
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
                buttonText="Add New Screen"
                handleClick={handleOpen}
                title="Screen List"
              />
              <Box sx={{ mt: 3 }}>
                <ScreensTable
                  handleDeleteScreen={handleDeleteScreen}
                  openModal={handleOpen}
                  screens={screens?.data || []}
                  setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                  setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                  total={screens?.totalDocs || 0}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddScreen handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(Screens);
