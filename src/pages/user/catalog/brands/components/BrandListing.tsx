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
import { IGetBrandResponseRoot } from "types/catalog/brands/getBrandResponse";
import BrandItem from "./BrandItem";

// const tabs = [
//   {
//     id: crypto.randomUUID(),
//     title: "New",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "Pick",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "Close",
//   },
// ];

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },
  {
    id: crypto.randomUUID(),
    title: "Name",
  },
];

interface IBrandListing {
  data?: IGetBrandResponseRoot;
}

function BrandListing(props: IBrandListing) {
  const { data } = props;

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
      // tabs={tabs}
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
                  <CustomTableCell
                    isCheck
                    isHeader
                    // isSticky
                    // customStyle={{
                    //   zIndex: 999,
                    // }}
                    // leftValue={0}
                  >
                    <Checkbox
                      checked={false}
                      color="primary"
                      onChange={() => {}}
                    />
                  </CustomTableCell>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");
                    const isName = item.title.includes("Name");
                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          minWidth: isImage ? 50 : 150,
                          // position: isImage || isName ? "sticky" : "static",
                          // left: isImage || isName ? (isName ? 130 : 60) : 0,
                        }}
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
                {data?.data.map((item) => {
                  return <BrandItem item={item} />;
                })}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default BrandListing;
