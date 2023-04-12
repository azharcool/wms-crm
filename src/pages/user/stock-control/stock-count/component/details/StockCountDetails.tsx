import { CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StockCountLocation from "./location/StockCountLocation";
import StockCountLocations from "./locations/StockCountLocations";

function StockCountDetails() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  //   const {
  //     stockControl: {
  //       layout,
  //       putaway_v2: { general, history, details },
  //     },
  //   } = AppRoutes;

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={[
            { link: "Stock Control", to: "/stock-control/putaway-v2/listing" },
          ]}
          title="PO-13817"
        />
        <StockCountLocation />
        <StockCountLocations />
        <Outlet />
      </CardContent>
    </Container>
  );
}

export default StockCountDetails;
