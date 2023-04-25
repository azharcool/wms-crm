import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetAllVariantResponseRoot } from "types/catalog/variants/getAllVariantResponse";
import VariantItem from "./VariantItem";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import NoDataTableRow from "components/table/no-data-table-row";

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
  variantPagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}

function VariantListing(props: IVariantListing) {
  const { data, handlePagination, variantPagination } = props;

  const csvData = data?.data.map((item) => ({
    image: "",
    variant: item.variantName,
    pieces: "",
    uom: "",
    barcode: item.barcode,
    listedon: item.updatedOn,
    available: "",
    unavailable: "",
    onhand: "",
    allocated: "",
    awaiting: "",
    intransfer: "",
    supplyprice: item.supplyPrice,
    retailprice: item.retailPrice,
    mrp: item.mrp,
    category: "",
    brand: "",
    company: "",
    tags: "",
    lastupdated: item.updatedOn,
  }));

  const csvHeaders = tableTitle.map((item) => ({
    label: item.title,
    key: item.title.replace(" ", "").toLowerCase(),
  }));

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
        csvData={csvData}
        csvHeader={csvHeaders}
        csvTitle="Variants"
        moreList={[
          {
            id: crypto.randomUUID(),
            title: "Density",
            onClick: () => {},
          },
        ]}
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
                      checked={false}
                      color="primary"
                      onChange={() => {}}
                    />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");
                    const isName = item.title.includes("Variant");
                    return (
                      <CustomHeadTableCell
                        key={item.id} 
                        sxProps={{
                          minWidth: isImage ? 50 : 150,
                          position: isImage || isName ? "sticky" : "static",
                          left: isImage || isName ? (isName ? 130 : 60) : 0,
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
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    Actions
                  </CustomHeadTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data?.map((item) => {
                  return <VariantItem key={item.id} item={item} />;
                })}
                {!data?.data.length ? (
                  <NoDataTableRow
                    colSize={4}
                    title="No data found in Variant"
                  />
                ) : null}
              </TableBody>
            </Table>
          </PerfectScrollbar>
          <TablePagination
            // pagination
            component="div"
            count={data?.totalDocs || 0}
            page={variantPagination.page}
            rowsPerPage={variantPagination.pageSize}
            rowsPerPageOptions={[5, 10, 25]}
            onPageChange={(_, pageNo) => {
              handlePagination("page", pageNo);
            }}
            onRowsPerPageChange={(e) => {
              handlePagination("pageSize", Number(e.target.value));
            }}
          />
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default VariantListing;
