import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import useProductConditionAction from "hooks/actions/setting/product-condition/useProductConditionAction";
import useGetByIdProductCondition from "hooks/querys/setting/product-condition/useGetByIdProductCondition";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { IAddProductConditionRequestRoot } from "types/setting/product-condition/addProductConditionRequest";
import useManageProductCondition, {
  ManageProductConditionForm,
  productConditionInitialValues,
} from "../hooks/useManageProductCondition";

interface IValue {
  id: string;
  value: string;
}

interface IManageProductCondition {
  open: boolean;
  handleClose: () => void;
  view?: boolean;
  productConditionId?: number;
}

function ManageProductCondition(props: IManageProductCondition) {
  const { open, handleClose, view, productConditionId } = props;
  const [editable, setEditable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<IValue[]>([]);
  const userDecoded = useDecodedData();
  const navigate = useNavigate();
  const { addProductConditionAction, editProductConditionAction } =
    useProductConditionAction();

  const { data: productConditionResponse } = useGetByIdProductCondition({
    productConditionId,
  });

  const manageFormik = useManageProductCondition({
    initialValues: productConditionInitialValues,
    onSubmit,
  });

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
    errors,
    handleSubmit,
    resetForm,
    isSubmitting,
  } = manageFormik;

  useEffect(() => {
    if (productConditionResponse) {
      const productCondition = productConditionResponse.data;
      setFieldValue("code", productCondition.code);
      setFieldValue("color", productCondition.color);
      setFieldValue("condition", productCondition.condition);
      setFieldValue("description", productCondition.description);
      setFieldValue("image", productCondition.image);
      setFieldValue("grade", productCondition.grade);
      setFieldValue("warranty", productCondition.warranty);
      setFieldValue("isDefault", productCondition.isDefault);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productConditionResponse]);

  async function onSubmit(values: ManageProductConditionForm) {
    let response = false;
    const data: IAddProductConditionRequestRoot = {
      userId: Number(userDecoded.id),
      code: values.code,
      color: values.color,
      condition: values.condition,
      description: values.description,
      image: uploadedFiles.map((i) => i.value.split("base64,")[1]).toString(),
      grade: values.grade,
      isDefault: values.default,
      warranty: Number(values.warranty),
    };

    if (editable) {
      data.id = productConditionId;
      response = await editProductConditionAction(data);
    } else {
      response = await addProductConditionAction(data);
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
    <>
      <Slider
        buttonText="save"
        handleChange={() => {
          handleSubmit();
        }}
        handleClose={handleClose}
        // isSubmitting={isSubmitting}
        open={open}
        size="md"
        title="New Product Condition"
      >
        <PerfectScrollbar>
          <Stack
            gap={2}
            sx={{
              marginTop: "10px",
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
              <CustomCardContent title="Condition Info">
                <Stack direction="row" gap={2}>
                  <TextField
                    disabled={isDisabled}
                    error={!!touched.code && !!errors.code}
                    helperText={(touched.code && errors && errors.code) || ""}
                    id="code"
                    label="Code"
                    name="code"
                    size="small"
                    type="text"
                    value={values.code}
                    onBlur={handleBlur("code")}
                    onChange={handleChange("code")}
                  />

                  <TextField
                    disabled={isDisabled}
                    error={!!touched.condition && !!errors.condition}
                    helperText={
                      (touched.condition && errors && errors.condition) || ""
                    }
                    id="condition"
                    label="Operation"
                    name="condition"
                    size="small"
                    type="text"
                    value={values.condition}
                    onBlur={handleBlur("grade")}
                    onChange={handleChange("condition")}
                  />
                </Stack>
                <Stack direction="row" gap={2}>
                  <TextField
                    disabled={isDisabled}
                    error={!!touched.grade && !!errors.grade}
                    helperText={(touched.grade && errors && errors.grade) || ""}
                    id="grade"
                    label="Grade"
                    name="grade"
                    size="small"
                    type="text"
                    value={values.grade}
                    onBlur={handleBlur("grade")}
                    onChange={handleChange("grade")}
                  />
                  <TextField
                    iconEnd
                    disabled={isDisabled}
                    icon={<Typography>Months</Typography>}
                    id="warranty"
                    label="Warranty"
                    name="warranty"
                    size="small"
                    type="number"
                    value={values.warranty}
                    onChange={(e) => {
                      const { target } = e;
                      if (target.value.length < 3 && target.value !== "0") {
                        setFieldValue("warranty", target.value);
                      }
                    }}
                  />
                  <TextField
                    disabled={isDisabled}
                    id="color"
                    label="Color"
                    name="color"
                    size="small"
                    type="color"
                    value={values.color}
                    onBlur={handleBlur("color")}
                    onChange={handleChange("color")}
                  />
                </Stack>

                <Stack direction="row" gap={2}>
                  <TextField
                    multiline
                    disabled={isDisabled}
                    id="description"
                    label="Description"
                    name="description"
                    rows={3}
                    size="small"
                    value={values.description}
                    onChange={handleChange("description")}
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
                  <UploadButton
                    single
                    disabled={isDisabled}
                    handleFile={handleFile}
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Stack>
        </PerfectScrollbar>
      </Slider>
    </>
  );
}

export default ManageProductCondition;
