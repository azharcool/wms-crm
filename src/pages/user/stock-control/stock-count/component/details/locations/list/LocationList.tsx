import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import LocationListItem from "./LocationListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Location",
  },

  {
    id: crypto.randomUUID(),
    title: "Location type",
  },

  {
    id: crypto.randomUUID(),
    title: "Area",
  },
  {
    id: crypto.randomUUID(),
    title: "Zone",
  },
];

function LocationList() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, minHeight: 500 }}>
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
                  <Checkbox checked={false} color="primary" />
                </CustomHeadTableCell>
                {tableTitle.map((item) => {
                  const isSA = item.title.includes("ID #");

                  return (
                    <CustomHeadTableCell
                      key={item.id}
                      sxProps={{
                        position: isSA ? "sticky" : "static",
                        left: isSA ? 60 : 0,
                      }}
                    >
                      {item.title}
                    </CustomHeadTableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <LocationListItem item={undefined} />
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </Box>
    </PerfectScrollbar>
  );
}

export default LocationList;
