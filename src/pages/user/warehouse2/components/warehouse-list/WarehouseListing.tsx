import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import NoDataTableRow from "components/table/no-data-table-row/index";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedWarehouse } from "redux/warehouse/warehouseSelector";
import { setAllWarehouseIds } from "redux/warehouse/warehouseSlice";
import {
  IGetWarehouseResponseData,
  IGetWarehouseResponseRoot,
} from "types/warehouse/getWarehouseResponse";
import WarehouseItem from "./WarehouseItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Name",
  },
  {
    id: crypto.randomUUID(),
    title: "Label",
  },

  {
    id: crypto.randomUUID(),
    title: "City",
  },
  {
    id: crypto.randomUUID(),
    title: "Email",
  },
  {
    id: crypto.randomUUID(),
    title: "Phone",
  },
  {
    id: crypto.randomUUID(),
    title: "Primary",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
];

interface IWarehouselisting {
  data?: IGetWarehouseResponseRoot;
  warehousePagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}
type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

function WarehouseListing(props: IWarehouselisting) {
  const { data, warehousePagination, handlePagination } = props;

  const getSelectedWarehouseByIdState = useSelector(getSelectedWarehouse);
  const dispatch = useDispatch();
  const theme = useTheme();

  const selectAll = (event: IChangeEvent, checked: boolean) => {
    if (data) {
      dispatch(
        setAllWarehouseIds({
          ids: data?.data.map((i: any) => i.id),
          checked,
        }),
      );
    }
  };

  const csvData = data?.data.map((item) => ({
    name: item.warehouseName,
    label: item.label,
    city: item.city,
    email: item.email,
    phone: item.phoneNumber,
    primary: item.primaryPhoneNumber,
    status: item.status,
  }));

  const csvHeaders = tableTitle.map((item) => ({
    label: item.title,
    key: item.title.replace(" ", "").toLowerCase(),
  }));

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
        csvData={csvData}
        csvHeader={csvHeaders}
        csvTitle="Warehouses"
        moreList={[
          {
            id: crypto.randomUUID(),
            title: "Density",
            onClick: () => {},
          },
        ]}
      />

      <Box sx={{ minWidth: 1050, minHeight: 500 }}>
        <TableContainer component={Paper}>
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
              }}
            >
              <TableHead>
                <TableRow>
                  <CustomHeadTableCell
                    padding="checkbox"
                    sxProps={{
                      zIndex: 999,
                      position: "sticky",
                      left: 0,
                      minWidth: "60px",
                    }}
                  >
                    <Checkbox
                      checked={
                        data?.data.length ===
                        getSelectedWarehouseByIdState?.length
                      }
                      color="primary"
                      sx={{
                        color: theme.palette.common.white,
                      }}
                      onChange={selectAll}
                    />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isName = item.title.includes("Name");
                    const isLabel = item.title.includes("Label");

                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          position: isName ? "sticky" : "static",
                          left: isName ? 60 : 0,
                        }}
                      >
                        {item.title}
                      </CustomHeadTableCell>
                    );
                  })}
                  <CustomHeadTableCell
                    sxProps={{
                      position: "sticky",
                      right: 0,
                    }}
                  >
                    Actions
                  </CustomHeadTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((item: IGetWarehouseResponseData) => {
                  return <WarehouseItem key={item.id} item={item} />;
                })}
                {!data?.data.length ? (
                  <NoDataTableRow
                    colSize={4}
                    title="No data found in Warehouse"
                  />
                ) : null}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={data?.totalDocs || 0}
            page={warehousePagination.page}
            rowsPerPage={warehousePagination.pageSize}
            rowsPerPageOptions={[5, 10, 25]}
            onPageChange={(_, pageNo) => {
              handlePagination("page", pageNo);
            }}
            onRowsPerPageChange={(e) => {
              handlePagination("pageSize", Number(e.target.value));
            }}
          />
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default WarehouseListing;
