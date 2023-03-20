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
import { IGetAllVariantResponseRoot } from "types/catalog/variants/getAllVariantResponse";
import VariantItem from "./VariantItem";

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
    title: "Variant",
  },

  {
    id: crypto.randomUUID(),
    title: "Pieces",
  },
  {
    id: crypto.randomUUID(),
    title: "UoM",
  },
  {
    id: crypto.randomUUID(),
    title: "Barcode",
  },

  {
    id: crypto.randomUUID(),
    title: "Listed On",
  },
  {
    id: crypto.randomUUID(),
    title: "Available",
  },
  {
    id: crypto.randomUUID(),
    title: "Unavailable",
  },
  {
    id: crypto.randomUUID(),
    title: "On hand",
  },
  {
    id: crypto.randomUUID(),
    title: "Allocated",
  },
  {
    id: crypto.randomUUID(),
    title: "Awaiting",
  },
  {
    id: crypto.randomUUID(),
    title: "In transfer",
  },
  {
    id: crypto.randomUUID(),
    title: "Supply price",
  },
  {
    id: crypto.randomUUID(),
    title: "Retail price",
  },
  {
    id: crypto.randomUUID(),
    title: "M.R.P",
  },
  {
    id: crypto.randomUUID(),
    title: "Category",
  },
  {
    id: crypto.randomUUID(),
    title: "Brand",
  },
  {
    id: crypto.randomUUID(),
    title: "Company",
  },
  {
    id: crypto.randomUUID(),
    title: "Tags",
  },
  {
    id: crypto.randomUUID(),
    title: "Last Updated",
  },
];

interface IVariantListing {
  data?: IGetAllVariantResponseRoot;
}

function VariantListing(props: IVariantListing) {
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
                  <CustomTableCell isCheck isHeader isSticky leftValue={0}>
                    <Checkbox
                      checked={false}
                      color="primary"
                      onChange={() => {}}
                    />
                  </CustomTableCell>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");
                    const isName = item.title.includes("Variant");
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
                {data?.data?.map((item) => {
                  return <VariantItem key={item.id} item={item} />;
                })}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default VariantListing;
