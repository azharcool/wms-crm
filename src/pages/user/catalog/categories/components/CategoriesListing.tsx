import FilterListIcon from "@mui/icons-material/FilterList";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  Checkbox,
  IconButton,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
/// imports for mui actions button
import Menu, { MenuProps } from "@mui/material/Menu";
import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useAlert } from "components/alert";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useNavigate } from "react-router-dom";
import { usePermissionActions } from "redux/permissions/permissions";
// import { IPermission } from "../query/useFetchPermissions";

interface IProps {
  categories: ICategories[];
  total: number;
  setCurrentPage?: (page: number) => void;
  setPageLimit?: (limit: number) => void;
  openModal?: (data: any) => void;
  handleDeleteWarehouse: (id: string) => void;
}

interface ICategories {
  id: string;
  name: string;
  label: string;
  city: string;
  email: string;
  phone: number;
  primaryContact: string;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    elevation={0}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 125,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      // "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "0px 0px 5px 1px rgb(82 63 105 / 8%)",
    "& .MuiMenu-list": {
      padding: "8px",
    },
    "& .MuiMenuItem-root": {
      fontSize: "13px",
      fontWeight: "500",
      "& .MuiSvgIcon-root": {
        fontSize: 12,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
      "&:hover": {
        backgroundColor: "#f1faff",
        color: "#009ef7",
      },
    },
  },
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "green",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function CategoriesListing(props: IProps) {
  const {
    categories,
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
  const [open, setOpen] = useState(false);
  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      newSelectedCustomerIds = categories.map((warehouse: any) => {
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

  const handleEdit = (item: ICategories) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("clicked");
    setAnchorEl(event.currentTarget);
  };
  const handleClosed = () => {
    setAnchorEl(null);
  };

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
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Parent category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last updated</TableCell>
                <TableCell>Tags</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((warehouse: ICategories) => {
                const { id, name, label, city, email, phone, primaryContact } =
                  warehouse;
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
                      Image
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell> </TableCell>
                    <TableCell>
                      <Box>
                        <AntSwitch
                          defaultChecked
                          inputProps={{ "aria-label": "ant design" }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell>Mar 9, 2023 17:39:40</TableCell>

                    <TableCell> </TableCell>
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
      {/* <WarehouseForm handleClose={handleClose} isEdit={false} open={open} /> */}
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
        component="div"
        id="tableTitle"
        sx={{ flex: "1 1 100%" }}
        variant="h6"
      >
        All
      </Typography>
      <Box sx={{ maxWidth: 300, marginLeft: "1.5rem" }}>
        <TextField
          fullWidth
          InputProps={{
            sx: {
              borderRadius: 5,
              "& input": {
                padding: "8px 10px",
                paddingLeft: "16px",
                fontSize: "0.9rem",
              },
            },
            endAdornment: (
              <InputAdornment position="end">
                <SvgIcon color="action" fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          variant="outlined"
        />
      </Box>
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

export default CategoriesListing;
