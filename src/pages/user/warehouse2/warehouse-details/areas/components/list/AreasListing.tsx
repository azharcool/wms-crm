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
import NoDataTableRow from "components/table/no-data-table-row";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import useGetAllWarehouseArea from "hooks/querys/warehouse/area/useGetAllWarehouseArea";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import AreasCreate from "../AreasCreate";
import AreaListItem from "./AreasListItem";

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
    title: "Status",
  },
];

function AreasListing() {
  const [formOpen, setFormOpen] = useState(false);

  const [warehousePagination, setWarehousepagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { data: warehousePaginationResponse } = useGetAllWarehouseArea({
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

  const csvData = warehousePaginationResponse?.data.map((item) => ({
    name: item.name,
    label: item.label,
    warehouse: item.warehouseName,
    status: item.status,
  }));

  const csvHeaders = tableTitle.map((item) => ({
    label: item.title,
    key: item.title.replace(" ", "").toLowerCase(),
  }));

  return (
    <>
      <PerfectScrollbar>
        <EnhancedTableToolbar
          handle={handle}
          csvData={csvData}
          csvHeader={csvHeaders}
          csvTitle="Areas"
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
                  {warehousePaginationResponse?.data.map((item) => {
                    return <AreaListItem key={item.id} item={item} />;
                  })}

                  {!warehousePaginationResponse?.data.length ? (
                    <NoDataTableRow colSize={4} title="No data found in Area" />
                  ) : null}
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </Box>
      </PerfectScrollbar>
      {formOpen ? (
        <AreasCreate handleClose={() => handleClose()} open={formOpen} />
      ) : null}
    </>
  );
}

export default AreasListing;
