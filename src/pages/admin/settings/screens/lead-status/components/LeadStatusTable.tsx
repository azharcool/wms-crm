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
import { useLeadStatusActions } from "redux/lead-status/leadStatus";
import palette from "theme/palette";
import { ILeadStatus } from "../query/useFetchLeadStatuses";

interface IProps {
  leadStatuses: ILeadStatus[];
  total: number;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: ILeadStatus) => void;
  handleDeleteLeadStatus?: (leadStatusId: number) => void;
}

function LeadStatusesTable(props: IProps) {
  const {
    leadStatuses,
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    handleDeleteLeadStatus,
  } = props;

  const { setLeadStatus } = useLeadStatusActions();
  const alert = useAlert();

  const [selectedLeadStatusIds, setSelectedLeadStatusIds] = useState<string[]>(
    [],
  );
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = leadStatuses.map((leadStatus: any) => {
        return leadStatus.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedLeadStatusIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedLeadStatusIds.indexOf(id);
    let newSelectedCustomerIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadStatusIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadStatusIds.slice(1),
      );
    } else if (selectedIndex === selectedLeadStatusIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadStatusIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedLeadStatusIds.slice(0, selectedIndex),
        selectedLeadStatusIds.slice(selectedIndex + 1),
      );
    }

    setSelectedLeadStatusIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  const handleModalOpen = (data: ILeadStatus) => {
    openModal?.(data);
    setLeadStatus({ leadStatus: data });
  };

  const handleDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => handleDeleteLeadStatus?.(id),
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
                    checked={selectedLeadStatusIds.length === total}
                    color="primary"
                    indeterminate={
                      selectedLeadStatusIds.length > 0 &&
                      selectedLeadStatusIds.length < total
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leadStatuses.map((leadStatus: any) => {
                const { id, leadStatusName } = leadStatus;
                return (
                  <TableRow
                    key={leadStatus.id}
                    hover
                    selected={selectedLeadStatusIds.indexOf(id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedLeadStatusIds.indexOf(id) !== -1}
                        value="true"
                        onChange={(event) => {
                          return handleSelectOne(event, id);
                        }}
                      />
                    </TableCell>
                    <TableCell> {leadStatusName}</TableCell>

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
                            onClick={() => handleModalOpen(leadStatus)}
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

export default LeadStatusesTable;
