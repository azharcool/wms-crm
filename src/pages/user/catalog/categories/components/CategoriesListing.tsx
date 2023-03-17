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
import { IGetCategoriesResponseRoot } from "types/catalog/catagories/getCategoriesResponse";
import CategoriesItem from "./CategoriesItem";

const tabs = [
  {
    id: crypto.randomUUID(),
    title: "New",
  },
  {
    id: crypto.randomUUID(),
    title: "Pick",
  },
  {
    id: crypto.randomUUID(),
    title: "Close",
  },
];

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Name",
  },

  {
    id: crypto.randomUUID(),
    title: "Position",
  },
  {
    id: crypto.randomUUID(),
    title: "Parent Category",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Last Updated",
  },
  {
    id: crypto.randomUUID(),
    title: "Tags",
  },
];

interface ICategoriesListing {
  data?: IGetCategoriesResponseRoot;
}

function CategoriesListing(props: ICategoriesListing) {
  const { data } = props;

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar tabs={tabs} />

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
                          position: isImage || isName ? "sticky" : "static",
                          left: isImage || isName ? (isName ? 130 : 60) : 0,
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
                {/* <CategoriesItem /> */}
                {data?.data?.map((item) => {
                  return <CategoriesItem item={item} />;
                })}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default CategoriesListing;
