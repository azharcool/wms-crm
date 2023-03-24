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
import useGetByIdWarehouseArea from "hooks/querys/warehouse/area/useGetByIdWarehouseArea";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import AreasCreate from "./AreasCreate";

function AreasDetails() {
  const [formOpen, setFormOpen] = useState(false);
  const { areaId } = useParams();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { data: warehouseDetailResponse } = useGetByIdWarehouseArea({
    warehouseId: getSelectedWarehouse.id,
    id: Number(areaId),
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
      to: `/warehouse/details/${getSelectedWarehouse.id}/areas/listing`,
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
                </Stack>

                <Stack direction="row" gap={2} justifyContent="space-between">
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Label"
                    id="label"
                    name="label"
                    size="small"
                    value={warehouseDetailResponse?.data.label || ""}
                  />
                  <TextField
                    darkDisable
                    disabled
                    FieldLabel="Name"
                    id="name"
                    name="name"
                    size="small"
                    value={warehouseDetailResponse?.data.name || ""}
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
                        warehouseDetailResponse?.data.status === 1
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
      {formOpen && warehouseDetailResponse ? (
        <AreasCreate
          editData={warehouseDetailResponse?.data}
          handleClose={() => handleClose()}
          open={formOpen}
        />
      ) : null}
    </Container>
  );
}

export default AreasDetails;
