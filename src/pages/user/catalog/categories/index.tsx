import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useCategoriesAction from "hooks/catalog/categories/useCategoriesAction";
import useGetAllCategories from "hooks/querys/catalog/categories/useGetAllCategories";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedCategory } from "redux/catalog/categorySelector";
import CategoriesListing from "./components/CategoriesListing";

function Categories() {
  const navigate = useNavigate();
  const [categoryPagination, setCategoryPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const getSelectedCategoryIdsState = useSelector(getSelectedCategory);

  const { bulkDeleteCategoriesAsync } = useCategoriesAction();

  const { data: CategoryPaginationResponse } =
    useGetAllCategories(categoryPagination);

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          buttonText="New"
          navTitle="CATALOG"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate(AppRoutes.CATALOG.categoryCreate);
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
          onBulkHandle={() => {
            const ids = getSelectedCategoryIdsState.toString();
            bulkDeleteCategoriesAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <CategoriesListing data={CategoryPaginationResponse} />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Categories;
