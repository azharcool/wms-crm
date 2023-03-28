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
  TableRow,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
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

  let isTrue = true;

  return (
    <Grid container direction="row" padding={0} spacing={2}>
      {/* coloumn */}
      <Grid direction="column" item xs={8} spacing={2}>
        <Grid>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Status">
              <Grid
                display="flex"
                direction="row"
                justifyContent="space-around"
              >
                <Stack direction="column" gap={2}>
                  <Typography variant="subtitle1" fontSize={12} color="gray">
                    PURCHASE ORDER
                  </Typography>
                  <Typography>PROGRESS</Typography>
                </Stack>
                <Stack direction="column" gap={2}>
                  <Typography variant="subtitle1" fontSize={12} color="gray">
                    RECEIVE
                  </Typography>
                  <Typography>NEW</Typography>
                </Stack>
                <Stack direction="column" gap={2}>
                  <Typography variant="subtitle1" fontSize={12} color="gray">
                    PAYMENT
                  </Typography>
                  <Typography>UNPAID</Typography>
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
                display="flex"
                direction="row"
                justifyContent="space-around"
              >
                <Stack direction="column" gap={2}>
                  <Typography variant="subtitle1" fontSize={12} color="gray">
                    Company Name
                  </Typography>
                  <Typography>Smart</Typography>
                </Stack>
                <Stack direction="column" gap={2}>
                  <Typography variant="subtitle1" fontSize={12} color="gray">
                    Contact person
                  </Typography>
                  <Typography>smart</Typography>
                </Stack>
                <Stack direction="column" gap={2}>
                  <Typography variant="subtitle1" fontSize={12} color="gray">
                    Phone number
                  </Typography>
                  <Typography>9876555</Typography>
                </Stack>
              </Grid>
              <Grid
                container
                xs={12}
                sx={{ display: "flex", justifyContent: "space-around" }}
                marginTop={2}
                gap={2}
              >
                <Grid item xs={5} sx={{ border: "0.5px #d9d9d9 solid" }}>
                  <DialogTitle>
                    <Typography component="h6">Supplier Address</Typography>
                  </DialogTitle>
                  <Divider />
                  <DialogContent>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        name="address"
                        label="Address"
                        darkDisable
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        name="city"
                        label="City"
                        darkDisable
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        name="zipcode"
                        darkDisable
                        label="Zip Code"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        darkDisable
                        name="Country"
                        label="Country"
                        size="small"
                      />
                    </Stack>
                  </DialogContent>
                </Grid>
                <Grid item xs={5} sx={{ border: "1px #d9d9d9 solid" }}>
                  <DialogTitle>
                    <Typography component="h6">Billing Address</Typography>
                  </DialogTitle>
                  <Divider />
                  <DialogContent>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        darkDisable
                        name="address"
                        label="Address"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        darkDisable
                        name="city"
                        label="City"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        darkDisable
                        name="zipcode"
                        label="Zip Code"
                        size="small"
                      />
                    </Stack>
                    <Stack marginTop={2}>
                      <TextField
                        disabled={isTrue}
                        darkDisable
                        name="Country"
                        label="Country"
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
      <LineItems />
      <Grid
        container
        xs={12}
        sx={{ display: "flex", justifyContent: "space-around" }}
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
              <Typography component="h6">Invoice Summary</Typography>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  disabled={isTrue}
                  name="line"
                  darkDisable
                  label="Line Items"
                  value="1"
                  size="small"
                />
                <TextField
                  disabled={isTrue}
                  darkDisable
                  name="unit"
                  label="Unit Ordered"
                  value="1"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  disabled={isTrue}
                  darkDisable
                  name="received"
                  label="Received items"
                  value="1"
                  size="small"
                />
                <TextField
                  disabled={isTrue}
                  darkDisable
                  name="subtotal"
                  value="INR 10"
                  label="Subtotal"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  disabled={isTrue}
                  darkDisable
                  name="discount"
                  label="Discount price"
                  value="INR 1"
                  size="small"
                />

                <TextField
                  disabled={isTrue}
                  darkDisable
                  name="taxes"
                  label="Taxes"
                  value="INR 10 "
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  disabled={isTrue}
                  darkDisable
                  name="shippingcharge"
                  label="Shipping charges"
                  value="INR 13"
                  size="small"
                />
                <TextField
                  disabled={isTrue}
                  darkDisable
                  name="Total"
                  value="INR 100"
                  label="Total"
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
              <Typography component="h6">Supplier notes</Typography>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <Typography>Notes not found</Typography>
            </DialogContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default General;

function LineItems() {
  const newtheme = useSelector((state: any) => state.theme);

  return (
    <PerfectScrollbar>
      <Box sx={{ marginTop: 4 }}>
        <TableContainer component={Paper}>
          <Box sx={{ margin: 3 }}>
            <Typography variant="title1" margin={2}>
              Line Items
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
