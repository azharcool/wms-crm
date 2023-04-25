import { Box, CircularProgress, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import CustomAppBar from "./CustomAppBar";
import CustomDrawer, { DrawerHeader } from "./CustomDrawer";

interface IDashboardLayout {
  children: React.ReactNode;
  isLoading?: boolean;
}

function DashboardLayout(props: IDashboardLayout) {
  const { children, isLoading } = props;
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <CustomDrawer handleDrawerClose={handleDrawerClose} open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {isLoading ? (
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress color="info" size={20} />
            </Box>
          </Container>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
