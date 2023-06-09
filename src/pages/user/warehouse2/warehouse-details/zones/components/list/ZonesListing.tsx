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
import { useTheme } from "@mui/material/styles";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import NoDataTableRow from "components/table/no-data-table-row/index";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import useGetAllZone from "hooks/querys/warehouse/zone/useGetAllZone";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
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
  const [warehousePagination, setWarehousepagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { data: zoneResponse } = useGetAllZone({
    ...warehousePagination,
    warehouseId: getSelectedWarehouse.id,
  });
  const theme = useTheme();

  const handle = (status: "create" | "filter") => {
    if (status === "create") {
      handleClose(true);
    }
  };

  const handleClose = (status?: boolean) => {
    const open = status || false;
    setFormOpen(open);
  };

  const csvData = zoneResponse?.data.map((item) => ({
    name: item.name,
    label: item.label,
    warehouse: item.warehouseName,
    area: item.areaName,
    status: item.status,
  }));

  const csvHeaders = tableTitle.map((item) => ({
    label: item.title,
    key: item.title.replace(" ", "").toLowerCase(),
  }));

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
        handle={handle}
        csvData={csvData}
        csvHeader={csvHeaders}
        csvTitle="Zones"
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
                      position: "sticky",
                      zIndex: 999,
                      left: 0,
                    }}
                  >
                    <Checkbox
                      checked={false}
                      sx={{
                        color: theme.palette.common.white,
                      }}
                    />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isName = item.title.includes("Name");
                    const isLabel = item.title.includes("Label");
                    const props = {
                      position: "sticky",
                      left: "60px",
                    };
                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={isName ? props : {}}
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
                {zoneResponse?.data.map((item) => {
                  return <ZonesListItem key={item.id} item={item} />;
                })}

                {!zoneResponse?.data.length ? (
                  <NoDataTableRow colSize={4} title="No data found in Zone" />
                ) : null}
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
