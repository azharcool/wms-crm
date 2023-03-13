import React from "react";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function General() {
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 2 , background:'#fefeff'}}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flex: 4, gap: 2 }}>
              <Card sx={{ background: "#ffffff", flex: 3 }}>
                <Card sx={{ background: "#ffffff", flex: 3 }}>
                  <DialogTitle>Status</DialogTitle>
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
                        borderRight: 0.6,
                        borderColor: "#eee",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                        PURCHASE ORDER
                      </Typography>
                      <Chip
                        label="New"
                        sx={{ width: 80,my:1, height: 30 }}
                        color="success"
                        variant="outlined"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRight: 0.6,
                        borderColor: "#eee",
                      }}
                    >
                      <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                        RECEIVE
                      </Typography>
                      <Chip
                        label="New"
                        sx={{ width: 80, my:1,height: 30 }}
                        color="error"
                        variant="outlined"
                      />
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
                      <Typography color="text.secondary" sx={{ fontSize: 15 }}>
                        PAYMENT
                      </Typography>
                      <Chip
                        label="UNPAID"
                        sx={{ width: 80,my:1, height: 30 }}
                        color="error"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </Card>
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
                      <Typography color="text.secondary" sx={{ fontSize: 15 }}>
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
                      <Typography color="text.secondary" sx={{ fontSize: 15 }}>
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
                      <Typography color="text.secondary" sx={{ fontSize: 15 }}>
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
                      flex:2
                    }}
                  >
                    <Box
                      sx={{ border: 1, borderColor: "#eee", m: 2, flex:1 }}
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
                      sx={{ border: 1, borderColor: "#eee", m: 2 ,flex:1}}
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
                      Default warehouse (Demo)
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Company
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      Aasif
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Order date
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      2023-03-20
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Expected date
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      2023-03-20
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Payment type
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
                    >
                      Cash
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Payment term
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "300" }}
                      variant="h6"
                      color="text.secondary"
                    >
                      not provided
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Supplier reference id
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "300" }}
                      variant="h6"
                      color="text.secondary"
                    >
                      not provided
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                      Tags
                    </Typography>
                    <Typography
                      sx={{ fontSize: 16, fontWeight: "500" }}
                      variant="h6"
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
          <Box sx={{display:'flex', flexDirection:'row', flex:2}}>
          <Card sx={{ mt: 4,m:1, flex:1}}>
            <DialogContent sx={{ background: "#fff" }}>
              <DialogTitle>Invoice Summery</DialogTitle>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Line items</Typography>
                <Typography>1</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Unit ordered</Typography>
                <Typography>1</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Received items</Typography>
                <Typography>0</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Subtotal</Typography>
                <Typography>INR 0.00</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Discount price</Typography>
                <Typography>INR 0.00</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Taxes</Typography>
                <Typography>INR 0.00</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Shipping charges</Typography>
                <Typography>INR 0.00</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h3" sx={{fontSize:15}}>Total</Typography>
                <Typography>INR 0.00</Typography>
              </Box>
            </DialogContent>
          </Card>
          <Card sx={{ mt: 4, m:1,flex:1}}>
            <DialogContent sx={{ background: "#fff" }}>
              <DialogTitle>Supplier notes</DialogTitle>
              <Divider sx={{ my: 1 }} />
              
            </DialogContent>
          </Card>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default General;
