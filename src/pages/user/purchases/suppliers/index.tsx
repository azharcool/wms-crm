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
  const [suppliersPagination, setSupplierspagination] = useState({
    pageSize: 10,
    page: 1,
  });

  const getSelectedSupplierIdsState = useSelector(getSelectedSupplier);

  const { bulkDeleteSupplierAsync } = useSupplierAction();

  const { data: supplierPaginationResponse, refetch } =
    useGetAllSupplierWithPagination(suppliersPagination);
  const ids = getSelectedSupplierIdsState.toString();

  const handlePageChange = (pageNo: number) => {
    setSupplierspagination((prevState) => ({ ...prevState, page: pageNo }));
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setSupplierspagination((prevState) => ({ ...prevState, pageSize: limit }));
    setTimeout(() => {
      refetch();
    }, 500);
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
            paginationData={suppliersPagination}
            setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
            setPageLimit={(limit: number) => handlePageLimitChange(limit)}
            total={supplierPaginationResponse?.totalDocs || 0}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Suppliers;
