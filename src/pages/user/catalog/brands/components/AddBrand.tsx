import { Box, Card, Stack } from "@mui/material";

import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

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
      size="sm"
      title="New Brand"
    >
      <PerfectScrollbar>
        <Stack
          gap={2}
          sx={{
            marginTop: "50px",
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="column" gap={2}>
                <TextField
                  id="categoryName"
                  label="Name"
                  name="categoryName"
                  size="small"
                  value=""
                  onChange={() => {}}
                />

                <TextField
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
          <Card>
            <CustomCardContent title="Image">
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Button startIcon={<DeleteIcon />} variant="outlined">
                  Delete
                </Button>
              </Box> */}

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
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AddBrand;
