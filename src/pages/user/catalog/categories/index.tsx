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

  const { data: CategoryPaginationResponse, refetch } =
    useGetAllCategories(categoryPagination);
  const ids = getSelectedCategoryIdsState.toString();

  const handlePageChange = (pageNo: number) => {
    setCategoryPagination((prevState) => ({ ...prevState, page: pageNo }));
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setCategoryPagination((prevState) => ({ ...prevState, pageSize: limit }));
    setTimeout(() => {
      refetch();
    }, 500);
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
            data={CategoryPaginationResponse}
            paginationData={categoryPagination}
            setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
            setPageLimit={(limit: number) => handlePageLimitChange(limit)}
            total={0}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Categories;
