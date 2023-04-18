import {
  Box,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
// import Typography from "theme/typography";
import DashedCard from "components/card/DashedCard";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import useGetByUnitNumberUnit from "hooks/querys/catalog/unit/useGetByUnitNumberUnit";
import { useParams } from "react-router-dom";

interface ICustomCard {
  title: string;
  children: React.ReactNode;
}
function CustomCardContent(props: ICustomCard) {
  const { title, children } = props;
  return (
    <>
      <DialogTitle>
        <Typography component="h6">{title}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </>
  );
}

function UnitHistory() {
  const { unitId } = useParams();
  const { data: unitNumberItemResponse } = useGetByUnitNumberUnit({
    unitNumber: Number(unitId),
  });

  return (
    <Container maxWidth={false}>
      <TableToolbar
        buttonText=""
        handleClick={() => {
          // navigate(AppRoutes.CATALOG.productCreate);
        }}
        navTitle="CATELOG"
        rightActions={[]}
        title={unitNumberItemResponse?.data.variantName || ""}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: "16px",
          flex: 1,
        }}
      >
        <Toolbar
          sx={{
            left: {
              lg: 2,
              display: "flex",
              gap: 2,
              flex: 1,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Unit information">
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="variant"
                      label="Variant"
                      name="variant"
                      size="small"
                      value={unitNumberItemResponse?.data.variantName}
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="unitNumber"
                      label="Unit number"
                      name="unitNumber"
                      size="small"
                      value={unitNumberItemResponse?.data.unitNumber}
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="type"
                      label="Type"
                      name="type"
                      size="small"
                      value={unitNumberItemResponse?.data.status}
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="oldQuantity"
                      label="Old quantity"
                      name="oldQuantity"
                      size="small"
                      value={unitNumberItemResponse?.data.oldQuantity}
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="newQuantity"
                      label="New quantity"
                      name="newQuantity"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.newQuantity ||
                        "Not Provided"
                      }
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="source"
                      label="Source"
                      name="source"
                      size="small"
                      value="Not Provided"
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="destination"
                      label="Destination"
                      name="destination"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.destination ||
                        "Not Provided"
                      }
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="serialNumber"
                      label="Serial number"
                      name="serialNumber"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.serialNo || "Not Provided"
                      }
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="batchNumber"
                      label="Batch number"
                      name="batchNumber"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.batchNumber ||
                        "Not Provided"
                      }
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="expiryDate"
                      label="Expiry date"
                      name="expiryDate"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.expiryDate ||
                        "Not Provided"
                      }
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="price"
                      label="Price"
                      name="price"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.price || "Not Provided"
                      }
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="currency"
                      label="Currency"
                      name="currency"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.currency || "Not Provided"
                      }
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="rejected"
                      label="Rejected"
                      name="rejected"
                      size="small"
                      value="Not Provided"
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="company"
                      label="Company"
                      name="company"
                      size="small"
                      value="Not Provided"
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="conditionCode"
                      label="Condition code"
                      name="conditionCode"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.conditionName ||
                        "Not Provided"
                      }
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="container"
                      label="Container"
                      name="container"
                      size="small"
                      value="Not provided"
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      darkDisable
                      disabled
                      id="warehouse"
                      label="Warehouse"
                      name="warehouse"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.warehouseName ||
                        "Not Provided"
                      }
                    />
                    <TextField
                      darkDisable
                      disabled
                      id="locationID"
                      label="Location ID"
                      name="locationID"
                      size="small"
                      value={
                        unitNumberItemResponse?.data.locationName ||
                        "Not Provided"
                      }
                    />
                  </Stack>
                </CustomCardContent>
              </Card>
            </Grid>
            <Grid item xs={2}>
              <Stack direction="column" gap={2}>
                <DashedCard title="Reserved for">
                  <Box
                    sx={{
                      background: "#dfe3f5",
                      color: "#2545B8",
                      padding: "3px 12px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    Not Provided
                  </Box>
                </DashedCard>
                <DashedCard title="Location">
                  <Box
                    sx={{
                      background: "#dfe3f5",
                      color: "#2545B8",
                      padding: "3px 12px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {unitNumberItemResponse?.data.locationName}
                  </Box>
                </DashedCard>
                <DashedCard title="Container">
                  <Box
                    sx={{
                      background: "#dfe3f5",
                      color: "#2545B8",
                      padding: "3px 12px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    Not Provided
                  </Box>
                </DashedCard>
                <DashedCard title="Result Qty">
                  <Box
                    sx={{
                      background: "#f1faff",
                      color: "#009ef7",
                      padding: "3px 12px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    -
                  </Box>
                </DashedCard>
                <DashedCard title="Difference">
                  <Box
                    sx={{
                      background: "#e8fff3",
                      color: "#50cd89",
                      padding: "3px 12px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    -
                  </Box>
                </DashedCard>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </Container>
  );
}

export default UnitHistory;
