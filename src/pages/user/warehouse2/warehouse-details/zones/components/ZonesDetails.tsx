import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { useState } from "react";
import ZonesCreate from "./ZonesCreate";

function ZonesDetails() {
  const [formOpen, setFormOpen] = useState(false);

  const handleClose = (status?: boolean) => {
    const open = status || false;
    setFormOpen(open);
  };

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Edit",
      onClick: () => {
        handleClose(true);
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
  ];

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={[
            { link: "Warehouse", to: "/warehouse" },
            { link: "Warehouse Details", to: "/warehouse-details/1" },
          ]}
          buttonText="Edit"
          rightActions={rightActionsData}
          title="Area Details"
        />
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={8}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Details">
                <Stack direction="row" gap={2} justifyContent="space-between">
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Warehouse"
                    id="warehouse"
                    name="warehouse"
                    size="small"
                    value="Warehouse"
                  />
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Area"
                    id="area"
                    name="area"
                    size="small"
                    value="Warehouse"
                  />
                </Stack>

                <Stack direction="row" gap={2} justifyContent="space-between">
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Label"
                    id="label"
                    name="label"
                    size="small"
                    value="Warehouse"
                  />
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Name"
                    id="name"
                    name="name"
                    size="small"
                    value="Warehouse"
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
                    <Chip color="success" label="Active" variant="outlined" />
                  </Typography>
                </Box>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
      {formOpen ? (
        <ZonesCreate handleClose={() => handleClose()} open={formOpen} />
      ) : null}
    </Container>
  );
}

export default ZonesDetails;
