import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllCategories from "hooks/querys/catalog/categories/useGetAllCategories";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesListing from "./components/CategoriesListing";

function Categories() {
  const navigate = useNavigate();
  const [categoryPagination, setCategoryPagination] = useState({
    pageSize: 10,
    page: 1,
  });

  const { data: CategoryPaginationResponse } =
    useGetAllCategories(categoryPagination);

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
            rightActions={[
              {
                id: crypto.randomUUID(),
                title: "Bulk Actions",
                onClick: () => {
                  navigate(`${AppRoutes.CATALOG.categoryCreate}`);
                },
                icon: (
                  <ArrowDropDownIcon
                    sx={{
                      fontSize: 18,
                      mr: 2,
                    }}
                  />
                ),
              },
              {
                id: crypto.randomUUID(),
                title: "New",
                onClick: () => {
                  navigate(`${AppRoutes.CATALOG.categoryCreate}`);
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
            title="Categories"
          />
          <Box sx={{ mt: 3 }}>
            <CategoriesListing data={CategoryPaginationResponse} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Categories;
