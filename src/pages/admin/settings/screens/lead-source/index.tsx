import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
import AddLeadSource from "./components/LeadSourceForm";

import LeadSourceTable from "./components/LeadSourceTable";
import { useApiActions } from "./query/useApiAction";
import { useFetchLeadSources } from "./query/useFetchLeadSources";

function LeadSource() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    data: leadSources,
    refetch,
    isLoading,
  } = useFetchLeadSources(currentPage, pageLimit);

  const { deleteLeadSource } = useApiActions();

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

  const handleDeleteLeadSource = async (id: number) => {
    await deleteLeadSource(id);
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
                buttonText="Add New Lead Source"
                handleClick={handleOpen}
                title="Lead Source List"
              />
              <Box sx={{ mt: 3 }}>
                <LeadSourceTable
                  handleDeleteLeadSource={handleDeleteLeadSource}
                  leadSources={leadSources?.data || []}
                  openModal={handleOpen}
                  setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                  setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                  total={leadSources?.totalDocs || 0}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddLeadSource handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(LeadSource);
