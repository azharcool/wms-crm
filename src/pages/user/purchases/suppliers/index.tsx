import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllWarehouse from "hooks/querys/warehouse/useGetAllWarehouse";
import useWarehouseAction from "hooks/warehouse/useWarehouseAction";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedWarehouse } from "redux/warehouse/warehouseSelector";
import SupplierList from "./component/list/SupplierList";

function Suppliers() {
  const navigate = useNavigate();
  const [warehousePagination, setWarehousepagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { bulkDeleteWarehouseAsync } = useWarehouseAction();
  const { data: warehousePaginationResponse } =
    useGetAllWarehouse(warehousePagination);
  const getSelectedWarehouseIdsState = useSelector(getSelectedWarehouse);
  const ids = getSelectedWarehouseIdsState.toString();
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={!!ids}
          navTitle="PURCHASES"
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
          title="Suppliers"
          onBulkHandle={() => {
            bulkDeleteWarehouseAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <SupplierList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Suppliers;
