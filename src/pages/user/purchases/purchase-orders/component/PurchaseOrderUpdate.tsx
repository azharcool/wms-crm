import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Card,
  Container,
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
import { paymentTerm, paymentType } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import DashedCard from "components/card/DashedCard";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import AppRoutes from "routes/appRoutes";
import palette from "theme/palette";
import AddSupplier from "./AddSupplier";

function PurchaseOrderUpdate() {
  const [openSupplier, setOpenSupplier] = React.useState(false);

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        // setEditable(false);
      },
      icon: (
        <ArrowBackIosIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Save",
      onClick: () => {
        // formik.handleSubmit();
      },
      icon: (
        <SaveIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Container>
        <TableToolbar
          breadcrumbs={[
            {
              link: "PURCHASE ORDER",
              to: `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.purchaseOrders.details}`,
            },
          ]}
          buttonText="Save"
          handleClick={() => {
            // handleSubmit()
          }}
          navTitle="PO-2223"
          rightActions={rightActionsData}
          title="Update Purchase Order"
        />
        <Grid container direction="row" padding={0} spacing={2}>
          {/* coloumn */}
          <Grid item direction="column" spacing={2} xs={8}>
            <Grid marginTop={2}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Supplier">
                  <Stack
                    direction="row"
                    display="flex"
                    justifyContent="space-around"
                  >
                    <Stack width="70%">
                      <AutoComplete
                        getOptionLabel={(item: any) => item.warehouse}
                        label="Search by supplier name, email, phone number"
                        options={[
                          { id: crypto.randomUUID(), warehouse: "warehouse1" },
                        ]}
                      />
                    </Stack>
                    <Button
                      sx={{
                        width: "inherit",
                        borderRadius: "5px",
                        // padding: "5px 25px",
                        backgroundColor: palette.warning.dark,
                        color: "#fff",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: palette.warning.dark,
                          opacity: 0.6,
                          boxShadow: "none",
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        setOpenSupplier(true);
                      }}
                    >
                      <AddIcon
                        sx={{
                          fontSize: 18,
                          mr: 1,
                        }}
                      />
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
                      >
                        New Supplier
                      </Typography>
                    </Button>
                  </Stack>
                  <Divider sx={{ my: 2 }} />
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
                            label="Address"
                            name="address"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            label="City"
                            name="city"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            label="Zip Code"
                            name="zipcode"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
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
                            label="Address"
                            name="address"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            label="City"
                            name="city"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            label="Zip Code"
                            name="zipcode"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
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
          <Grid item marginTop={2} xs={4}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Details">
                <Stack gap={2}>
                  <AutoComplete
                    getOptionLabel={(item: any) => item.warehouse}
                    label="Ship to warehouse*"
                    options={[
                      { id: crypto.randomUUID(), warehouse: "warehouse1" },
                    ]}
                  />
                </Stack>
                <Stack marginTop={2}>
                  <AutoComplete
                    getOptionLabel={(item: any) => item.company}
                    label="Company*"
                    options={[{ id: crypto.randomUUID(), company: "company1" }]}
                  />
                </Stack>
                <Stack marginTop={2}>
                  <TextField
                    id="productHeight"
                    label="Order date"
                    name="productHeight"
                    size="small"
                    type="date"
                  />
                </Stack>
                <Stack marginTop={2}>
                  <TextField
                    id="productHeight"
                    label="Expected date"
                    name="productHeight"
                    size="small"
                    type="date"
                  />
                </Stack>
                <Stack marginTop={2}>
                  <TextField
                    isSelect
                    id="paymenttype"
                    label="Payment Type"
                    menuItems={paymentType}
                    name="paymenttype"
                    size="small"
                  />
                </Stack>
                <Stack marginTop={2}>
                  <TextField
                    isSelect
                    id="paymentterm"
                    label="Payment Term"
                    menuItems={paymentTerm}
                    name="paymentterm"
                    size="small"
                  />
                </Stack>
                <Stack marginTop={2}>
                  <TextField
                    id="productHeight"
                    label="Supplier reference id"
                    name="productHeight"
                    size="small"
                  />
                </Stack>
                <Stack marginTop={2}>
                  <TextField id="tags" label="Tags" name="tags" size="small" />
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
                  multiline
                  id="notes"
                  label="Notes"
                  name="notes"
                  rows={5}
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
      </Container>
      <AddSupplier
        handleClose={() => setOpenSupplier(!openSupplier)}
        open={openSupplier}
      />
    </>
  );
}

export default PurchaseOrderUpdate;

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

function LineItems() {
  const newtheme = useSelector((state: any) => state.theme);
  const [openBrowsItem, setOpenBrowsItem] = React.useState(false);
  return (
    <Card>
      <CustomCardContent title="Line Items">
        <Stack
          alignItems="start"
          direction="row"
          gap={5}
          justifyContent="space-between"
        >
          <TextField label="Search" name="Search" size="small" value="" />

          <Button
            startIcon={
              <AddIcon
                sx={{
                  fontSize: 12,
                }}
              />
            }
            sx={{
              width: "inherit",
              borderRadius: "5px",
              // display: "block",
              // padding: "5px 25px",
              backgroundColor: palette.warning.dark,
              color: "#fff",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: palette.warning.dark,
                opacity: 0.6,
                boxShadow: "none",
              },
            }}
            variant="contained"
            onClick={() => {
              setOpenBrowsItem(true);
            }}
          >
            Browse
          </Button>
        </Stack>

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
