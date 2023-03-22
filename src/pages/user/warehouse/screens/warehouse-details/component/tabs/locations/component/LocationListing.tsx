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
import LocationItem from "./LocationItem";

import Locations from "../__mock__/Locations.json";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Location Label",
  },

  {
    id: crypto.randomUUID(),
    title: "Area",
  },

  {
    id: crypto.randomUUID(),
    title: "Zone",
  },
  {
    id: crypto.randomUUID(),
    title: "Aisle",
  },
  {
    id: crypto.randomUUID(),
    title: "Level",
  },
  {
    id: crypto.randomUUID(),
    title: "Bin",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Operation",
  },
  {
    id: crypto.randomUUID(),
    title: "Warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Location Type",
  },
  {
    id: crypto.randomUUID(),
    title: "Location alias",
  },
  {
    id: crypto.randomUUID(),
    title: "Containers",
  },
  {
    id: crypto.randomUUID(),
    title: "Available",
  },
  {
    id: crypto.randomUUID(),
    title: "Volume",
  },
  {
    id: crypto.randomUUID(),
    title: "Used Volume",
  },
  {
    id: crypto.randomUUID(),
    title: "Dimensions",
  },

  {
    id: crypto.randomUUID(),
    title: "Max.Load",
  },
  {
    id: crypto.randomUUID(),
    title: "Used Load",
  },
  {
    id: crypto.randomUUID(),
    title: "Utilization",
  },
];

function LocationListing() {
  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar />

      <Box sx={{ minHeight: 500 }}>
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
                    const isLocationLabel =
                      item.title.includes("LocationLabel");
                    // const isLabel = item.title.includes("Label");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isLocationLabel && "sticky",
                          left: isLocationLabel && "60px",
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
                {Locations?.map((item: any) => {
                  return <LocationItem key={item.id} item={item} />;
                })}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default LocationListing;
