import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
import AddLeadStatus from "./components/LeadStatusForm";

import LeadStatusTable from "./components/LeadStatusTable";
import { useApiActions } from "./query/useApiAction";
import { useFetchLeadStatuses } from "./query/useFetchLeadStatuses";

function LeadStatus() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    data: leadStatuses,
    refetch,
    isLoading,
  } = useFetchLeadStatuses(currentPage, pageLimit);

  const { deleteLeadStatus } = useApiActions();

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

  const handleDeleteLeadStatus = async (id: number) => {
    await deleteLeadStatus(id);
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
                buttonText="Add New Lead Status"
                handleClick={handleOpen}
                title="Lead Status List"
              />
              <Box sx={{ mt: 3 }}>
                <LeadStatusTable
                  handleDeleteLeadStatus={handleDeleteLeadStatus}
                  leadStatuses={leadStatuses?.data || []}
                  openModal={handleOpen}
                  setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                  setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                  total={leadStatuses?.totalDocs || 0}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddLeadStatus handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(LeadStatus);
