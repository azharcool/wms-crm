import { CardContent, Container, Grid } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import DeliveryStatusList from "./component/delivery-status-list/DeliveryStatusList";
import ListSection from "./component/list-sections/ListSection";
import SectionUsages from "./component/warehouse-logistics/SectionUsages";
import WarehouseLogistics from "./component/warehouse-logistics/WarehouseLogistics";

function Dashboard() {
  return (
    <DashboardLayout>
      <Container>
        <CardContent>
          <WarehouseLogistics />

          <Grid container marginTop="10px" spacing={2}>
            <Grid item xs={8}>
              <ListSection />
            </Grid>
            <Grid
              container
              item
              alignItems="end"
              direction="column"
              rowSpacing={2}
              xs={4}
            >
              <Grid item xs={4}>
                <SectionUsages />
              </Grid>
              <Grid item xs={4}>
                <DeliveryStatusList />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Container>
    </DashboardLayout>
  );
}

export default Dashboard;
