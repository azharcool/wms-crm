import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
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
}
type IChangeEvent = React.ChangeEvent<HTMLInputElement>;
function SupplierList(props: ISupplierList) {
  const { data } = props;

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
                    <Checkbox color="primary" />
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
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default SupplierList;
