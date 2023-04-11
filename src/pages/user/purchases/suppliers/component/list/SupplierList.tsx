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
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import NoDataTableRow from "components/table/no-data-table-row";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedSupplier } from "redux/purchase/supplierSelector";
import { setAllSupplierIds } from "redux/purchase/supplierSlice";
import {
  GetAllSupplierData,
  GetAllSupplierRoot,
} from "types/catalog/supplier/getAllSupplierResponse";

import SupplierListItem from "./SupplierListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Name",
  },
  {
    id: crypto.randomUUID(),
    title: "Short name",
  },

  {
    id: crypto.randomUUID(),
    title: "Supplier ID",
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
    title: "Primary Contact",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
];

interface IPaginationData {
  pageSize: number;
  page: number;
}
interface ISupplierList {
  data?: GetAllSupplierRoot;
  total: number;
  paginationData: IPaginationData;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
}
type IChangeEvent = React.ChangeEvent<HTMLInputElement>;
function SupplierList(props: ISupplierList) {
  const { data, total, setCurrentPage, setPageLimit, paginationData } = props;
  const getSelectedSupplierByIdState = useSelector(getSelectedSupplier);
  const dispatch = useDispatch();
  const selectAll = (event: IChangeEvent, checked: boolean) => {
    if (data) {
      dispatch(
        setAllSupplierIds({
          ids: data?.data.map((i: any) => i.id),
          checked,
        }),
      );
    }
  };

  const handleLimitChange = (event: any) => {
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setCurrentPage(newPage);
  };
  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar />

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
                  <CustomTableCell
                    isCheck
                    isHeader
                    isSticky
                    customStyle={{
                      zIndex: 999,
                    }}
                    leftValue={0}
                  >
                    <Checkbox
                      checked={
                        data?.data.length ===
                        getSelectedSupplierByIdState?.length
                      }
                      color="primary"
                      onChange={selectAll}
                    />
                  </CustomTableCell>
                  {tableTitle.map((item) => {
                    const isName = item.title.includes("Name");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isName ? "sticky" : "static",
                          left: isName ? 60 : 0,
                        }}
                        minWt={150}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                  <CustomTableCell isHeader isSticky rightValue={0}>
                    Actions
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((item: GetAllSupplierData) => {
                  return <SupplierListItem key={item.id} item={item} />;
                })}
                {!data?.data.length ? (
                  <NoDataTableRow
                    colSize={4}
                    title="No data found in Supplier"
                  />
                ) : null}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={total}
            page={paginationData.page}
            rowsPerPage={paginationData.pageSize}
            rowsPerPageOptions={[5, 10, 25]}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
          />
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default SupplierList;
