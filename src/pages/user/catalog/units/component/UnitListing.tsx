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
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import NoDataTableRow from "components/table/no-data-table-row";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import useGetAllPaginationUnit from "hooks/querys/catalog/unit/useGetAllPaginationUnit";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import theme from "theme";
import UnitItem from "./UnitItem";

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
    title: "Unit number",
  },
  {
    id: crypto.randomUUID(),
    title: "Available",
  },
  {
    id: crypto.randomUUID(),
    title: "Quantity",
  },
  {
    id: crypto.randomUUID(),
    title: "UoM",
  },
  {
    id: crypto.randomUUID(),
    title: "Company",
  },
  {
    id: crypto.randomUUID(),
    title: "Reserved for",
  },
  {
    id: crypto.randomUUID(),
    title: "Serial number",
  },
  {
    id: crypto.randomUUID(),
    title: "Batch number",
  },
  {
    id: crypto.randomUUID(),
    title: "Condition",
  },
  {
    id: crypto.randomUUID(),
    title: "Container",
  },
  {
    id: crypto.randomUUID(),
    title: "Expiry date",
  },
  {
    id: crypto.randomUUID(),
    title: "Warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Location",
  },
  {
    id: crypto.randomUUID(),
    title: "Company",
  },
  {
    id: crypto.randomUUID(),
    title: "Created date",
  },
  {
    id: crypto.randomUUID(),
    title: "Last updated",
  },
];

function UnitListing() {
  const { data: unitResponse } = useGetAllPaginationUnit({
    pageSize: 10,
    page: 1,
  });

  const csvData = unitResponse?.data.map((item) => ({
    image: "",
    variant: item.variantName,
    unitnumber: item.unitNumber,
    available: item.available,
    quantity: item.newQuantity,
    uom: item.updatedOn,
    reservedfor: "",
    serialnumber: item.serialNo,
    batchnumber: item.batchNumber,
    condition: item.conditionCodeId,
    container: item.containerNumber,
    expirydate: item.expiryDate,
    warehouse: item.warehouseName,
    location: item.locationName,
    company: item.companyId,
    createddate: item.createdOn,
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
        csvTitle="Units"
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
                      sx={{
                        color: theme.palette.common.white,
                      }}
                      onChange={() => {}}
                    />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");
                    const isVariant = item.title.includes("Variant");
                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          minWidth: isImage ? 50 : 200,
                          position: isImage || isVariant ? "sticky" : "static",
                          left:
                            isImage || isVariant ? (isVariant ? 125 : 60) : 0,
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
                    }}
                  >
                    Actions
                  </CustomHeadTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {unitResponse?.data.map((item) => {
                  return <UnitItem key={item.id} item={item} />;
                })}
                {!unitResponse?.data.length ? (
                  <NoDataTableRow colSize={4} title="No data found in unit" />
                ) : null}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default UnitListing;
