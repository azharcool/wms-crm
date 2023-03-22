import React, { useState } from "react";
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
import AddZone from "./AddZone";
import ZoneItem from "./ZoneItem";

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
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
];

function ZoneListing() {
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setOpen(true);
  };
  return (
    <>
      <EnhancedTableToolbar title="Add Zone" handleClick={() => handleAdd()} />
      <PerfectScrollbar>
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
                            // position: isLabel || isName ? "sticky" : "static",
                            // left: isLabel || isName ? (isName ? 60 : 167) : 0,
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
                  <ZoneItem />
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </Box>
        <AddZone handleClose={() => setOpen(false)} open={open} />
      </PerfectScrollbar>
    </>
  );
}

export default ZoneListing;
