import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import CustomCardContent from "components/card/CustomCardContent";
import ZoanForm from "../../component/component/ZoneForm";
import AddZone from "../../component/AddZone";

function ZoneDetails() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCose = () => {
    setOpen(false);
  };
  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        // setEditable(false);
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
        handleOpen();
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
      onClick: (e: any) => {
        // handleSubmit();
        // setEditable(false);
        // navigate(-1);
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
  const editable = false;
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          {/* <Card> */}
          <CardContent sx={{ paddingTop: 0 }}>
            <TableToolbar
              buttonText="Edit"
              handleClick={handleOpen}
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
                    <Stack direction="row" gap={2}>
                      <TextField
                        disabled
                        // iconEnd
                        // icon={<Inventory2Icon />}
                        id="warehouse"
                        label="Warehouse"
                        name="warehouse"
                        value="warehouse 1"
                        size="small"
                      />
                      <TextField
                        disabled
                        id="area"
                        label="Area"
                        name="area"
                        value="area"
                        size="small"
                      />
                    </Stack>
                    <Stack direction="row" gap={2} mt={3}>
                      <TextField
                        disabled
                        id="label"
                        label="Label"
                        value="122345"
                        name="label"
                        size="small"
                      />

                      <TextField
                        disabled
                        id="name"
                        label="Name"
                        name="name"
                        size="small"
                      />
                    </Stack>
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
                    <TextField
                      disabled
                      label="Status"
                      name="status"
                      value="Active"
                      size="small"
                    />
                  </CustomCardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
          {/* </Card> */}
        </Container>
      </Box>
      <AddZone handleClose={handleCose} open={open} />
    </DashboardLayout>
  );
}

export default ZoneDetails;
