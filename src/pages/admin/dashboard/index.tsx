import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Box, Container } from "@mui/system";
import DashboardLayout from "components/dashboard-container";
import dashboardImg from "assets/images/dashboard.png"

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
              <img src={dashboardImg} height="100%"  width="100%" alt="dashboardImg"  />
          </Card>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;
