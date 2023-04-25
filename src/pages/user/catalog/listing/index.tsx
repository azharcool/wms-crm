import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import ListingList from "./components/ListingList";

function Listing() {
  const navigate = useNavigate();
  return (
    <Container>
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
    </Container>
  );
}

export default Listing;
