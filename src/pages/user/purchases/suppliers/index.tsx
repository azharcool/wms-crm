import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useSupplierAction from "hooks/actions/catalog/supplier/useSupplierAction";
import useGetAllSupplierWithPagination from "hooks/querys/catalog/supplier/useGetAllSupplierWithPagination";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedSupplier } from "redux/purchase/supplierSelector";
import SupplierList from "./component/list/SupplierList";

function Suppliers() {
  const navigate = useNavigate();
  const [suppliersPagination, setSuppliersPagination] = useState({
    pageSize: 10,
    page: 0,
  });

  const getSelectedSupplierIdsState = useSelector(getSelectedSupplier);

  const { bulkDeleteSupplierAsync } = useSupplierAction();

  const { data: supplierPaginationResponse, refetch } =
    useGetAllSupplierWithPagination(suppliersPagination);
  const ids = getSelectedSupplierIdsState.toString();

  const handlePagination = (name: string, value: number) => {
    setSuppliersPagination((s) => ({
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
          navTitle="PURCHASES"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate(
                  `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.create}`,
                );
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
            bulkDeleteSupplierAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <SupplierList
            data={supplierPaginationResponse}
            handlePagination={handlePagination}
            suppliersPagination={suppliersPagination}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Suppliers;
