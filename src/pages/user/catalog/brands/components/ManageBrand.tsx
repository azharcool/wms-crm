import { Box, Button, Card, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import useBrandAction from "hooks/catalog/brand/useBrandAction";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";
// import { addBrandAction } from "services/brand.services";
import CancelIcon from "@mui/icons-material/Cancel";
import useGetByIdBrand from "hooks/querys/catalog/brands/UseGetByIdBrand";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import useManageBrandForm, {
  ManageBrandInitialValues,
  manageBrandInitialValues,
} from "../hooks/useManageBrandForm";

interface IValue {
  id: string;
  value: string;
}

interface IManageBrand {
  open: boolean;
  handleClose: () => void;
  view?: boolean;
  brandId?: number;
}

function ManageBrand(props: IManageBrand) {
  const { open, handleClose, brandId, view } = props;
  const [editable, setEditable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<IValue[]>([]);
  const userDecoded = useDecodedData();
  const { addBrandAction, editBrandAction } = useBrandAction();

  const { data: brandItemResponse } = useGetByIdBrand({
    brandId,
  });

  const manageFormik = useManageBrandForm({
    initialValues: manageBrandInitialValues,
    onSubmit,
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    errors,
    touched,
    setFieldValue,
  } = manageFormik;

  useEffect(() => {
    if (brandItemResponse) {
      const brandItem = brandItemResponse.data;
      setFieldValue("name", brandItem.name);
      setFieldValue("slug", brandItem.slug);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandItemResponse]);

  async function onSubmit(values: ManageBrandInitialValues) {
    let response = false;
    const data: IAddBrandRequestRoot = {
      userId: Number(userDecoded.id),
      name: values.name,
      slug: values.slug,
      image: uploadedFiles.map((i) => i.value.split("base64,")[1]).toString(),
    };

    if (editable) {
      data.id = brandId;
      response = await editBrandAction(data);
    } else {
      response = await addBrandAction(data);
    }

    if (response) {
      handleClose();
    }
  }

  const handleFile = async (e: any) => {
    const allFiles = Array.from(e.target.files);
    const images = await Promise.all(
      allFiles.map((file) => convertBase64(file)),
    );

    const newUploadedFiles = images.map((item) => ({
      id: crypto.randomUUID(),
      value: item,
    }));

    setUploadedFiles([...newUploadedFiles]);
  };

  const convertBase64 = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const isDisabled = Boolean(editable ? false : view);

  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        handleSubmit();
      }}
      handleClose={handleClose}
      isSubmitting={isSubmitting}
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
          {view ? (
            <Box>
              <Button
                color="error"
                size="small"
                style={{ padding: "0.5rem 1rem", backgroundColor: "#8B0000" }}
                sx={{
                  boxShadow: "none",
                  display: "inline-block",
                  "&:hover": {
                    backgroundColor: "#8B0000",
                    opacity: 0.6,
                    boxShadow: "none",
                  },
                }}
                variant="contained"
                onClick={() => {
                  setEditable(true);
                }}
              >
                Edit
              </Button>
            </Box>
          ) : null}

          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="column" gap={2}>
                <TextField
                  disabled={isDisabled}
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
                  disabled={isDisabled}
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
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </Box>
                  );
                })}
                <UploadButton single handleFile={handleFile} />
              </Stack>
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default ManageBrand;
