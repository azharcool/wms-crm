import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import DashedCard from "components/card/DashedCard";
import { ToolBarButton } from "components/table-toolbar";
import TextField from "components/textfield";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function General() {
  const isTrue = true;

  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      transfer: { update },
    },
  } = AppRoutes;

  return (
    <Container maxWidth={false} sx={{ my: 2 }}>
      <Grid sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
        <ToolBarButton
          handleClick={() => {
            // toggleEditable();
            navigate(`/${layout}/${update}/1`);
          }}
          icon={
            <EditIcon
              sx={{
                fontSize: 18,
                mr: 1,
              }}
            />
          }
          title="Edit"
        />
      </Grid>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Grid>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Details">
                <Grid
                  direction="row"
                  display="flex"
                  justifyContent="space-around"
                >
                  <Stack direction="column" gap={2}>
                    <DashedCard title="WAREHOUSE">
                      <Box
                        sx={{
                          background: "#dfe3f5",
                          color: "#2545B8",
                          padding: "3px 12px",
                          borderRadius: "5px",
                          fontSize: "12px",
                        }}
                      >
                        -{/* {adjustmentDetails?.data.warehouseName || "-"} */}
                      </Box>
                    </DashedCard>
                  </Stack>
                  <Stack direction="column" gap={2}>
                    <DashedCard title="REASON">
                      <Box
                        sx={{
                          background: "#dfe3f5",
                          color: "#50cd89",
                          padding: "3px 12px",
                          borderRadius: "5px",
                          fontSize: "12px",
                        }}
                      >
                        -{/* {adjustmentDetails?.data.reason || "-"} */}
                      </Box>
                    </DashedCard>
                  </Stack>
                  <Stack direction="column" gap={2}>
                    <DashedCard title="REFERENCE ID">
                      <Box
                        sx={{
                          background: "#dfe3f5",
                          color: "#009ef7",
                          padding: "3px 12px",
                          borderRadius: "5px",
                          fontSize: "12px",
                        }}
                      >
                        -{/* {adjustmentDetails?.data.referenceId || "-"} */}
                      </Box>
                    </DashedCard>
                  </Stack>
                  <Stack direction="column" gap={2}>
                    <DashedCard title="OWNER">
                      <Box
                        sx={{
                          background: "#dfe3f5",
                          color: "#009ef7",
                          padding: "3px 12px",
                          borderRadius: "5px",
                          fontSize: "12px",
                        }}
                      >
                        {/* {adjustmentDetails?.data.owner} */} -
                      </Box>
                    </DashedCard>
                  </Stack>
                </Grid>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid xs={12}>{/* <StockTable data={[]} /> */}</Grid>
        <Grid
          container
          gap={2}
          marginTop={4}
          sx={{ display: "flex", justifyContent: "space-between" }}
          xs={12}
        >
          <Grid item sx={{ border: "0.5px #d9d9d9 solid" }} xs={5}>
            <Card
              sx={{
                flex: 1,
                height: "100%",
              }}
            >
              <DialogTitle>
                <Typography component="h6">Adjustment Summary</Typography>
              </DialogTitle>
              <Divider />
              <DialogContent>
                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    darkDisable
                    disabled={isTrue}
                    name="qty"
                    label="Total adjusted quantity"
                    // value={adjustmentDetails?.data.totalQuantity || "-"}
                    size="small"
                  />
                  <TextField
                    darkDisable
                    disabled={isTrue}
                    name="unit"
                    label="Total adjusted value"
                    // value={
                    //   adjustmentDetails?.data.totalValue
                    //     ? `INR ${adjustmentDetails?.data.totalValue}.00`
                    //     : "-"
                    // }
                    size="small"
                  />
                </Stack>
              </DialogContent>
            </Card>
          </Grid>

          <Grid item sx={{ border: "1px #d9d9d9 solid" }} xs={5}>
            <Card
              sx={{
                flex: 1,
                height: "100%",
              }}
            >
              <DialogTitle>
                <Typography component="h6">Notes</Typography>
              </DialogTitle>
              <Divider />
              <DialogContent>
                <Typography>
                  {/* {adjustmentDetails?.data.notes || "-"} */}-
                </Typography>
              </DialogContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default General;
