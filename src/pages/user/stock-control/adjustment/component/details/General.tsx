import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Card,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Paper,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  Container,
  TableRow,
  Typography,
  PaletteMode,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";
import { grey, purple } from "@mui/material/colors";

interface IMenuItem {
  id: string;
  value: string;
}
interface IGeneral {
  data?: any;
}
const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Product",
  },

  {
    id: crypto.randomUUID(),
    title: "Barcode Strategy",
  },
  {
    id: crypto.randomUUID(),
    title: "Unit cost",
  },
  {
    id: crypto.randomUUID(),
    title: "Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Container number",
  },
  {
    id: crypto.randomUUID(),
    title: "Expiry date",
  },
  {
    id: crypto.randomUUID(),
    title: "Location",
  },
];
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
function General(props: IGeneral) {
  let isTrue = true;
  const newtheme = useSelector((state: any) => state.theme);
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false} sx={{ my: 2 }}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <Grid>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Details">
                  <Grid
                    display="flex"
                    direction="row"
                    justifyContent="space-around"
                  >
                    <Stack direction="column" gap={2}>
                      <Typography
                        variant="subtitle1"
                        fontSize={12}
                        color="gray"
                      >
                        WAREHOUSE
                      </Typography>
                      <Typography>DEFAULT WAREHOSE(demo)</Typography>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <Typography
                        variant="subtitle1"
                        fontSize={12}
                        color="gray"
                      >
                        REASON
                      </Typography>
                      <Typography>NEW</Typography>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <Typography
                        variant="subtitle1"
                        fontSize={12}
                        color="gray"
                      >
                        REFERENCE ID
                      </Typography>
                      <Typography>12345</Typography>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <Typography
                        variant="subtitle1"
                        fontSize={12}
                        color="gray"
                      >
                        OWNER
                      </Typography>
                      <Typography>Aasif</Typography>
                    </Stack>
                  </Grid>
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
          <StockTable />
          <Grid
            container
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
            marginTop={4}
            gap={2}
          >
            <Grid item xs={5} sx={{ border: "0.5px #d9d9d9 solid" }}>
              <Card
                sx={{
                  flex: 1,
                  height: "100%",
                }}
              >
                <DialogTitle>
                  <Typography component="h6">Adjustment Summary</Typography>
                </DialogTitle>
                <Divider />
                <DialogContent>
                  <Stack direction="row" gap={2} marginTop={2}>
                    <TextField
                      disabled={isTrue}
                      name="qty"
                      darkDisable
                      label="Total adjusted quantity"
                      value="10"
                      size="small"
                    />
                    <TextField
                      disabled={isTrue}
                      darkDisable
                      name="unit"
                      label="Total adjusted value"
                      value="INR 100.00"
                      size="small"
                    />
                  </Stack>
                </DialogContent>
              </Card>
            </Grid>

            <Grid item xs={5} sx={{ border: "1px #d9d9d9 solid" }}>
              <Card
                sx={{
                  flex: 1,
                  height: "100%",
                }}
              >
                <DialogTitle>
                  <Typography component="h6">Notes</Typography>
                </DialogTitle>
                <Divider />
                <DialogContent>
                  <Typography>Notes not found</Typography>
                </DialogContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default General;

function StockTable() {
  const newtheme = useSelector((state: any) => state.theme);

  return (
    <PerfectScrollbar>
      <Box sx={{ marginTop: 4 }}>
        <TableContainer component={Paper}>
          <Box sx={{ margin: 3 }}>
            <Typography variant="title1" margin={2}>
              Stock
            </Typography>
          </Box>
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
              }}
            >
              <TableHead>
                <TableRow>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isImage ? "sticky" : "static",
                          left: isImage ? 0 : 50,
                        }}
                        minWt={120}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      width: 50,
                      position: "sticky",
                      left: 0,
                      zIndex: 999,
                      background: newtheme.isDarkMode
                        ? "#26263D"
                        : palette.background.default,
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img
                        alt="new"
                        src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                        width="100%"
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                    }}
                  >
                    product
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    {/* inventory */}0
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    Not Provided
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}
