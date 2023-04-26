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
import CurrencyListItem from "./CurrencyListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Currency",
  },
  {
    id: crypto.randomUUID(),
    title: "Rate",
  },
];

function CurrencyList() {
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
                      padding="checkbox"
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
                      const isCurrency = item.title.includes("Currency");

                      return (
                        <CustomHeadTableCell
                          key={item.id}
                          sxProps={{
                            position: isCurrency ? "sticky" : "static",
                            left: isCurrency ? 60 : 0,
                          }}
                        >
                          {item.title}
                        </CustomHeadTableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <CurrencyListItem />
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </Box>
      </PerfectScrollbar>
    </>
  );
}

export default CurrencyList;
