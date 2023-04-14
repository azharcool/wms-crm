import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
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
                <CustomTableCell
                  isCheck
                  isHeader
                  isSticky
                  customStyle={{
                    zIndex: 999,
                  }}
                  leftValue={0}
                  minWt={50}
                >
                  <Checkbox
                    // checked={}
                    color="primary"
                    // onChange={}
                  />
                </CustomTableCell>
                {tableTitle.map((item) => {
                  const isSA = item.title.includes("ID #");

                  return (
                    <CustomTableCell
                      key={item.id}
                      isHeader
                      customStyle={{
                        position: isSA ? "sticky" : "static",
                        left: isSA ? 50 : 0,
                      }}
                      minWt={170}
                    >
                      {item.title}
                    </CustomTableCell>
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
