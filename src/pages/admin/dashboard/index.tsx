import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import TextField from "components/textfield";
import DashboardLayout from "components/dashboard-container";
import dashboardImg from "assets/images/dashboard.png";
import palette from "theme/palette";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Section from "./component/section";
import SectionList from "./component/section-list";
import UsedSection from "./component/used-section";
import DeleveryTabs from "./component/delevery-tabs";

function Dashboard() {
  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Card>
            <CardContent
              sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0 }}
            >
              <Box
                sx={{
                  display: "flex",
                  // px: 10,
                  flex: 4,
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  flexGrow: 1,
                  // py: 8,
                }}
              >
                <Box sx={{ flex: 3, borderRadius: 5, p: 5 }}>
                  <Box>
                    <Section />
                  </Box>

                  <Box>
                    <SectionList />
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <UsedSection />
                  <DeleveryTabs />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default Dashboard;
