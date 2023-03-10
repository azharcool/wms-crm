import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import {
  alpha,
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
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import PerfectScrollbar from "react-perfect-scrollbar";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import MoreMenu from "components/common/MoreMenu";
// import LocationsForm from "./LocationsForm";
import { IPermission } from "../query/useFetchPermissions";
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
  locationlabel: string;
  area: string;
  zone: string;
  Aisle: any;
  bay: any;
  level: any;
  bin: any;
  status: any;
  operations: any;
  warehouse: string;
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


  // const gotoDetails = () =>{
  //   navigate(`${AppRoutes.CONTAINER_DETAILS}/${id}`);
  // }
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
        <Box sx={{ minWidth: 1050, overflow: "auto" }}>
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
                <TableCell>Image</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Container type</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>SKUs</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Inside</TableCell>
                <TableCell>Dimensions</TableCell>
                <TableCell>Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
                <TableCell>Image 1</TableCell>
                {/* <TableCell
                  sx={{ cursor: "pointer" }}
                  onClick={() => gotoDetails(id)}
                >
                  ID1
                </TableCell> */}
                <TableCell>cont</TableCell>
                <TableCell>Location 1</TableCell>
                <TableCell>SKUs</TableCell>
                <TableCell>1000</TableCell>
                <TableCell>8</TableCell>
                <TableCell>6</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
            </TableBody>
            {/* <TableBody>
              {locations.map((locations: ILocations) => {
                const {
                  id,
                  locationlabel,
                  area,
                  zone,
                  Aisle,
                  bay,
                  level,
                  bin,
                  status,
                  operations,
                  warehouse,
                } = locations;
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
                      sx={{ cursor: "pointer" }}
                      onClick={() => gotoDetails(id)}
                    >
                      {" "}
                      {locationlabel}
                    </TableCell>
                    <TableCell>container 1</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>{bay}</TableCell>
                    <TableCell>{level}</TableCell>
                    <TableCell>{bin}</TableCell>
                    <TableCell>{status}</TableCell>
                    <TableCell>{operations}</TableCell>
                    <TableCell>{warehouse}</TableCell>
                 

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
                                color: palette.secondary.lightGray,
                                "&:hover": {
                                  color: palette.info.dark,
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
            </TableBody> */}
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
