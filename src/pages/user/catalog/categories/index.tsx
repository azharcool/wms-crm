import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import CategoriesListing from "./components/CategoriesListing";

function Categories() {
  const navigate = useNavigate();
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
            <CategoriesListing />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Categories;
