import { Box, CircularProgress, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

import Toolbar from "@mui/material/Toolbar";
import { DashboardNavbar } from "./DashboardNavbar";
import { DashboardSidebar } from "./DashboardSidebar";

const DashboardLayoutRoot: any = styled("div")(({ theme }) => {
  return {
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 5,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 250,
    },
  };
});

function DashboardLayout(props: any) {
  const { children, isLoading } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            // backgroundColor: palette.gray.light,
            display: "flex",
            flex: "1 1 auto",
            maxWidth: "100%",
            height: "auto",
            minHeight: "100vh",
            borderBottomLeftRadius: 60,
            borderTopLeftRadius: 70,
          }}
        >
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
            <Box
              sx={{
                display: "flex",
                flex: "1 1 auto",
                flexDirection: "column",
                width: "100%",
                paddingTop: 2,
              }}
            >
              <Toolbar />
              {children}
            </Box>
          )}
        </Box>
      </DashboardLayoutRoot>

      <DashboardNavbar
        onSidebarOpen={() => {
          return setSidebarOpen(true);
        }}
      />

      <DashboardSidebar
        open={isSidebarOpen}
        onClose={() => {
          return setSidebarOpen(false);
        }}
      />
    </>
  );
}

export default DashboardLayout;
