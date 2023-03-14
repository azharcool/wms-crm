import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesListing from "./components/CategoriesListing";
import categories from "./components/__mock__/categories.json";

function Categories() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteWarehouse = async (id: string) => {
    // await deletePermission(id);
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
            buttonText="New"
            handleClick={() => {
              navigate(AppRoutes.CATALOG.productCreate);
            }}
            navTitle="CATALOG"
            title="Categories"
          />
          <Box sx={{ mt: 3 }}>
            <CategoriesListing
              categories={categories}
              handleDeleteWarehouse={handleDeleteWarehouse}
              openModal={handleOpen}
              total={0}
              // permissions={permissions?.data || []}
              // setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
              // setPageLimit={(limit: number) => handlePageLimitChange(limit)}
              // total={permissions?.totalDocs || 0}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Categories;
