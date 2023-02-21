import { Card, CardContent } from "@mui/material";
import { Box, Container } from "@mui/system";
import DashboardLayout from "components/dashboard-container";

function Dashboard() {
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
        
      >
        <Container maxWidth={false}>
          <Card>
            <CardContent sx={{ padding: "6px", width: "100%" }}>
              <h1>Dashboard</h1>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
