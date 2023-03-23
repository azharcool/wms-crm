import { Box, Card, Stack } from "@mui/material";

import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
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
import palette from "theme/palette";
// import { addBrandAction } from "services/brand.services";
import CancelIcon from "@mui/icons-material/Cancel";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import { QueryKeys } from "utils/QueryKeys";

interface IValue {
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
  // const { addBrandDetailFunc } = useBrandAction();
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

  const { addBrandAction } = useBrandAction();
  const [uploadedFiles, setUploadedFiles] = useState<IValue[]>([]);

  // const handle = () => {
  //   const body: IAddBrandRequestRoot = {
  //     userId: userDecoded?.id,
  //     name: values.name,
  //     slug: values.slug,
  //     id: 0,
  //     image: "",
  //     fileUrl: "",
  //   };
  //   addBrandDetailFunc(body);
  // };

  async function onSubmit(values: IAddBrand, _: FormikHelpers<IAddBrand>) {
    const data: IAddBrandRequestRoot = {
      userId: Number(userDecoded.id),
      name: values.name,
      slug: values.slug,
    };
    const response = await addBrand(data);
    if (response.statusCode === 200) {
      // setBrandId(response);
      // navigate(AppRoutes.CATALOG.brands);
      handleClose();
      queryClient.invalidateQueries([QueryKeys.getAllBrand]);
    }
  }

  const istrue = !editable;
  function handleFile(e: any): void {
    throw new Error("Function not implemented.");
  }

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
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {uploadedFiles.map((item) => {
                  return (
                    <Box
                      key={item.id}
                      sx={{
                        position: "relative",
                      }}
                    >
                      <CancelIcon
                        sx={{
                          width: "17px",
                          height: "17px",
                          cursor: "pointer",
                          color: `${palette.error.lightRed}`,
                          position: "absolute",
                          right: "-5px",
                          top: "-5px",
                          background: "white",
                        }}
                        onClick={() => {
                          const newUploadedFile = uploadedFiles.filter(
                            (i) => i.id !== item.id,
                          );
                          setUploadedFiles(newUploadedFile);
                        }}
                      />
                      <img
                        alt={item.value}
                        src={item.value}
                        style={{
                          width: "120px",
                          height: "120px",
                        }}
                      />
                    </Box>
                  );
                })}
                <UploadButton handleFile={handleFile} />
              </Stack>
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AddBrand;
function addBrandDetailFunc(data: IAddBrandRequestRoot) {
  throw new Error("Function not implemented.");
}

function addBrandAction(data: IAddBrandRequestRoot) {
  throw new Error("Function not implemented.");
}
