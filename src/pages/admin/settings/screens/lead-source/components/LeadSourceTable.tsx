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
import { useLeadSourceActions } from "redux/lead-source/leadSource";
import palette from "theme/palette";
import { ILeadSource } from "../query/useFetchLeadSources";

interface IProps {
  leadSources: ILeadSource[];
  total: number;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: ILeadSource) => void;
  handleDeleteLeadSource?: (leadSourceId: number) => void;
}

function LeadSourcesTable(props: IProps) {
  const {
    leadSources,
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    handleDeleteLeadSource,
  } = props;

  const { setLeadSource } = useLeadSourceActions();
  const alert = useAlert();

  const [selectedLeadSourceIds, setSelectedLeadSourceIds] = useState<string[]>(
    [],
  );
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = leadSources.map((leadSource: any) => {
        return leadSource.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedLeadSourceIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedLeadSourceIds.indexOf(id);
    let newSelectedCustomerIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadSourceIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadSourceIds.slice(1),
      );
    } else if (selectedIndex === selectedLeadSourceIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadSourceIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadSourceIds.slice(0, selectedIndex),
        selectedLeadSourceIds.slice(selectedIndex + 1),
      );
    }

    setSelectedLeadSourceIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  const handleModalOpen = (data: ILeadSource) => {
    openModal?.(data);
    setLeadSource({ leadSource: data });
  };

  const handleDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => handleDeleteLeadSource?.(id),
    });
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050, overflow: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedLeadSourceIds.length === total}
                    color="primary"
                    indeterminate={
                      selectedLeadSourceIds.length > 0 &&
                      selectedLeadSourceIds.length < total
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leadSources.map((leadSource: any) => {
                const { id, leadSourceName } = leadSource;
                return (
                  <TableRow
                    key={leadSource.id}
                    hover
                    selected={selectedLeadSourceIds.indexOf(id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedLeadSourceIds.indexOf(id) !== -1}
                        value="true"
                        onChange={(event) => {
                          return handleSelectOne(event, id);
                        }}
                      />
                    </TableCell>
                    <TableCell> {leadSourceName}</TableCell>

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
                          <IconButton
                            onClick={() => handleModalOpen(leadSource)}
                          >
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

export default LeadSourcesTable;
