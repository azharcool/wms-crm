import { Box, Card, Stack } from "@mui/material";

import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useAddBrandForm, {
  IAddBrand,
} from "hooks/catalog/brand/useAddBrandForm";
import useBrandAction from "hooks/catalog/brand/useBrandAction";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { addBrand } from "services/brand.services";
// import { addBrandAction } from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import { QueryKeys } from "utils/QueryKeys";

interface IValue {
  parentId: string;
  id: string;
  value: string;
}

interface IAddBrands {
  open: boolean;
  handleClose: () => void;
}
function AddZone(props: IAddBrands) {
  const { open, handleClose } = props;
  const [editable, setEditable] = useState(false);

  const istrue = !editable;
  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        // handleSubmit();
      }}
      handleClose={handleClose}
      open={open}
      size="sm"
      title="New Zone"
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
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  label="Warehouse"
                  name="warehouse"
                  size="small"
                />
                <TextField isSelect label="Area" name="area" size="small" />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField id="label" label="Label" name="label" size="small" />

                <TextField id="name" label="Name" name="name" size="small" />
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="Settings">
              <TextField isSelect label="Status" name="status" size="small" />
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AddZone;
