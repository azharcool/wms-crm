import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
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
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAlert } from "components/alert";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useNavigate } from "react-router-dom";
import { usePermissionActions } from "redux/permissions/permissions";
// import LocationsForm from "./LocationsForm";
import ContainersForm from "./ContainersForm";

interface IProps {
  containers: IContainers[];
  total: number;
  setCurrentPage?: (page: number) => void;
  setPageLimit?: (limit: number) => void;
  openModal?: (data: any) => void;
  handleDeletePermission: (id: number) => void;
}

interface IContainers {
  id: string;
  image: string;
  containertype: string;
  location: string;
  skus: string;
  quantity: string;
  inside: string;
  dimension: string;
  volume: string;
}

function ContainersTable(props: IProps) {
  const {
    containers,
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    handleDeletePermission,
  } = props;

  const { setPermission } = usePermissionActions();
  const alert = useAlert();
  const navigate = useNavigate();
  const [selectedPermissionIds, setSelectedPermissionIds] = useState<string[]>(
    [],
  );
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);

  const handleSelectAll = (event: any) => {
    const newSelectedCustomerIds: string[] = [];

    // if (event.target.checked) {
    //   newSelectedCustomerIds = locations.map((warehouse: any) => {
    //     return warehouse.id;
    //   });
    // } else {
    //   newSelectedCustomerIds = [];
    // }

    setSelectedPermissionIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedPermissionIds.indexOf(id);
    let newSelectedCustomerIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPermissionIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPermissionIds.slice(1),
      );
    } else if (selectedIndex === selectedPermissionIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPermissionIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedPermissionIds.slice(0, selectedIndex),
        selectedPermissionIds.slice(selectedIndex + 1),
      );
    }

    setSelectedPermissionIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    // setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
    // setCurrentPage(newPage);
  };

  const handleModalOpen = (data: any) => {
    openModal?.(data);
    setPermission({ permission: data });
  };

  const handleDelete = (id: string) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      // onConfirm: () => handleDeletePermission?.(id),
    });
  };

  const gotoDetails = (id: any) => {
    navigate(`${AppRoutes.CONTAINER_DETAILS}/${id}`);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    setOpen(true);
  };
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ overflow: "auto" }}>
          <EnhancedTableToolbar handleOpen={handleOpen} numSelected={3} />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    // checked={selectedPermissionIds.length === total}
                    checked={false}
                    color="primary"
                    indeterminate={
                      selectedPermissionIds.length > 0 &&
                      selectedPermissionIds.length < total
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell colSpan={3}>Image</TableCell>
                <TableCell>ID</TableCell>
                <TableCell colSpan={2}>Container type</TableCell>
                <TableCell colSpan={2}>Location</TableCell>
                <TableCell colSpan={2}>SKUs</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell colSpan={2}>Inside</TableCell>
                <TableCell>Dimensions</TableCell>
                <TableCell>Volume</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {containers.map((containers: IContainers) => {
                const {
                  id,
                  image,
                  containertype,
                  location,
                  skus,
                  quantity,
                  inside,
                  dimension,
                  volume,
                } = containers;
                return (
                  <TableRow
                    key={id}
                    hover
                    selected={selectedPermissionIds.indexOf(id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedPermissionIds.indexOf(id) !== -1}
                        value="true"
                        onChange={(event) => {
                          return handleSelectOne(event, id);
                        }}
                      />
                    </TableCell>
                    <TableCell
                      colSpan={3}
                      sx={{ cursor: "pointer" }}
                      onClick={() => gotoDetails(id)}
                    >
                      {" "}
                      {image}
                    </TableCell>
                    <TableCell>{id}</TableCell>
                    <TableCell colSpan={2}>{containertype}</TableCell>
                    <TableCell colSpan={2}>{location}</TableCell>
                    <TableCell colSpan={2}>{skus}</TableCell>
                    <TableCell>{quantity}</TableCell>
                    <TableCell colSpan={2}>{inside}</TableCell>
                    <TableCell>{dimension}</TableCell>
                    <TableCell>{volume}</TableCell>

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
                          <IconButton onClick={() => handleEdit()}>
                            <CreateIcon
                              sx={{
                                fontSize: "1.2rem",
                                // color: palette.secondary.lightGray,
                                // "&:hover": {
                                //   color: palette.info.dark,
                                // },
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
      <ContainersForm handleClose={handleClose} open={open} />
    </Card>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
  handleOpen: () => void;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected, handleOpen } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        // ...(numSelected > 0 && {
        //   bgcolor: (theme) =>
        //     alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        // }),
      }}
    >
      <Typography
        component="div"
        id="tableTitle"
        sx={{ flex: "1 1 100%" }}
        variant="h6"
      >
        All
      </Typography>
      <Tooltip title="Add" onClick={() => handleOpen()}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Search">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter list">
        <IconButton>
          <FormatAlignCenterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="More">
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default ContainersTable;
