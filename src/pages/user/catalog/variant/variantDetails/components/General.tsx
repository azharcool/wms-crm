import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import TextField from "components/textfield";

import CustomCardContent from "components/card/CustomCardContent";
import { useState } from "react";

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
  const [editable, setEditable] = useState(false);

  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
  };
  const istrue = !editable;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={8} xs={6}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="row" gap={2}>
                <TextField
                  disabled={istrue}
                  id="categoryName"
                  label="Laptop"
                  name="categoryName"
                  //   nameRef={nameRef}
                  size="small"
                  value="ssd"
                  onChange={() => {}}
                />

                <TextField
                  disabled={istrue}
                  id="categoySlug"
                  label="mobile"
                  name="categoySlug"
                  size="small"
                  value="android"
                  onChange={() => {}}
                />
              </Stack>
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="headphones"
                name="categoySlug"
                size="small"
                value="wireless"
                onChange={() => {}}
              />
            </CustomCardContent>
          </Card>

          <Card
            sx={{
              flex: 1,
              mt: 2,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="row" gap={2}>
                <TextField
                  disabled={istrue}
                  id="categoryName"
                  label="Name"
                  name="categoryName"
                  //   nameRef={nameRef}
                  size="small"
                  value="lenovo ssd, adroid, WIRELESS"
                  onChange={() => {}}
                />

                <TextField
                  disabled={istrue}
                  id="categoySlug"
                  label="Description"
                  name="categoySlug"
                  size="small"
                  value="Not provided"
                  onChange={() => {}}
                />
              </Stack>
            </CustomCardContent>
          </Card>
          <Card sx={{ flex: 1, mt: 2 }}>
            <CustomCardContent title="Options">
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
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item md={4} xs={6}>
          {/* <Card> */}
          <CustomAccordian title="Supply">
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="Description"
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value="Not provided"
                onChange={() => {}}
              />
            </Stack>
            {/* <Divider />
            <Grid sx={{}}>
              <Typography sx={{ fontSize: 13, pt: 2, color: grey[500] }}>
                Description
              </Typography>
              <Typography sx={{ fontSize: 14, pt: 2, fontWeight: "500" }}>
                Not provided
              </Typography>
            </Grid> */}
          </CustomAccordian>
          <CustomAccordian title="Tracking">
            <Divider />
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="SKU"
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value="LESSADWI-274585-286451"
                onChange={() => {}}
              />

              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Barcode"
                name="categoySlug"
                size="small"
                value="5132234447589"
                onChange={() => {}}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Unique Barcoding strategy"
                name="categoySlug"
                size="small"
                value="Per SKU or Set"
                onChange={() => {}}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Barcode"
                name="categoySlug"
                size="small"
                value="Per SKU or Set"
                onChange={() => {}}
              />
              <Stack direction="row" gap={2}>
                <TextField
                  disabled={istrue}
                  id="categoryName"
                  label="Quantity"
                  name="categoryName"
                  //   nameRef={nameRef}
                  size="small"
                  value="1"
                  onChange={() => {}}
                />

                <TextField
                  disabled={istrue}
                  id="categoySlug"
                  label="UoM"
                  name="categoySlug"
                  size="small"
                  value="Not provided"
                  onChange={() => {}}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Dimensions">
            <Divider />
            <Stack direction="row" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="Height"
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value="0.00 cm"
                onChange={() => {}}
              />

              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Width"
                name="categoySlug"
                size="small"
                value="0.00 cm"
                onChange={() => {}}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="Lenght"
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value="0.00 cm"
                onChange={() => {}}
              />

              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Weight"
                name="categoySlug"
                size="small"
                value="0.00 cm"
                onChange={() => {}}
              />
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Reorder">
            <Divider />
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="Reorder Point "
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value="0"
                onChange={() => {}}
              />

              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Reorder Quantity "
                name="categoySlug"
                size="small"
                value="0"
                onChange={() => {}}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Min Replenishment Point"
                name="categoySlug"
                size="small"
                value="0"
                onChange={() => {}}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Max Replenishment Point"
                name="categoySlug"
                size="small"
                value="0"
                onChange={() => {}}
              />
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Fulfillment">
            <Divider />
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="Fulfillment"
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value=""
                onChange={() => {}}
              />

              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Sync Supply Price"
                name="categoySlug"
                size="small"
                value=""
                onChange={() => {}}
              />
            </Stack>
            {/* <Grid sx={{}}>
              <Typography sx={{ fontSize: 16, pt: 2, color: grey[500] }}>
                Fulfillment
              </Typography>
              <Typography sx={{ fontSize: 16, pt: 2, color: grey[500] }}>
                Sync Supply Price
              </Typography>
            </Grid> */}
          </CustomAccordian>
          {/* </Card> */}
        </Grid>
      </Grid>
    </Box>
  );
}
