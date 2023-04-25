import { Card, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Catalog from "../permissions/CatalogPermission";
import Dashboard from "../permissions/DashboardPermission";
import Finance from "../permissions/FinancePermission";
import Fullfillment from "../permissions/FullfillmentPermission";
import Purchases from "../permissions/PurchasesPermission";
import Setting from "../permissions/SettingPermission";
import Stock from "../permissions/StockPermission";
import Warehouse from "../permissions/WarehousePermission";

function Permission() {
  return (
    <Container>
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
