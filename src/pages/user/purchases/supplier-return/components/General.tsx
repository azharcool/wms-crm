import {
  Box,
  Card,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import DashedCard from "components/card/DashedCard";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";

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
    title: "Supplier SKU",
  },
  {
    id: crypto.randomUUID(),
    title: "Order Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Discount",
  },
  {
    id: crypto.randomUUID(),
    title: "Taxes",
  },
  {
    id: crypto.randomUUID(),
    title: "Receive Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Unit cost",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
];

function General(props: IGeneral) {
  const isTrue = true;

  return (
    <Grid container direction="row" padding={0} spacing={2}>
      {/* coloumn */}
      <Grid item direction="column" spacing={2} xs={8}>
        <Grid>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Status">
              <Grid
                direction="row"
                display="flex"
                justifyContent="space-around"
              >
                <Stack direction="column" gap={2}>
                  <DashedCard title="PURCHASE ORDER">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#2545B8",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "11px",
                      }}
                    >
                      PROGRESS
                    </Box>
                  </DashedCard>
                </Stack>
                <Stack direction="column" gap={2}>
                  <DashedCard title="RECEIVE">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#50cd89",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      NEW
                    </Box>
                  </DashedCard>
                </Stack>
                <Stack direction="column" gap={2}>
                  <DashedCard title="STATUS">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#009ef7",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      PROGRESS
                    </Box>
                  </DashedCard>
                </Stack>
              </Grid>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid marginTop={2}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Supplier">
              <Grid
                direction="row"
                display="flex"
                justifyContent="space-around"
              >
                <Stack direction="column" gap={2}>
                  <DashedCard title="COMPANY NAME">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#2545B8",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      Smart
                    </Box>
                  </DashedCard>
                </Stack>
                <Stack direction="column" gap={2}>
                  <DashedCard title="CONTACT PERSON">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#50cd89",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      Smart
                    </Box>
                  </DashedCard>
                </Stack>
                <Stack direction="column" gap={2}>
                  <DashedCard title="PHONE NUMBER">
                    <Box
                      sx={{
                        background: "#dfe3f5",
                        color: "#009ef7",
                        padding: "3px 12px",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      12345
                    </Box>
                  </DashedCard>
                </Stack>
              </Grid>
              <Grid
                container
                gap={2}
                marginTop={2}
                sx={{ display: "flex", justifyContent: "space-around" }}
                xs={12}
              >
                <Grid item sx={{ border: "0.5px #d9d9d9 solid" }} xs={5}>
                  <DialogTitle>
                    <Typography component="h6">Supplier Address</Typography>
                  </DialogTitle>
                  <Divider />
                  <DialogContent>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="Address"
                        name="address"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="City"
                        name="city"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="Zip Code"
                        name="zipcode"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="Country"
                        name="Country"
                        size="small"
                      />
                    </Stack>
                  </DialogContent>
                </Grid>
                <Grid item sx={{ border: "1px #d9d9d9 solid" }} xs={5}>
                  <DialogTitle>
                    <Typography component="h6">Billing Address</Typography>
                  </DialogTitle>
                  <Divider />
                  <DialogContent>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="Address"
                        name="address"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="City"
                        name="city"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="Zip Code"
                        name="zipcode"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        darkDisable
                        disabled={isTrue}
                        label="Country"
                        name="Country"
                        size="small"
                      />
                    </Stack>
                  </DialogContent>
                </Grid>
              </Grid>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
      {/* columnEnd */}
      <Grid item xs={4}>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Details">
            <Stack gap={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Ship to warehouse"
                name="productHeight"
                size="small"
              />
            </Stack>
            <Stack marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Company"
                name="productHeight"
                size="small"
              />
            </Stack>
            <Stack marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Order date"
                name="productHeight"
                size="small"
              />
            </Stack>
            <Stack marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Expected date"
                name="productHeight"
                size="small"
              />
            </Stack>
            <Stack marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Payment type"
                name="productHeight"
                size="small"
              />
            </Stack>
            <Stack marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Payment term"
                name="productHeight"
                size="small"
              />
            </Stack>
            <Stack marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Supplier reference id"
                name="productHeight"
                size="small"
              />
            </Stack>
            <Stack marginTop={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="tags"
                name="productHeight"
                size="small"
              />
            </Stack>
          </CustomCardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <LineItems />
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CustomCardContent title="Supplier notes">
            <TextField
              darkDisable
              disabled
              multiline
              id="notes"
              label="Notes"
              name="notes"
              rows={5}
              value="No Notes Found"
            />
          </CustomCardContent>
          <CustomCardContent title="Invoice Summary">
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                darkDisable
                label="Line Items"
                name="line"
                size="small"
                value="1"
              />
              <TextField
                darkDisable
                label="Unit Ordered"
                name="unit"
                size="small"
                value="1"
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                darkDisable
                label="Received items"
                name="received"
                size="small"
                value="1"
              />
              <TextField
                darkDisable
                label="Subtotal"
                name="subtotal"
                size="small"
                value="INR 10"
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                darkDisable
                label="Discount price"
                name="discount"
                size="small"
                value="INR 1"
              />

              <TextField
                darkDisable
                label="Taxes"
                name="taxes"
                size="small"
                value="INR 10 "
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                darkDisable
                label="Shipping charges"
                name="shippingcharge"
                size="small"
                value="INR 13"
              />
              <TextField
                darkDisable
                label="Total"
                name="Total"
                size="small"
                value="INR 100"
              />
            </Stack>
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default General;

function LineItems() {
  const newtheme = useSelector((state: any) => state.theme);

  return (
    <Card>
      <CustomCardContent title="Line Items">
        <TableContainer>
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
      </CustomCardContent>
    </Card>
  );
}
