import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoopIcon from "@mui/icons-material/Loop";
import {
  Box,
  Card,
  CardContent,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  PaletteMode,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
// import Typography from "theme/typography";
import TableToolbar from "components/table-toolbar";

interface ICustomCard {
  title: string;
  children: React.ReactNode;
}
function CustomCardContent(props: ICustomCard) {
  const { title, children } = props;
  return (
    <>
      <DialogTitle>
        <Typography component="h6">{title}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </>
  );
}

function UnitHistory() {
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
      <Container maxWidth={false}>
        <TableToolbar
          buttonText=""
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="CATELOG"
          rightActions={[]}
          title="IPHONE XR"
        />
      </Container>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Toolbar
          sx={{
            left: {
              lg: 2,
              display: "flex",
              gap: 2,
              flex: 1,
            },
          }}
        >
          <Card
            sx={{ my: 2, display: "flex", flex: 1, justifyContent: "center" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <CardContent
              // sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0 }}
              >
                <DialogContent sx={{ flex: 1, display: "flex" }}>
                  <Card
                    sx={{
                      padding: 2,
                      width: 300,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 12, fontWeight: "600" }}
                          color="text.secondary"
                        >
                          Reserved for
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                          Not provided
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: 12, fontWeight: "600" }}
                          color="text.secondary"
                        >
                          Result Qty
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                          50
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 12, fontWeight: "600" }}
                          color="text.secondary"
                        >
                          Location
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                          Not provided
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{ fontSize: 12, fontWeight: "600" }}
                          color="text.secondary"
                        >
                          Difference
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                          50
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 12, fontWeight: "600" }}
                          color="text.secondary"
                        >
                          Container
                        </Typography>
                        <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                          Not provided
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </DialogContent>
              </CardContent>
            </Card>
          </Card>
        </Toolbar>
        <Toolbar
          sx={{
            left: {
              lg: 2,
              display: "flex",
              gap: 2,
              flex: 1,
            },
          }}
        >
          <Grid container marginTop={2} spacing={2}>
            <Grid item xs={12}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Details">
                  <Stack gap={6}>
                <Stack direction="row" gap={4}>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  </Stack>
                  <Stack direction="row" gap={4}>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  </Stack>
                  <Stack direction="row" gap={4}>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" gap={4}>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                  </Stack>
                  </Stack>
                  </Stack>
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
        </Toolbar>
        {/* <Toolbar
          sx={{
            left: {
              lg: 2,
              display: "flex",
              gap: 2,
              flex: 1,
            },
          }}
        >
          <Card
            sx={{ my: 2, display: "flex", flex: 1, justifyContent: "center" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <CardContent
                sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0 }}
              >
                <DialogContent sx={{ flex: 1 }}>
                  <Typography>Unit Information</Typography>
                  <Divider sx={{ my: 1 }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                   
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Variant
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        IPHONE XR White
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Unit number
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        894
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Type
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        Increase
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Old quantity
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        0
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        New quantity
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        50
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Location Id
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        STG
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Warehouse
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        Default demo
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Source
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        SA- 3433
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Company
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        Smart
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Condition Code
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        New
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Price
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        0
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: 16, fontWeight: "700" }}
                        variant="h6"
                      >
                        Current
                      </Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: "500" }}>
                        Not provided
                      </Typography>
                    </Box>
                  </Box>
                </DialogContent>
              </CardContent>
            </Card>
          </Card>
        </Toolbar> */}
      </Box>
    </ThemeProvider>
  );
}

export default UnitHistory;
