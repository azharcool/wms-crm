import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import { CardContent, Container, PaletteMode } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
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
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        // setEditable(false);
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
    {
      id: crypto.randomUUID(),
      title: "Save",
      onClick: () => {
        // formik.handleSubmit();
      },
      icon: (
        <SaveIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];
  const isTrue = true;

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
