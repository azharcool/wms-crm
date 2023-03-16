import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import ListingList from "./components/ListingList";

function Listing() {
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
            title="Listing"
          />
          <Box sx={{ mt: 3 }}>
            <ListingList />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Listing;
