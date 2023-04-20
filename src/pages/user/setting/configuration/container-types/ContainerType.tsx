import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import useGetAllPaginationProductCondition from "hooks/querys/setting/product-condition/useGetAllPaginationProductCondition";
import { useState } from "react";
import ContainerTypeCreate from "./components/ContainerTypeCreate";
import ContainerTypeList from "./components/list/ContainerTypeList";

function ContainerType() {
  const [openForm, setOpenForm] = useState(false);
  // const [manageOpen, setManageOpen] = useState(false);
  const [productconditionPagination, setProductconditionPagination] = useState({
    pageSize: 10,
    page: 0,
  });

  const { data: productconditionResponse, refetch } =
    useGetAllPaginationProductCondition(productconditionPagination);

  const handleAdjustment = () => {
    setOpenForm((s) => !s);
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
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          navTitle="CONFIGURATION"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleAdjustment();
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
          title="Container Types"
        />
        <Box sx={{ mt: 3 }}>
          <ContainerTypeList
            data={productconditionResponse}
            handlePagination={handlePagination}
            productconditionPagination={productconditionPagination}
          />
        </Box>
      </CardContent>

      {openForm ? (
        <ContainerTypeCreate handleClose={handleAdjustment} open={openForm} />
      ) : null}
    </Container>
  );
}

export default ContainerType;
