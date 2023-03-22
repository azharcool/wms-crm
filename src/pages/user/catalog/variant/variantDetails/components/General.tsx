import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import { IGetByIdVariantData } from "types/catalog/variants/getByIdVariantResponse";

import CustomCardContent from "components/card/CustomCardContent";
import { useEffect } from "react";

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: IGetByIdVariantData;
  formik: FormikProps<any>;
}

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

export default function General(props: IGeneral) {
  const { isTrue, nameRef, editable, data, formik } = props;
  // const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (data) {
      formik?.setFieldValue("productName", data?.productName || "");
      formik?.setFieldValue("optionName", data?.optionName || "");
      formik?.setFieldValue("variantName", data?.variantName || "");
      formik?.setFieldValue("height", data?.height);
      formik?.setFieldValue("weight", data?.weight);
      formik?.setFieldValue("width", data?.width);
      formik?.setFieldValue("length", data?.length);
      formik?.setFieldValue("mrp", data?.mrp || "");
      formik?.setFieldValue("retailPrice", data?.retailPrice || "");
      formik?.setFieldValue("supplyPrice", data?.supplyPrice);
      formik?.setFieldValue("sku", data?.sku || "");
      formik?.setFieldValue("barcode", data?.barcode || "");
      formik?.setFieldValue("value", data?.value || "");
      formik?.setFieldValue("crossDocking", data?.crossDocking || "");
    }
  }, [data]);

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
                  id="optionName"
                  label="Name"
                  name="optionName"
                  //   nameRef={nameRef}
                  size="small"
                  value={formik?.values.optionName}
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
                id="supplier"
                label="Supplier"
                name="supplier"
                //   nameRef={nameRef}
                size="small"
                value="Not provided"
                onChange={() => {}}
              />
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Tracking">
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="sku"
                label="SKU"
                name="sku"
                //   nameRef={nameRef}
                size="small"
                value={formik?.values.sku}
                onChange={() => {}}
              />

              <TextField
                disabled={istrue}
                id="barcode"
                label="Barcode"
                name="barcode"
                size="small"
                value={formik?.values.barcode}
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
            <Stack direction="row" gap={2}>
              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>cm</Typography>}
                id="height"
                label="Height"
                name="height"
                size="small"
                value={formik?.values.height}
                onChange={() => {}}
              />

              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>cm</Typography>}
                id="width"
                label="Width"
                name="width"
                size="small"
                value={formik?.values.width}
                onChange={() => {}}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>cm</Typography>}
                id="length"
                label="Lenght"
                value={formik?.values.length}
                onChange={() => {}}
                name="length"
                //   nameRef={nameRef}
                size="small"
              />

              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>kg</Typography>}
                id="weight"
                label="Weight"
                name="weight"
                size="small"
                value={formik?.values.weight}
                onChange={() => {}}
              />
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Reorder">
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
                iconEnd
                disabled={istrue}
                icon={<Typography>INR</Typography>}
                id="supplyPrice"
                label="Sync Supply Price"
                name="supplyPrice"
                size="small"
                value={formik.values.supplyPrice}
                onChange={() => {}}
              />
            </Stack>
          </CustomAccordian>
        </Grid>
      </Grid>
    </Box>
  );
}
