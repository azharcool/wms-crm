import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  PaletteMode,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, purple } from "@mui/material/colors";
import { useSelector } from "react-redux";

function General() {
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
    // <Box
    //   component="main"
    //   sx={{
    //     flexGrow: 1,
    //     py: 8,
    //     display: "flex",
    //     flex: "1 1 auto",
    //     maxWidth: "100%",
    //   }}
    // >
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <Card>
          <CardContent sx={{ paddingTop: 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flex: 4, gap: 2 }}>
                <DialogContent sx={{ flex: 3 }}>
                  <DialogTitle>Information</DialogTitle>
                  <Divider sx={{ my: 1 }} />
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      marginBottom: "1rem",
                      flex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Warehouse name
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        Warehouse 1
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginLeft: "3rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Lable
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        Lable1
                      </Typography>
                    </Box>
                  </Box>{" "}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      marginBottom: "1rem",
                      flex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Phone number
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        9876543212
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                        marginLeft: "4rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Address
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        Al-olaya king fahad road
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      marginBottom: "1rem",
                      flex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Country
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        Saudi Arabia
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                        marginLeft: "4rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        City
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        riyadh
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      marginBottom: "1rem",
                      flex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Zipcode
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        Not provided
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      marginBottom: "1rem",
                      flex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Longitude
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        0
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: "1rem",
                        marginLeft: "6rem",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Lattitude
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        0
                      </Typography>
                    </Box>
                  </Box>
                </DialogContent>
                <DialogContent sx={{ flex: 1 }}>
                  <DialogTitle>Setting</DialogTitle>
                  <Divider sx={{ my: 1 }} />
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      marginBottom: "1rem",
                      flex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Status
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        <Chip
                          color="success"
                          label="Active"
                          sx={{ marginTop: 1, marginRight: 2 }}
                          variant="outlined"
                        />
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Picking strategy
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        Create one picklist per order.
                      </Typography>
                    </Box>{" "}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Receiving strategy
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        Receive to permanent location (picking)
                      </Typography>
                    </Box>{" "}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Timezone
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        variant="h6"
                      >
                        (GMT) Western Europe Time, London, Lisbon, Casablanca
                      </Typography>
                    </Box>{" "}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        Receiving type
                      </Typography>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "500" }}
                        // eslint-disable-next-line prettier/prettier
                        variant="h6"
                      >
                        Invoice receive
                      </Typography>
                    </Box>
                  </Box>
                </DialogContent>
              </Box>
              <DialogContent sx={{}}>
                <DialogTitle>Primary Contact</DialogTitle>
                <Divider sx={{ my: 1 }} />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                    flex: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      marginBottom: "1rem",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      First name
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      Not provided
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      marginBottom: "1rem",
                      marginLeft: "4rem",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Last name
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      Not provided
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    marginBottom: "1rem",
                    flex: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      marginBottom: "1rem",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Email
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      Not provided
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      marginBottom: "1rem",
                      marginLeft: "4rem",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Phone number
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      9663456782345
                    </Typography>
                  </Box>
                </Box>
              </DialogContent>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>

    // </Box>
  );
}

export default General;
