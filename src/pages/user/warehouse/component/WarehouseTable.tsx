import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
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
import FilterListIcon from '@mui/icons-material/FilterList';
import PerfectScrollbar from "react-perfect-scrollbar";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import WarehouseForm from "./WarehouseForm";
// import { IPermission } from "../query/useFetchPermissions";

interface IProps {
  warehouses: IWarehouse[];
  total: number;
  setCurrentPage?: (page: number) => void;
  setPageLimit?: (limit: number) => void;
  openModal?: (data: any) => void;
  handleDeleteWarehouse: (id: string) => void;
}

interface IWarehouse{
  id:string,
  name:string,
  label:string,
  city:string,
  email:string,
  phone:number,
  primaryContact:string
}


function WarehouseTable(props: IProps) {
  const {
    warehouses,
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    handleDeleteWarehouse,
  } = props;

  const { setPermission } = usePermissionActions();
  const alert = useAlert();
  const navigate = useNavigate();
  const [selectedPermissionIds, setSelectedPermissionIds] = useState<string[]>(
    [],
  );
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen]= useState(false);
  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = warehouses.map((warehouse: any) => {
        return warehouse.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

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
      onConfirm: () => handleDeleteWarehouse?.(id),
    });
  };
  const gotoDetails = (id: string) => {
    navigate(`${AppRoutes.WAREHOUSE_DETAILS}/${id}`);
  };
  const handleEdit=(item:IWarehouse)=>{
   setOpen(true)
  }
  const handleClose =()=>{
    setOpen(false)
  }
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050, overflow: "auto" }}>
        <EnhancedTableToolbar numSelected={3} />
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
                <TableCell>Name</TableCell>
                <TableCell>Label</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Primary Contact</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {warehouses.map((warehouse:IWarehouse) => {
                const {
                  id,
                  name,
                  label,
                  city,
                  email,
                  phone,
                  primaryContact
                } = warehouse;
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
                    <TableCell sx={{ cursor: "pointer" }} onClick={() => gotoDetails(id)}> {name}</TableCell>
                    <TableCell>{label}</TableCell>
                    <TableCell>{city}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{phone}</TableCell>
                    <TableCell>{primaryContact}</TableCell>
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
                          <IconButton
                            onClick={() => handleEdit(warehouse)}
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
                        <Box>
                          <IconButton>
                            <DeleteIcon
                              sx={{
                                fontSize: "1.2rem",
                                color: palette.secondary.lightGray,
                                "&:hover": {
                                  color: palette.error.main,
                                },
                              }}
                              onClick={() => handleDelete(id)}
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
      <WarehouseForm open={open} handleClose={handleClose} isEdit={false} />
    </Card>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;

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
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          All
        </Typography>
        <Tooltip title="Search">
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Ordering">
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

export default WarehouseTable;
