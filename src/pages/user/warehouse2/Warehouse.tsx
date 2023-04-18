import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useWarehouseAction from "hooks/actions/warehouse/useWarehouseAction";
import useGetAllWarehouse from "hooks/querys/warehouse/useGetAllWarehouse";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedWarehouse } from "redux/warehouse/warehouseSelector";
import WarehouseListing from "./components/warehouse-list/WarehouseListing";

function Warehouse() {
  const [warehousePagination, setWarehousepagination] = useState({
    pageSize: 10,
    page: 0,
  });

  const navigate = useNavigate();
  const { bulkDeleteWarehouseAsync } = useWarehouseAction();
  const { data: warehousePaginationResponse, refetch } =
    useGetAllWarehouse(warehousePagination);
  const getSelectedWarehouseIdsState = useSelector(getSelectedWarehouse);

  const ids = getSelectedWarehouseIdsState.toString();

  const handlePagination = (name: string, value: number) => {
    setWarehousepagination((s) => ({
      ...s,
      [name]: value,
      ...(name === "pageSize" && {
        page: 0,
      }),
    }));

    setTimeout(() => {
      refetch();
    });
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={!!ids}
          navTitle="Warehouses"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate("/warehouse/create");
              },
              icon: (
                <AddCircleIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
          ]}
          title="Warehouses"
          onBulkHandle={() => {
            bulkDeleteWarehouseAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <WarehouseListing
            data={warehousePaginationResponse}
            handlePagination={handlePagination}
            warehousePagination={warehousePagination}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Warehouse;
