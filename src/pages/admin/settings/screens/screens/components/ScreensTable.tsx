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
import { useScreenActions } from "redux/screen/screen";
import palette from "theme/palette";
import { IScreen } from "../query/useFetchScreens";

interface IProps {
  screens: IScreen[];
  total: number;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: IScreen) => void;
  handleDeleteScreen?: (screenId: number) => void;
}

function ScreensTable(props: IProps) {
  const {
    screens,
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    handleDeleteScreen,
  } = props;

  const { setScreen } = useScreenActions();
  const alert = useAlert();

  const [selectedScreenIds, setSelectedScreenIds] = useState<string[]>([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = screens.map((screen: any) => {
        return screen.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedScreenIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedScreenIds.indexOf(id);
    let newSelectedCustomerIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedScreenIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedScreenIds.slice(1),
      );
    } else if (selectedIndex === selectedScreenIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedScreenIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedScreenIds.slice(0, selectedIndex),
        selectedScreenIds.slice(selectedIndex + 1),
      );
    }

    setSelectedScreenIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  const handleModalOpen = (data: IScreen) => {
    openModal?.(data);
    setScreen({ screen: data });
  };

  const handleDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => handleDeleteScreen?.(id),
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
                    checked={selectedScreenIds.length === total}
                    color="primary"
                    indeterminate={
                      selectedScreenIds.length > 0 &&
                      selectedScreenIds.length < total
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Url</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {screens.map((screen: any) => {
                const { id, screenName, screenCode, screenUrl } = screen;
                return (
                  <TableRow
                    key={screen.id}
                    hover
                    selected={selectedScreenIds.indexOf(id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedScreenIds.indexOf(id) !== -1}
                        value="true"
                        onChange={(event) => {
                          return handleSelectOne(event, id);
                        }}
                      />
                    </TableCell>
                    <TableCell> {screenName}</TableCell>

                    <TableCell>{screenCode}</TableCell>

                    <TableCell>{screenUrl}</TableCell>

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
                          <IconButton onClick={() => handleModalOpen(screen)}>
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

export default ScreensTable;
