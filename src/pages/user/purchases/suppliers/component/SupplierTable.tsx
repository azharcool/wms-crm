import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@mui/icons-material/Create";
import {
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
} from "@mui/material";
import { useAlert } from "components/alert";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useNavigate } from "react-router-dom";
import { usePermissionActions } from "redux/permissions/permissions";
import palette from "theme/palette";

interface IProps {
  suppliers: ISuppliers[];
  total: number;
  setCurrentPage?: (page: number) => void;
  setPageLimit?: (limit: number) => void;
  openModal?: (data: any) => void;
  handleDeletePermission?: (id: number) => void;
}

const useStyles = makeStyles({
  sticky: {
    position: "sticky",
    left: 0,
  },
});

interface ISuppliers {
  id: string;
  name: string;
  shortName: string;
  supplierId: string;
  city: string;
  email: string;
  phone: number;
  primaryContact: string;
  status: string;
}

function SupplierTable(props: IProps) {
  const {
    suppliers,
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
      newSelectedCustomerIds = suppliers.map((warehouse: any) => {
        return warehouse.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedPermissionIds(newSelectedCustomerIds);
  };
  const classes = useStyles();
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
    navigate(`${AppRoutes.PURCHASE.All_ORDER_DETAILS}/${id}`);
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
          <TableContainer style={{ minWidth: 1050, overflow: "auto" }}>
            <Table sx={{}}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.sticky} padding="checkbox">
                    <Checkbox
                      // checked={selectedPermissionIds.length === total}
                      checked={false}
                      className={classes.sticky}
                      color="primary"
                      indeterminate={
                        selectedPermissionIds.length > 0 &&
                        selectedPermissionIds.length < total
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell className={classes.sticky}>Name</TableCell>
                  <TableCell>SHORT NAME</TableCell>
                  <TableCell>SUPPLIER ID</TableCell>
                  <TableCell>CITY</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>PHONE</TableCell>
                  <TableCell>PRIMARY CONTACT</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {suppliers.map((supplier: ISuppliers) => {
                  const {
                    id,
                    name,
                    shortName,
                    supplierId,
                    city,
                    email,
                    phone,
                    primaryContact,
                    status,
                  } = supplier;
                  return (
                    <TableRow
                      key={id}
                      selected={selectedPermissionIds.indexOf(id) !== -1}
                    >
                      <TableCell
                        padding="checkbox"
                        sx={{
                          position: "sticky",
                          left: 0,
                          // background: "white",
                        }}
                      >
                        <Checkbox
                          checked={selectedPermissionIds.indexOf(id) !== -1}
                          sx={{
                            position: "sticky",
                            left: 0,
                            // background: "white",
                          }}
                          value="true"
                          onChange={(event) => {
                            return handleSelectOne(event, id);
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          cursor: "pointer",
                          position: "sticky",
                          left: 0,
                          // background: "white",
                        }}
                        onClick={() => gotoDetails(id)}
                      >
                        {name}
                      </TableCell>
                      <TableCell>{shortName}</TableCell>
                      <TableCell>{supplierId}</TableCell>
                      <TableCell>{city}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{phone}</TableCell>
                      <TableCell>{primaryContact}</TableCell>
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

export default SupplierTable;
