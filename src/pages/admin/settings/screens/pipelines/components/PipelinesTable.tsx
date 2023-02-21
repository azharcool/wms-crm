import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useAlert } from "components/alert";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { usePipelineActions } from "redux/pipeline/pipeline";
import palette from "theme/palette";
import { IPipeline } from "../query/useFetchPipelines";

interface IProps {
  pipelines: IPipeline[];
  total: number;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: IPipeline) => void;
  handleDeletePipeline?: (pipelineId: number) => void;
}

function PipelinesTable(props: IProps) {
  const {
    pipelines,
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    handleDeletePipeline,
  } = props;

  const { setPipeline } = usePipelineActions();
  const alert = useAlert();

  const [selectedPipelineIds, setSelectedPipelineIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = pipelines.map((pipeline: any) => {
        return pipeline.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedPipelineIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedPipelineIds.indexOf(id);
    let newSelectedCustomerIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPipelineIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPipelineIds.slice(1),
      );
    } else if (selectedIndex === selectedPipelineIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPipelineIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPipelineIds.slice(0, selectedIndex),
        selectedPipelineIds.slice(selectedIndex + 1),
      );
    }

    setSelectedPipelineIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  const handleModalOpen = (data: IPipeline) => {
    openModal?.(data);
    setPipeline({ pipeline: data });
  };

  const handleDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => handleDeletePipeline?.(id),
    });
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050, overflow: "scroll" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedPipelineIds.length === total}
                    color="primary"
                    indeterminate={
                      selectedPipelineIds.length > 0 &&
                      selectedPipelineIds.length < total
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pipelines.map((pipeline: any) => {
                const { id, stage } = pipeline;
                return (
                  <TableRow
                    key={pipeline.id}
                    hover
                    selected={selectedPipelineIds.indexOf(id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedPipelineIds.indexOf(id) !== -1}
                        value="true"
                        onChange={(event) => {
                          return handleSelectOne(event, id);
                        }}
                      />
                    </TableCell>
                    <TableCell> {stage}</TableCell>

                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          "& svg": {
                            cursor: "pointer",
                          },
                        }}
                      >
                        <Box>
                          <IconButton onClick={() => handleDelete(id)}>
                            <DeleteIcon
                              sx={{
                                fontSize: "1.2rem",
                                color: palette.secondary.lightGray,
                                "&:hover": {
                                  color: palette.error.main,
                                },
                              }}
                            />
                          </IconButton>
                        </Box>
                        <Box>
                          <IconButton onClick={() => handleModalOpen(pipeline)}>
                            <CreateIcon
                              sx={{
                                fontSize: "1.2rem",
                                color: palette.secondary.lightGray,
                                "&:hover": {
                                  color: palette.info.main,
                                },
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={total}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
      />
    </Card>
  );
}

export default PipelinesTable;
