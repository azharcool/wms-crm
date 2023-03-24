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
import useGetByIdZone from "hooks/querys/warehouse/zone/useGetByIdZone";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import ZonesCreate from "./ZonesCreate";

function ZonesDetails() {
  const [formOpen, setFormOpen] = useState(false);
  const { zoneId } = useParams();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { data: zoneDetailResponse } = useGetByIdZone({
    warehouseId: getSelectedWarehouse.id,
    id: Number(zoneId),
  });

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

  const breadcrumbs = [
    { link: "Warehouse", to: "/warehouse/listing" },
    {
      link: `${getSelectedWarehouse.name}`,
      to: `/warehouse/details/${getSelectedWarehouse.id}/zones/listing`,
    },
  ];

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={breadcrumbs}
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
                    value={getSelectedWarehouse.name}
                  />
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Area"
                    id="area"
                    name="area"
                    size="small"
                    value={zoneDetailResponse?.data?.areaName}
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
                    value={zoneDetailResponse?.data.label}
                  />
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Name"
                    id="name"
                    name="name"
                    size="small"
                    value={zoneDetailResponse?.data.name}
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
                    <Chip
                      color="success"
                      label={
                        zoneDetailResponse?.data.status === 1
                          ? "Active"
                          : "InActive"
                      }
                      variant="outlined"
                    />
                  </Typography>
                </Box>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
      {formOpen && zoneDetailResponse ? (
        <ZonesCreate
          editData={zoneDetailResponse?.data}
          handleClose={() => handleClose()}
          open={formOpen}
        />
      ) : null}
    </Container>
  );
}

export default ZonesDetails;
