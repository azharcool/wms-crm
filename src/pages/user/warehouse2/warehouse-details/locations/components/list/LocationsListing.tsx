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
import useGetAllLocation from "hooks/querys/warehouse/location/useGetAllLocation";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
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
  const {
    warehouse: { warehouseLayout, locationCreate },
  } = AppRoutes;

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
        handle={(e) => {
          if (e === "create") {
            navigate(`/${warehouseLayout}/${locationCreate}`);
          }
        }}
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
                    isSticky
                    customStyle={{
                      zIndex: 999,
                    }}
                    leftValue={0}
                  >
                    <Checkbox checked={false} />
                  </CustomTableCell>
                  {tableTitle.map((item) => {
                    const isName = item.title.includes("Name");
                    const isLabel = item.title.includes("Label");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isName && "sticky",
                          left: isName && "60px",
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
                {locationResponse?.data.map((item) => {
                  return <LocationsListItem key={item.id} item={item} />;
                })}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default LocationsListing;
