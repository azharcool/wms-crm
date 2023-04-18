import { Grid, Card } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Fullfillment from "../permissions/FullfillmentPermission";
import Catalog from "../permissions/CatalogPermission";
import Purchases from "../permissions/PurchasesPermission";
import Stock from "../permissions/StockPermission";
import Setting from "../permissions/SettingPermission";
import Warehouse from "../permissions/WarehousePermission";
import Dashboard from "../permissions/DashboardPermission";
import Finance from "../permissions/FinancePermission";

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
