import { Box, Card, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { memo, useState } from "react";
import AddPipeline from "./components/PipelineForm";

import PipelinesTable from "./components/PipelinesTable";
import { useApiActions } from "./query/useApiAction";
import { useFetchPipelines } from "./query/useFetchPipelines";

function Pipelines() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const {
    data: pipelines,
    refetch,
    isLoading,
  } = useFetchPipelines(currentPage, pageLimit);

  const { deletePipeline } = useApiActions();

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

  const handleDeletePipeline = async (id: number) => {
    await deletePipeline(id);
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
                buttonText="Add New Pipeline"
                handleClick={handleOpen}
                title="Pipeline List"
              />
              <Box sx={{ mt: 3 }}>
                <PipelinesTable
                  handleDeletePipeline={handleDeletePipeline}
                  openModal={handleOpen}
                  pipelines={pipelines?.data || []}
                  setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
                  setPageLimit={(limit: number) => handlePageLimitChange(limit)}
                  total={pipelines?.totalDocs || 0}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddPipeline handleClose={handleClose} open={open} />
    </DashboardLayout>
  );
}

export default memo(Pipelines);
