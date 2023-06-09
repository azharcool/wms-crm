import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import NOImage from "assets/images/no-image.png";
import CustomCardContent from "components/card/CustomCardContent";
import DashedCard from "components/card/DashedCard";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import dateTimeFormat from "components/dateTime-format";
import { ToolBarButton } from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import NoDataTableRow from "components/table/no-data-table-row";
import TextField from "components/textfield";
import { FILE_URL } from "config";
import useGetByIdAdjustment from "hooks/querys/stock/adjustment/useGetByIdAdjustment";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdjustmentSelected } from "redux/stock-control/adjustmentSelector";
import AppRoutes from "routes/appRoutes";
import { StockDetail } from "types/stock/adjustment/getAllAdjustmentResponse";

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

function General(props: IGeneral) {
  let isTrue = true;

  const navigate = useNavigate();
  const selectedAdjustment = useSelector(getAdjustmentSelected);
  const { data: adjustmentDetails } = useGetByIdAdjustment({
    adjustmentId: selectedAdjustment.id,
  });

  const {
    stockControl: {
      layout,
      adjustment: { update },
    },
  } = AppRoutes;

  return (
    <Container>
      <Grid sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ToolBarButton
          handleClick={() => {
            // toggleEditable();
            navigate(`/${layout}/${update}/${adjustmentDetails?.data.id}`);
          }}
          icon={
            <EditIcon
              sx={{
                fontSize: 18,
                mr: 1,
              }}
            />
          }
          title="Edit"
        />
      </Grid>
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
                    value={
                      adjustmentDetails?.data.totalValue
                        ? `INR ${adjustmentDetails?.data.totalValue}.00`
                        : "-"
                    }
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
                <Typography>{adjustmentDetails?.data.notes || "-"}</Typography>
              </DialogContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default General;

interface IStockTable {
  data?: StockDetail[];
}
function StockTable(props: IStockTable) {
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
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          position: isImage ? "sticky" : "static",
                          left: isImage ? 0 : 50,
                        }}
                      >
                        {item.title}
                      </CustomHeadTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.length !== 0 ? (
                  data?.map((item: StockDetail) => {
                    return (
                      <TableRow>
                        <CustomBodyTableCell
                          sx={{
                            width: 50,
                            position: "sticky",
                            left: 0,
                            zIndex: 999,
                          }}
                        >
                          <CustomTableText
                            text={
                              <Box
                                sx={{
                                  width: "40px",
                                  height: "40px",
                                }}
                              >
                                <img
                                  alt="stock"
                                  src={
                                    item?.image
                                      ? `${FILE_URL}${item?.image}`
                                      : NOImage
                                  }
                                  width="100%"
                                />
                              </Box>
                            }
                          />
                        </CustomBodyTableCell>
                        <CustomBodyTableCell>
                          <CustomTableText text="-" />
                        </CustomBodyTableCell>

                        <CustomBodyTableCell>
                          <CustomTableText
                            text={item?.barcodeStrategy || "-"}
                          />
                        </CustomBodyTableCell>
                        <CustomBodyTableCell>
                          <CustomTableText text={item?.unitCost || "-"} />
                        </CustomBodyTableCell>
                        <CustomBodyTableCell>
                          <CustomTableText text={item?.quantity || "-"} />
                        </CustomBodyTableCell>
                        <CustomBodyTableCell>
                          <CustomTableText
                            text={item?.containerNumber || "-"}
                          />
                        </CustomBodyTableCell>
                        <CustomBodyTableCell>
                          <CustomTableText
                            text={dateTimeFormat(item.expiryDate) || "-"}
                          />
                        </CustomBodyTableCell>
                        <CustomBodyTableCell>
                          <CustomTableText text={item?.locationId || "-"} />
                        </CustomBodyTableCell>
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
