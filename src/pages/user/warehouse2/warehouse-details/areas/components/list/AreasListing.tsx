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
import TableMessage from "components/table-message";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import NoDataTableRow from "components/table/no-data-table-row";
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
