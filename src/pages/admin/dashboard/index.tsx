import {
  CardContent,
  Container,
  CssBaseline,
  Grid,
  PaletteMode,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import DashboardLayout from "components/dashboard-container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import DeliveryStatusList from "./component/delivery-status-list/DeliveryStatusList";
import ListSection from "./component/list-sections/ListSection";
import SectionUsages from "./component/warehouse-logistics/SectionUsages";
import WarehouseLogistics from "./component/warehouse-logistics/WarehouseLogistics";

function Dashboard() {
  const newtheme = useSelector((state: any) => state.theme);

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

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default Dashboard;
