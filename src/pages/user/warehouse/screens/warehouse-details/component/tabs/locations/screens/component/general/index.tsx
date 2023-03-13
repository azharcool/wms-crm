import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import LocationsForm from "../../../component/LocationsForm";

function General() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCose = () => {
    setOpen(false);
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
          <Card>
            <CardContent sx={{ paddingTop: 0 }}>
              <TableToolbar
                buttonText="Edit"
                handleClick={handleOpen}
                title="Location Details"
              />
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", flex: 4, gap: 2 }}>
                    <DialogContent sx={{ background: "#fff", flex: 3 }}>
                      <DialogTitle>Information</DialogTitle>
                      <Divider sx={{ my: 1 }} />
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                          marginBottom: "1rem",
                          flex: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            marginBottom: "1rem",
                          }}
                        >
                          <Typography
                            color="text.secondary"
                            sx={{ fontSize: 14 }}
                          >
                            Warehouse
                          </Typography>
                          <Typography
                            sx={{ fontSize: 16, fontWeight: "500" }}
                            variant="h6"
                          >
                            Warehouse 1
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                          marginBottom: "1rem",
                          flex: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            marginBottom: "1rem",
                          }}
                        >
                          <Typography
                            color="text.secondary"
                            sx={{ fontSize: 14 }}
                          >
                            Name
                          </Typography>
                          <Typography
                            sx={{ fontSize: 16, fontWeight: "500" }}
                            variant="h6"
                          >
                            name
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            marginBottom: "1rem",
                            marginLeft: "4rem",
                          }}
                        >
                          <Typography
                            color="text.secondary"
                            sx={{ fontSize: 14 }}
                          >
                            Lable
                          </Typography>
                          <Typography
                            sx={{ fontSize: 16, fontWeight: "500" }}
                            variant="h6"
                          >
                            Lable1
                          </Typography>
                        </Box>
                      </Box>
                    </DialogContent>
                    <DialogContent sx={{ background: "#fff", flex: 1 }}>
                      <DialogTitle>Setting</DialogTitle>
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
                          <Typography
                            color="text.secondary"
                            sx={{ fontSize: 14 }}
                          >
                            Status
                          </Typography>
                          <Typography
                            sx={{ fontSize: 16, fontWeight: "500" }}
                            variant="h6"
                          >
                            <Chip
                              color="success"
                              label="Active"
                              variant="outlined"
                            />
                          </Typography>
                        </Box>
                      </Box>
                    </DialogContent>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <LocationsForm handleClose={handleCose} open={open} />
    </DashboardLayout>
  );
}

export default General;