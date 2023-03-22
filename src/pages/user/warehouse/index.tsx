import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";

function Warehouse() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <Container maxWidth={false}>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
            hasBulk
            buttonText="New"
            navTitle="Warehouses"
            rightActions={[
              {
                id: crypto.randomUUID(),
                title: "New",
                onClick: () => {
                  // navigate(AppRoutes.CATALOG.productCreate);
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
            title="Warehouses"
            onBulkHandle={() => {}}
          />
          <Box sx={{ mt: 3 }}>
            {/* <ProductListing data={productPaginationResponse} /> */}
          </Box>
        </CardContent>
      </Container>
    </DashboardLayout>
    // </ThemeProvider>
  );
}

export default Warehouse;
