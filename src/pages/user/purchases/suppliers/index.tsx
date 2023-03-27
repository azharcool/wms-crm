import FilterListIcon from "@mui/icons-material/FilterList";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import React from "react";
import { useNavigate } from "react-router-dom";
import SupplierTable from "./component/SupplierTable";
import suppliers from "./__mock__/supplier.json";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Suppliers() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const navigation = useNavigate();
  const handleOpen = () => {
    navigation(AppRoutes.PURCHASE.ADD_PURCHASE_ORDER);
  };
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Card>
            <CardContent sx={{ paddingTop: 0 }}>
              <TableToolbar
                isAdd
                buttonText="New"
                handleClick={handleOpen}
                title="Suppliers"
              />
              <EnhancedTableToolbar />

              <Box sx={{ mt: 3 }}>
                <SupplierTable suppliers={suppliers} total={0} />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Suppliers;

function EnhancedTableToolbar() {
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
