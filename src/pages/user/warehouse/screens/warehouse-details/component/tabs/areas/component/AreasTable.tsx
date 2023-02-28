import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
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
import MoreMenu from "components/common/MoreMenu";
import AreasForm from "./AreasForm";
// import { IPermission } from "../query/useFetchPermissions";

interface IProps {
  areas: IAreas[];
  total: number;
  setCurrentPage?: (page: number) => void;
  setPageLimit?: (limit: number) => void;
  openModal?: (data: any) => void;
  handleDeletePermission: (id: number) => void;
}

interface IAreas{
  id:string,
  name:string
  label:string,
  warehouse:string,
  status:string  
}


function AreasTable(props: IProps) {
  const {
    areas,
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
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = areas.map((warehouse: any) => {
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
      // onConfirm: () => handleDeletePermission?.(id),
    });
  };
  const gotoDetails = (id: string) => {
    navigate(`${AppRoutes.AREA_DETAILS}/${id}`);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 const handleEdit=()=>{
  setOpen(true)
 }
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050, overflow: "auto" }}>
        <EnhancedTableToolbar numSelected={3} handleOpen={handleOpen} />
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
                <TableCell>Warehouse</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {areas.map((area:IAreas) => {
                const {
                  id,
                  name,
                  label,
                   warehouse,
                   status
                } = area;
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
                    <TableCell>{warehouse}</TableCell>
                    <TableCell>{status}</TableCell>
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
                            onClick={() => handleEdit()}
                          >
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
     <AreasForm handleClose={handleClose} open={open} />

    </Card>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
  handleOpen:()=>void
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
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          All
        </Typography>
        <Tooltip title="Add" onClick={()=>handleOpen()}>
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

export default AreasTable;
