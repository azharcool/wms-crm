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
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Warehouse from "__mock__/warhouses.json";
import ZonesCreate from "../ZonesCreate";
import ZonesListItem from "./ZonesListItem";

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
    title: "Warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Area",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
];

function ZonesListing() {
  const [formOpen, setFormOpen] = useState(false);

  const handle = (status: "create" | "filter") => {
    if (status === "create") {
      handleClose(true);
    }
  };

  const handleClose = (status?: boolean) => {
    const open = status || false;
    setFormOpen(open);
  };

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar handle={handle} />

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
                    <Checkbox checked={false} />
                  </CustomTableCell>
                  {tableTitle.map((item) => {
                    const isName = item.title.includes("Name");
                    const isLabel = item.title.includes("Label");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isName && "sticky",
                          left: isName && "60px",
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
                {Warehouse?.map((item) => {
                  return <ZonesListItem key={item.id} item={item} />;
                })}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
      {formOpen ? (
        <ZonesCreate handleClose={() => handleClose()} open={formOpen} />
      ) : null}
    </PerfectScrollbar>
  );
}

export default ZonesListing;
