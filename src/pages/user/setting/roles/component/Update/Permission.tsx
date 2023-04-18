import { Grid, Card } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Fullfillment from "../permission-screen/FullfillmentPermission";
import Catalog from "../permission-screen/CatalogPermission";
import Purchases from "../permission-screen/PurchasesPermission";
import Stock from "../permission-screen/StockPermission";
import Setting from "../permission-screen/SettingPermission";
import Warehouse from "../permission-screen/WarehousePermission";
import Dashboard from "../permission-screen/DashboardPermission";
import Finance from "../permission-screen/FinancePermission";

function Permission() {
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} my={2}>
        <CustomGrid>
          <Fullfillment />
        </CustomGrid>
        <CustomGrid>
          <Catalog />
        </CustomGrid>
        <CustomGrid>
          <Purchases />
        </CustomGrid>
        <CustomGrid>
          <Stock />
        </CustomGrid>
        <CustomGrid>
          <Setting />
        </CustomGrid>
        <CustomGrid>
          <Warehouse />
        </CustomGrid>
        <CustomGrid>
          <Dashboard />
        </CustomGrid>
        <CustomGrid>
          <Finance />
        </CustomGrid>
      </Grid>
    </Container>
  );
}

export default Permission;

interface ICustomGrid {
  children: React.ReactNode;
}
function CustomGrid(props: ICustomGrid) {
  const { children } = props;
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          flex: 1,
        }}
      >
        {children}
      </Card>
    </Grid>
  );
}
