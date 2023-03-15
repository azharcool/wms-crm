import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";
import VariantListing from "./components/VariantListing";

function Variant() {
  const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
            // buttonText="New"
            // handleClick={() => {
            //   navigate(AppRoutes.CATALOG.productCreate);
            // }}
            buttonText=""
            navTitle="CATALOG"
            title="Variant"
          />
          <Box sx={{ mt: 3 }}>
            <VariantListing />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Variant;
