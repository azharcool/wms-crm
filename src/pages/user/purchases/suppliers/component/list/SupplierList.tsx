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
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
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

interface ISupplierList {
  data?: GetAllSupplierRoot;
  suppliersPagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}
type IChangeEvent = React.ChangeEvent<HTMLInputElement>;
function SupplierList(props: ISupplierList) {
  const { data, suppliersPagination, handlePagination } = props;
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

  const csvData = data?.data.map((item) => ({
    name: item.companyName,
    shortname: item.shortName,
    supplierid: item.id,
    city: item.city,
    email: item.email,
    phone: item.phoneNumber,
    primarycontact: item.primaryPhone,
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
        csvTitle="Suppliers"
        moreList={[
          {
            id: crypto.randomUUID(),
            title: "Import",
            onClick: () => {},
          },
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
                        getSelectedSupplierByIdState?.length
                      }
                      color="primary"
                      onChange={selectAll}
                    />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isName = item.title.includes("Name");

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
            count={data?.totalDocs || 0}
            page={suppliersPagination.page}
            rowsPerPage={suppliersPagination.pageSize}
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

export default SupplierList;
