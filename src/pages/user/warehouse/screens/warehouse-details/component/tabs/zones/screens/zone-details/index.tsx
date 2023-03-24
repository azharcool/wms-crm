import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import ZoanForm from "../../component/component/ZoneForm";

function ZoneDetails() {
  const [open, setOpen] = useState(false);
  const [editable, setEditable] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCose = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    setOpen(true);
  };
  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        setOpen(false);
        // history.push(`123436/${AppRoutes.CATALOG.categoryDetail}`);
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
      title: "Edit",
      onClick: () => {
        // setEditable(true);
        // setTimeout(() => {
        //   nameRef.current?.focus();
        // }, 500);
        handleEdit();
      },
      icon: (
        <EditIcon
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
        // setEditable(false);
        // navigate(-1);
        // handleSubmit();
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
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CardContent sx={{ paddingTop: 0 }}>
            <TableToolbar
              breadcrumbs={[
                { link: "Warehouse", to: "/warehouse" },
                { link: "Warehouse Details", to: "/warehouse-details/1" },
              ]}
              rightActions={
                editable
                  ? rightActionsData.filter((i) => i.title !== "Edit")
                  : rightActionsData.filter((i) => i.title === "Edit")
              }
              title="Zone Details"
            />
            <Grid container marginTop={2} spacing={2}>
              <Grid item xs={8}>
                <Card
                  sx={{
                    flex: 1,
                  }}
                >
                  <CustomCardContent title="Details">
                    <Box sx={{ ml: 2, mt: 2 }}>
                      <Grid container spacing={2}>
                        <Grid xs={5}>
                          <Box
                            sx={{
                              // display: "flex",
                              // flexDirection: "column",
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
                              test
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid xs={5}>
                          <Box
                            sx={{
                              // display: "flex",
                              // flexDirection: "column",
                              gap: 2,
                              marginBottom: "1rem",
                              marginLeft: "4rem",
                            }}
                          >
                            <Typography
                              color="text.secondary"
                              sx={{ fontSize: 14 }}
                            >
                              Area
                            </Typography>
                            <Typography
                              sx={{ fontSize: 16, fontWeight: "500" }}
                              variant="h6"
                            >
                              Testing
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Box sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                          <Grid xs={5}>
                            <Box
                              sx={{
                                // display: "flex",
                                // flexDirection: "column",
                                gap: 2,
                                marginBottom: "1rem",
                              }}
                            >
                              <Typography
                                color="text.secondary"
                                sx={{ fontSize: 14 }}
                              >
                                Label
                              </Typography>
                              <Typography
                                sx={{ fontSize: 16, fontWeight: "500" }}
                                variant="h6"
                              >
                                name
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid xs={5}>
                            <Box
                              sx={{
                                // display: "flex",
                                // flexDirection: "column",
                                gap: 2,
                                marginBottom: "1rem",
                                marginLeft: "4rem",
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
                                Lable1
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </CustomCardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card
                  sx={{
                    flex: 1,
                  }}
                >
                  <CustomCardContent title="Setting">
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
                        <Chip
                          color="success"
                          label="Active"
                          variant="outlined"
                        />
                      </Typography>
                    </Box>
                  </CustomCardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Container>
      </Box>
      <ZoanForm handleClose={handleCose} open={open} />
    </DashboardLayout>
  );
}

export default ZoneDetails;
