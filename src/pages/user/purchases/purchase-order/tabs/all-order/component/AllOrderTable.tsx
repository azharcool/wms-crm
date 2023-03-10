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
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useAlert } from "components/alert";
import { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import PerfectScrollbar from "react-perfect-scrollbar";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import MoreMenu from "components/common/MoreMenu";

interface IProps {
    allOrders: IAllOrders[];
  total: number;
  setCurrentPage?: (page: number) => void;
  setPageLimit?: (limit: number) => void;
  openModal?: (data: any) => void;
  handleDeletePermission: (id: number) => void;
}

const useStyles= makeStyles({
  sticky:{
    position:"sticky", left:0, background:"#f4f4f4"
  }
})

interface IAllOrders {
  id: string;
  po:string,
  suppliers:string,
  status:string,
  products:string,
  total:string,
  received:string,
  receiving:string,
  expectedDate:string,
  createdDate:string,
  lastUpdated:string,
  suppRefId:string,
  tags:string

}

function AllOrderTable(props: IProps) {
  const {
    allOrders,
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
      newSelectedCustomerIds = allOrders.map((warehouse: any) => {
        return warehouse.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedPermissionIds(newSelectedCustomerIds);
  };
  const classes = useStyles()
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
    navigate(`${AppRoutes.All_ORDER_DETAILS}/${id}`);
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
        <Box sx={{ minWidth: 1050, overflow: "hidden" }}>
          <TableContainer style={{ minWidth: 1050, overflow:'auto'}}>
          <Table sx={{}}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" className={classes.sticky}>
                  <Checkbox
                    // checked={selectedPermissionIds.length === total}
                    className={classes.sticky}
                    checked={false}
                    color="primary"
                    indeterminate={
                      selectedPermissionIds.length > 0 &&
                      selectedPermissionIds.length < total
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell className={classes.sticky}>PO #</TableCell>
                <TableCell>SUPPLIER</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>PRODUCTS</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell>RECEIVED/ORDERED</TableCell>
                <TableCell>RECEIVING WAREHOUSE</TableCell>
                <TableCell>EXPECTED DATE</TableCell>
                <TableCell>CREATED DATE</TableCell>
                <TableCell>LAST UPDATED</TableCell>
                <TableCell>SUPPLIER REF ID</TableCell>
                <TableCell>TAGS</TableCell>
                <TableCell>NOTES</TableCell>
                <TableCell>ACTION</TableCell>             
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((order: IAllOrders) => {
                const {
                  id,
                  po,
                  suppliers,
                  status,
                  products,
                  total,
                  received,
                  receiving,
                  expectedDate,
                  createdDate,
                  lastUpdated,
                  suppRefId,
                  tags
                } = order;
                return (
                  <TableRow
                    key={id}
                    selected={selectedPermissionIds.indexOf(id) !== -1}
                  >
                    <TableCell padding="checkbox"  sx={{ position:"sticky", left:0, background:'white'}}>
                      <Checkbox
                      sx={{ position:"sticky", left:0, background:'white'}}
                        checked={selectedPermissionIds.indexOf(id) !== -1}
                        value="true"
                        onChange={(event) => {
                          return handleSelectOne(event, id);
                        }}
                      />
                    </TableCell>
                    <TableCell
                    scope="row"
                    component="th"
                      sx={{ cursor: "pointer", position:"sticky", left:0, background:'white'}}
                      onClick={() => gotoDetails(id)}
                    >
                      {po}
                    </TableCell>
                    <TableCell>{suppliers}</TableCell>
                    <TableCell>{status}</TableCell>
                    <TableCell>{products}</TableCell>
                    <TableCell>{total}</TableCell>
                    <TableCell>{received}</TableCell>
                    <TableCell>{receiving}</TableCell>
                    <TableCell>{expectedDate}</TableCell>
                    <TableCell>{createdDate}</TableCell>
                    <TableCell>{lastUpdated}</TableCell>
                    <TableCell>{suppRefId}</TableCell>
                    <TableCell>{tags}</TableCell>
                    <TableCell>notes</TableCell>
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
            </TableBody>
          </Table>
          </TableContainer>
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

export default AllOrderTable;
