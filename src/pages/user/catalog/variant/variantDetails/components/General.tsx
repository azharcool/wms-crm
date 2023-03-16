import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { grey } from "@mui/material/colors";

interface ICustomAccordian {
  title: string;
  children: React.ReactNode;
}
function CustomAccordian(props: ICustomAccordian) {
  const { title, children } = props;
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
export default function General() {
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={8} xs={6}>
          <Card sx={{ p: 3 }}>
            <Typography>Options</Typography>
            <Divider sx={{ width: "100%", pt: 2 }} />
            <Grid container columns={10} spacing={2}>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                  Laptop
                </Typography>
                <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "600" }}>
                  Crt
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                  Mobile
                </Typography>
                <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "600" }}>
                  android
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ pt: 2 }}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Mobile
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "600" }}>
                android
              </Typography>
            </Grid>
          </Card>
          <Card sx={{ p: 3, mt: 3 }}>
            <Typography>Details</Typography>
            <Divider sx={{ width: "100%", pt: 2 }} />
            <Grid sx={{ pt: 2 }}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Details
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "600" }}>
                android
              </Typography>
            </Grid>
            <Grid sx={{ pt: 2 }}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Description
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "600" }}>
                Not provided
              </Typography>
            </Grid>
          </Card>
          <Card sx={{ p: 3, mt: 3 }}>
            <Typography>Options</Typography>
            <Divider sx={{ width: "100%", pt: 2 }} />
            <Grid sx={{ pt: 2 }}>
              <Box
                sx={{
                  ...commonStyles,
                  borderColor: "grey.500",
                  width: "450px",
                  height: "200px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  No Images
                </Typography>
              </Box>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={4} xs={6}>
          {/* <Card> */}
          <CustomAccordian title="Supply">
            <Divider />
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Description
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                Not provided
              </Typography>
            </Grid>
          </CustomAccordian>
          <CustomAccordian title="Tracking">
            <Divider />
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                SKU
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                LECRADWI-274585-286449
              </Typography>
            </Grid>
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Barcode
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                2677078251252
              </Typography>
            </Grid>
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Unique Barcoding strategy
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                Per SKU or Set
              </Typography>
              <Grid container columns={10} spacing={2}>
                <Grid item xs={5}>
                  <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                    Quantity
                  </Typography>
                  <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                    1
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                    UoM
                  </Typography>
                  <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                    Not provided
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CustomAccordian>
          <CustomAccordian title="Dimensions">
            <Divider />
            <Stack direction="row" gap={2}>
              <Grid container columns={10} spacing={2}>
                <Grid item xs={5}>
                  <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                    Height
                  </Typography>
                  <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                    0.00 cm
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                    Width
                  </Typography>
                  <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                    0.00 cm
                  </Typography>
                </Grid>
              </Grid>
            </Stack>

            <Grid container columns={10} spacing={2}>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                  Length
                </Typography>
                <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                  0.00 cm
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                  Length
                </Typography>
                <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                  0.00 Kg
                </Typography>
              </Grid>
            </Grid>
          </CustomAccordian>
          <CustomAccordian title="Reorder">
            <Divider />
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Reorder Point
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                0
              </Typography>
            </Grid>
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Reorder Quantity
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                0
              </Typography>
            </Grid>
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Min Replenishment Point
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                0
              </Typography>
            </Grid>
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Max Replenishment Point
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                0
              </Typography>
            </Grid>
          </CustomAccordian>
          <CustomAccordian title="Fulfillment">
            <Divider />
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 16, pt: 2, color: grey[500] }}>
                Fulfillment
              </Typography>
              <Typography sx={{ fontSize: 16, pt: 2, color: grey[500] }}>
                Sync Supply Price
              </Typography>
            </Grid>
          </CustomAccordian>
          {/* </Card> */}
        </Grid>
      </Grid>
    </Box>
  );
}
