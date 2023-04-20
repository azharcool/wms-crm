import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useCategoriesAction from "hooks/actions/catalog/categories/useCategoriesAction";
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
    page: 0,
  });
  const getSelectedCategoryIdsState = useSelector(getSelectedCategory);

  const { bulkDeleteCategoriesAsync } = useCategoriesAction();

  const { data: CategoryPaginationResponse, refetch } =
    useGetAllCategories(categoryPagination);
  const ids = getSelectedCategoryIdsState.toString();

  const handlePagination = (name: string, value: number) => {
    setCategoryPagination((s) => ({
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
          buttonText="New"
          isBulkDisabled={!!ids}
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
            bulkDeleteCategoriesAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <CategoriesListing
            categoriesPagination={categoryPagination}
            data={CategoryPaginationResponse}
            handlePagination={handlePagination}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Categories;
