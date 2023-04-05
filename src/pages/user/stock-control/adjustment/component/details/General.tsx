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
import { getAdjustmentSelected } from "redux/stock-control/adjustmentSelector";
import useGetByIdAdjustment from "hooks/querys/stock/adjustment/useGetByIdAdjustment";
import DashedCard from "components/card/DashedCard";
import { StockDetail } from "types/stock/adjustment/getAllAdjustmentResponse";
import DateTimeFormat from "components/dateTime-format";
import NoDataTableRow from "components/table/no-data-table-row";

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
  const selectedAdjustment = useSelector(getAdjustmentSelected);
  const adjustmentData = {
    adjustmentId: selectedAdjustment.id,
  };
  const { data: adjustmentDetails } = useGetByIdAdjustment(adjustmentData);

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
                      <DashedCard title="WAREHOUSE">
                        <Box
                          sx={{
                            background: "#dfe3f5",
                            color: "#2545B8",
                            padding: "3px 12px",
                            borderRadius: "5px",
                            fontSize: "12px",
                          }}
                        >
                          {adjustmentDetails?.data.warehouseName || "-"}
                        </Box>
                      </DashedCard>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <DashedCard title="REASON">
                        <Box
                          sx={{
                            background: "#dfe3f5",
                            color: "#50cd89",
                            padding: "3px 12px",
                            borderRadius: "5px",
                            fontSize: "12px",
                          }}
                        >
                          {adjustmentDetails?.data.reason || "-"}
                        </Box>
                      </DashedCard>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <DashedCard title="REFERENCE ID">
                        <Box
                          sx={{
                            background: "#dfe3f5",
                            color: "#009ef7",
                            padding: "3px 12px",
                            borderRadius: "5px",
                            fontSize: "12px",
                          }}
                        >
                          {adjustmentDetails?.data.referenceId || "-"}
                        </Box>
                      </DashedCard>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <DashedCard title="OWNER">
                        <Box
                          sx={{
                            background: "#dfe3f5",
                            color: "#009ef7",
                            padding: "3px 12px",
                            borderRadius: "5px",
                            fontSize: "12px",
                          }}
                        >
                          {/* {adjustmentDetails?.data.owner} */} -
                        </Box>
                      </DashedCard>
                    </Stack>
                  </Grid>
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid xs={12}>
            <StockTable data={adjustmentDetails?.data.stockDetails} />
          </Grid>
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
                      value={adjustmentDetails?.data.totalQuantity || "-"}
                      size="small"
                    />
                    <TextField
                      disabled={isTrue}
                      darkDisable
                      name="unit"
                      label="Total adjusted value"
                      value={adjustmentDetails?.data.totalValue || "-"}
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
                  <Typography>
                    {adjustmentDetails?.data.notes || "-"}
                  </Typography>
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

interface IStockTable {
  data?: StockDetail[];
}
function StockTable(props: IStockTable) {
  const newtheme = useSelector((state: any) => state.theme);
  const { data } = props;

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
                {data?.length !== 0 ? (
                  data?.map((item: StockDetail) => {
                    return (
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
                              alt="stockImg"
                              src={item.image || ""}
                              width="100%"
                            />
                          </Box>
                        </TableCell>
                        <TableCell
                          sx={{
                            minWidth: 170,
                          }}
                        >
                          {/* {item.productName || "-"} */}-
                        </TableCell>
                        <TableCell
                          sx={{
                            minWidth: 170,
                            // background: "white",
                          }}
                        >
                          {item.barcodeStrategy || "-"}
                        </TableCell>
                        <TableCell
                          sx={{
                            minWidth: 170,
                            // background: "white",
                          }}
                        >
                          {item.unitCost || "-"}
                        </TableCell>
                        <TableCell
                          sx={{
                            minWidth: 170,
                            // background: "white",
                          }}
                        >
                          {item.quantity || "-"}
                        </TableCell>
                        <TableCell
                          sx={{
                            minWidth: 170,
                            // background: "white",
                          }}
                        >
                          {item.containerNumber || "-"}
                        </TableCell>
                        <TableCell
                          sx={{
                            minWidth: 170,
                            // background: "white",
                          }}
                        >
                          {DateTimeFormat(item.expiryDate) || "-"}
                        </TableCell>
                        <TableCell
                          sx={{
                            minWidth: 170,
                            // background: "white",
                          }}
                        >
                          {item.locationId || "-"}
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <NoDataTableRow colSize={7} title="No Stock details found" />
                )}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}
