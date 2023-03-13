import React from "react";
import DashboardLayout from "components/dashboard-container";
import {
  Card,
  CardContent,
  DialogTitle,
  Divider,
  Typography,
  Chip,
  DialogContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Autocomplete,
  TextField,
} from "@mui/material";
import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";

function AddPurchaseOrder() {
  const handleSave = () => {};
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
            buttonText="Save"
            handleClick={handleSave}
            title="New Purchase Order"
            breadcrumbs={[{ link: "Purchase order", to: "/purchase-order" }]}
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
                          sx={{ border: 1, borderColor: "#eee", m: 2, flex: 1 }}
                        >
                          <DialogTitle>Supplier address</DialogTitle>
                          <Divider sx={{ my: 1 }} />
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              Address
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              Not Provided
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              City
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              Nagpur
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              Zip code
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              442011
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              Country
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              India
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          sx={{ border: 1, borderColor: "#eee", m: 2, flex: 1 }}
                        >
                          <DialogTitle>Billing address</DialogTitle>
                          <Divider sx={{ my: 1 }} />
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              Address
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              Not Provided
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              City
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              Nagpur
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              Zip code
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              442011
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              m: 2,
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              Country
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              India
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
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
                          sx={{ width: 250 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Ship to warehouse" />
                          )}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          sx={{ width: 250 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Company" />
                          )}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          sx={{ width: 250 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Order date" />
                          )}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          sx={{ width: 250 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Expected date" />
                          )}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          sx={{ width: 250 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Payment type" />
                          )}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          sx={{ width: 250 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Supplier reference id" />
                          )}
                        />
                      </Box>
                      <Box sx={{ my: 1 }}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={[{ label: "aasif" }]}
                          sx={{ width: 250 }}
                          renderInput={(params) => (
                            <TextField {...params} label="Tags" />
                          )}
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
                      <Typography variant="h3" sx={{ fontSize: 15 }}>
                        Total
                      </Typography>
                      <Typography>INR 0.00</Typography>
                    </Box>
                  </DialogContent>
                </Card>
                <Card sx={{ mt: 4, m: 1, flex: 1 }}>
                  <DialogContent sx={{ background: "#fff" }}>
                    <DialogTitle>Supplier notes</DialogTitle>
                    <Divider sx={{ my: 1 }} />
                  </DialogContent>
                </Card>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default AddPurchaseOrder;
