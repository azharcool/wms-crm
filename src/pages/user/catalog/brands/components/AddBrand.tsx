import { Box, Card, Stack } from "@mui/material";

import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useAddBrandForm, {
  IAddBrand
} from "hooks/catalog/brand/useAddBrandForm";

import useBrandAction from "hooks/catalog/brand/useBrandAction";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { addBrandAction } from "services/brand.services";
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
function AddBrand(props: IAddBrands) {
  const { open, handleClose } = props;
  const [editable, setEditable] = useState(false);
  const userDecoded = useDecodedData();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const initialValues: IAddBrand = {
    id: 0,
    userId: 0,
    name: "",
    slug: "",
    image: "",
    fileUrl: "",
  };

  // const onSubmit = async (values: IAddBrand) => {
  //   handle();
  // };
  const formik = useAddBrandForm(onSubmit, initialValues);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const { addBrandActionFunc } = useBrandAction();

  const handle = () => {
    const body: IAddBrandRequestRoot = {
      userId: userDecoded?.id,
      name: values.name,
      slug: values.slug,
    };
    addBrandAction(body);
  };

  async function onSubmit(values: IAddBrand, _: FormikHelpers<IAddBrand>) {
    const data: IAddBrandRequestRoot = {
      userId: Number(userDecoded.id),
      name: values.name,
      // type: values.type || detailMenu[0].value || "",
      // description: values.description || "",
      // supplyPrice: Number(values.supply),
      slug: values.slug,
      // strategy: values.strategy,
      // quantity: Number(values.quantity) || 0,
      // barcodeStrategy: values.uniqueBarcoding,
      // trackExpiryDates: values.trackExpiryDates,
    };
    const response = await addBrandAction(data);
    if (response.statusCode === 200) {
      // setBrandId(response);
      // navigate(AppRoutes.CATALOG.brands);
      handleClose();
      queryClient.invalidateQueries([QueryKeys.getAllBrand]);
    }
  }

  const istrue = !editable;
  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        handleSubmit();
      }}
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
                  error={!!touched.name && !!errors.name}
                  helperText={(touched.name && errors && errors.name) || ""}
                  id="categoryName"
                  label="Name"
                  name="categoryName"
                  size="small"
                  value={values.name}
                  onBlur={handleBlur("name")}
                  onChange={handleChange("name")}
                />

                <TextField
                  error={!!touched.slug && !!errors.slug}
                  helperText={(touched.slug && errors && errors.slug) || ""}
                  id="categoySlug"
                  label="Slug"
                  name="categoySlug"
                  size="small"
                  value={values.slug}
                  onBlur={handleBlur("slug")}
                  onChange={handleChange("slug")}
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
