import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
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
            {
              link: "Stock Control",
              to: `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.stock_count.listing}`,
            },
          ]}
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Cancel",
              onClick: () => {
                navigate(
                  `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.stock_count.listing}`,
                );
              },
              icon: (
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
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
