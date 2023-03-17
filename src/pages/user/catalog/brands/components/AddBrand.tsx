import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Card, Grid, Stack } from "@mui/material";

import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const itemsLabel = [
  {
    id: crypto.randomUUID(),
    value: "Image",
  },
  {
    id: crypto.randomUUID(),
    value: "Variant",
  },
  {
    id: crypto.randomUUID(),
    value: "SKU",
    subTitle: "Generate Sku",
  },
  {
    id: crypto.randomUUID(),
    value: "Barcode",
    subTitle: "Generate barcode",
  },
  {
    id: crypto.randomUUID(),
    value: "Supply",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "M.R.P",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "Retail price",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "Weight/Dimensions",
  },
  {
    id: crypto.randomUUID(),
    value: "Cross docking",
  },
  {
    id: crypto.randomUUID(),
    value: "Enabled",
  },
];

interface IValue {
  parentId: string;
  id: string;
  value: string;
}
interface IVariant {
  id: string;
  optionName: string;
  values: IValue[];
  value: string;
}

interface IWeightAndDimensions {
  weight: string;
  width: string;
  height: string;
  lenght: string;
}

interface IVariantItem {
  id: string;
  image: string;
  variant: string;
  variantLabel: string;
  sku: string;
  barcode: string;
  supplyPrice: string;
  MRP: string;
  retailPrice: string;
  weightAndDimensions: IWeightAndDimensions;
}

interface IAddVariant {
  open: boolean;
  handleClose: () => void;
}
function AddBrand(props: IAddVariant) {
  const { open, handleClose } = props;
  const [variants, setVariants] = useState<IVariant[]>([]);
  const [items, setItems] = useState<IVariantItem[]>([]);
  const [editable, setEditable] = useState(false);

  const istrue = !editable;
  return (
    <Slider
      buttonText="save"
      handleChange={() => {}}
      handleClose={handleClose}
      open={open}
      title="New Brand"
    >
      <PerfectScrollbar>
        <Box
          sx={{
            marginTop: "50px",
            // backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Details">
                  <Stack direction="column" gap={2}>
                    <TextField
                      disabled={istrue}
                      id="categoryName"
                      label="Name"
                      name="categoryName"
                      //   nameRef={nameRef}
                      size="small"
                      value=""
                      onChange={() => {}}
                    />

                    <TextField
                      disabled={istrue}
                      id="categoySlug"
                      label="Slug"
                      name="categoySlug"
                      size="small"
                      value=""
                      onChange={() => {}}
                    />
                  </Stack>
                </CustomCardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CustomCardContent title="Image">
                  {/* <Stack direction="column" gap={2}> */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Button startIcon={<DeleteIcon />} variant="outlined">
                      Delete
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      padding: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "150px",
                        height: "150px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        border: "1px dashed rgb(236, 236, 236)",
                      }}
                    >
                      <img
                        alt="new"
                        src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                        style={{ objectFit: "cover" }}
                        width="100%"
                      />
                    </Box>
                  </Box>
                  {/* </Stack> */}
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AddBrand;
