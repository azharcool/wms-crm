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
import { useTheme } from "@mui/material/styles";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import TaxesListItem from "./TaxesListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Name",
  },
  {
    id: crypto.randomUUID(),
    title: "Tax type",
  },
  {
    id: crypto.randomUUID(),
    title: "Value",
  },
  {
    id: crypto.randomUUID(),
    title: "Created Date",
  },
  {
    id: crypto.randomUUID(),
    title: "Last Date",
  },
];

function TaxesList() {
  const theme = useTheme();
  return (
    <>
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
                    <CustomHeadTableCell
                      sxProps={{
                        zIndex: 999,
                        position: "sticky",
                        left: 0,
                        minWidth: "60px",
                      }}
                    >
                      <Checkbox
                        color="primary"
                        sx={{
                          color: theme.palette.common.white,
                        }}
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
                  <TaxesListItem />
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </Box>
      </PerfectScrollbar>
    </>
  );
}

export default TaxesList;
