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
import useGetAllLocation from "hooks/querys/warehouse/location/useGetAllLocation";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import AppRoutes from "routes/appRoutes";
import LocationsListItem from "./LocationsListItem";

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
    title: "Bay",
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
    title: "Location type",
  },
  {
    id: crypto.randomUUID(),
    title: "Location Alias",
  },
  {
    id: crypto.randomUUID(),
    title: "Container",
  },
  {
    id: crypto.randomUUID(),
    title: "Available",
  },
  {
    id: crypto.randomUUID(),
    title: "Volumn",
  },
  {
    id: crypto.randomUUID(),
    title: "Used Volumn",
  },
  {
    id: crypto.randomUUID(),
    title: "Dimensions",
  },
  {
    id: crypto.randomUUID(),
    title: "Max Load",
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

function LocationsListing() {
  const [warehousePagination, setWarehousepagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const navigate = useNavigate();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { data: locationResponse } = useGetAllLocation({
    ...warehousePagination,
    warehouseId: getSelectedWarehouse.id,
  });
  const theme = useTheme();

  const {
    warehouse: { warehouseLayout, locationCreate },
  } = AppRoutes;

  const csvData = locationResponse?.data.map((item) => ({
    locationlabel: item.locationLabel || item.locationAlias,
    area: item.areaName,
    zone: item.zoneName,
    aisle: item.aisle,
    bay: "",
    level: "",
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
        csvTitle="Locations"
        handle={(e) => {
          if (e === "create") {
            navigate(`/${warehouseLayout}/${locationCreate}`);
          }
        }}
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
                {locationResponse?.data.map((item) => {
                  return <LocationsListItem key={item.id} item={item} />;
                })}

                {!locationResponse?.data.length ? (
                  <NoDataTableRow
                    colSize={4}
                    title="No data found in Location"
                  />
                ) : null}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default LocationsListing;
