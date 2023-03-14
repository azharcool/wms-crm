import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  DialogContent,
  DialogTitle,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField as InputField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { useState } from "react";
import palette from "theme/palette";
import AddSupplier from "./component/SupplierForm";

function AddPurchaseOrder() {
  const [isAddSupplier, setAddSupplier] = useState(false);
  const handleSave = () => {};

  const handleAdd = () => {
    setAddSupplier(true);
  };

  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <TableToolbar
            isAdd
            breadcrumbs={[{ link: "Purchase order", to: "/purchase-order" }]}
            buttonText="Save"
            handleClick={handleSave}
            title="New Purchase Order"
          />
          <Card>
            <CardContent sx={{ paddingTop: 2, background: "#fefeff" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", flex: 4, gap: 2 }}>
                  <Card sx={{ background: "#ffffff", flex: 3 }}>
                    <Card sx={{ background: "#ffffff", flex: 3, mt: 4 }}>
                      <DialogTitle>Supplier</DialogTitle>
                      <Divider sx={{ my: 1 }} />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          my: 2,
                          px: 2,
                        }}
                      >
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField
                              {...params}
                              label="Search by supplier name, email, phone number"
                            />
                          )}
                          sx={{ width: 450 }}
                        />
                        <Button
                          sx={{
                            // backgroundColor: palette.info.main,
                            width: "inherit",
                            height: "45px",
                            borderRadius: "5px",
                            backgroundColor: palette.warning.dark,
                            color: "#fff",
                          }}
                          variant="contained"
                          onClick={handleAdd}
                        >
                          <AddCircleIcon
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
                      </Box>
                      <Divider sx={{ my: 1 }} />
                      {/* main */}
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 2,
                            justifyContent: "space-around",
                            flex: 3,
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              // gap: 2,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 15 }}
                            >
                              Company name
                            </Typography>
                            <Typography color="" sx={{ fontSize: 15 }}>
                              smart
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 15 }}
                            >
                              Contact Person
                            </Typography>
                            <Typography color="" sx={{ fontSize: 15 }}>
                              smart
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 15 }}
                            >
                              Phone number
                            </Typography>
                            <Typography color="" sx={{ fontSize: 15 }}>
                              893898982
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            flex: 2,
                          }}
                        >
                          <Box
                            sx={{
                              border: 1,
                              borderColor: "#eee",
                              m: 2,
                              flex: 1,
                            }}
                          >
                            <DialogTitle>Supplier address</DialogTitle>
                            <Divider sx={{ my: 1 }} />
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="Address"
                                name="address"
                                placeholder="Address"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="City"
                                name="address"
                                placeholder="City"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="Zip code"
                                name="address"
                                placeholder="Zip Code"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="Country"
                                name="address"
                                placeholder="Country"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              border: 1,
                              borderColor: "#eee",
                              m: 2,
                              flex: 1,
                            }}
                          >
                            <DialogTitle>Billing address</DialogTitle>
                            <Divider sx={{ my: 1 }} />
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="Address"
                                name="address"
                                placeholder="Address"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="City"
                                name="address"
                                placeholder="City"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="Zip code"
                                name="address"
                                placeholder="Zip Code"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                                m: 2,
                              }}
                            >
                              <TextField
                                //   error={!!touched.roleName && !!errors.roleName}
                                //   helperText={
                                //     (touched.roleName &&
                                //       errors &&
                                //       errors.roleName) ||
                                //     ""
                                //   }
                                label="Country"
                                name="address"
                                placeholder="Country"
                                style={{ width: "250px" }}
                                //   value={values.roleName}
                                //   onBlur={handleBlur("roleName")}
                                //   onChange={handleChange("roleName")}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      {/* main */}
                      {/* notAdd */}
                      {/* <Box sx={{display:"flex", justifyContent:"center", alignItems:'center', height:'50vh'}}>
                        <Typography variant="title1">A supplier is not added</Typography>
                      </Box> */}
                      {/* notAdd */}
                    </Card>
                  </Card>
                  <DialogContent sx={{ background: "#fff", flex: 1 }}>
                    <DialogTitle>Details</DialogTitle>
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
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField {...params} label="Ship to warehouse" />
                          )}
                          sx={{ width: 250 }}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField {...params} label="Company" />
                          )}
                          sx={{ width: 250 }}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField {...params} label="Order date" />
                          )}
                          sx={{ width: 250 }}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField {...params} label="Expected date" />
                          )}
                          sx={{ width: 250 }}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField {...params} label="Payment type" />
                          )}
                          sx={{ width: 250 }}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField
                              {...params}
                              label="Supplier reference id"
                            />
                          )}
                          sx={{ width: 250 }}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          renderInput={(params) => (
                            <InputField {...params} label="Tags" />
                          )}
                          sx={{ width: 250 }}
                        />
                      </Box>
                    </Box>
                  </DialogContent>
                </Box>
              </Box>
              <Card sx={{ mt: 4 }}>
                <DialogContent sx={{ background: "#fff" }}>
                  <DialogTitle>Line Items</DialogTitle>
                  <Divider sx={{ my: 1 }} />
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell component="th">Image</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Supplier SKU</TableCell>
                        <TableCell>Order Qty</TableCell>
                        <TableCell>Discount</TableCell>
                        <TableCell>Taxes</TableCell>
                        <TableCell>Receive Qty</TableCell>
                        <TableCell>Unit cost</TableCell>
                        <TableCell>Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableCell component="td" scope="row">
                        -
                      </TableCell>
                      <TableCell>Coolbookwala</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableBody>
                  </Table>
                </DialogContent>
              </Card>
              <Box sx={{ display: "flex", flexDirection: "row", flex: 2 }}>
                <Card sx={{ mt: 4, m: 1, flex: 1 }}>
                  <DialogContent sx={{ background: "#fff" }}>
                    <DialogTitle>Invoice Summery</DialogTitle>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Line items</Typography>
                      <Typography>1</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Unit ordered</Typography>
                      <Typography>1</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Received items</Typography>
                      <Typography>0</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Subtotal</Typography>
                      <Typography>INR 0.00</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Discount price</Typography>
                      <Typography>INR 0.00</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Taxes</Typography>
                      <Typography>INR 0.00</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Shipping charges</Typography>
                      <Typography>INR 0.00</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ fontSize: 15 }} variant="h3">
                        Total
                      </Typography>
                      <Typography>INR 0.00</Typography>
                    </Box>
                  </DialogContent>
                </Card>
                <Card sx={{ mt: 4, m: 1, flex: 1 }}>
                  <DialogContent sx={{ background: "#fff" }}>
                    <DialogTitle>Supplier notes</DialogTitle>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        m: 2,
                      }}
                    >
                      <TextField
                        //   error={!!touched.roleName && !!errors.roleName}
                        //   helperText={
                        //     (touched.roleName &&
                        //       errors &&
                        //       errors.roleName) ||
                        //     ""
                        //   }
                        multiline
                        name="notes"
                        placeholder="Notes"
                        rows={5}
                        size="medium"
                        style={{ width: "450px" }}
                        //   value={values.roleName}
                        //   onBlur={handleBlur("roleName")}
                        //   onChange={handleChange("roleName")}
                      />
                    </Box>
                  </DialogContent>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddSupplier
        handleClose={() => setAddSupplier(false)}
        open={isAddSupplier}
      />
    </DashboardLayout>
  );
}

export default AddPurchaseOrder;
