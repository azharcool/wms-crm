import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import useGetAllPaginationProductCondition from "hooks/querys/setting/product-condition/useGetAllPaginationProductCondition";
import { useState } from "react";
import ManageProductCondition from "./components/ManageProductCondition";
import ProductConditionList from "./components/list/ProductConditionList";

function ProductCondition() {
  const [manageOpen, setManageOpen] = useState(false);
  const [productconditionPagination, setProductconditionPagination] = useState({
    pageSize: 10,
    page: 0,
  });

  const { data: productconditionResponse, refetch } =
    useGetAllPaginationProductCondition(productconditionPagination);

  const handleManage = () => {
    setManageOpen((s) => !s);
  };
  const handlePagination = (name: string, value: number) => {
    setProductconditionPagination((s) => ({
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
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          navTitle="CONFIGURATION"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleManage();
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
          title="Product Condition"
        />
        <Box sx={{ mt: 3 }}>
          <ProductConditionList
            data={productconditionResponse}
            handlePagination={handlePagination}
            productconditionPagination={productconditionPagination}
          />
        </Box>
      </CardContent>

      {manageOpen ? (
        <ManageProductCondition handleClose={handleManage} open={manageOpen} />
      ) : null}
    </Container>
  );
}

export default ProductCondition;
