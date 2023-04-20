import CancelIcon from "@mui/icons-material/Cancel";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar, { ToolBarButton } from "components/table-toolbar";
import TextField from "components/textfield";
import TextFieldChip from "components/textfield/TextFieldChip";
import { FormikHelpers } from "formik";
import useBrand from "hooks/actions/catalog/brand/useBrand";
import useBundleAction from "hooks/actions/catalog/bundle/useBundleAction";
import useCategory from "hooks/actions/catalog/categories/useCategory";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { IAddBundleRequestRoot } from "types/catalog/bundles/addBundleRequest";
import { generateRandomNumber } from "utils";

import useAddBundleForm, { AddBundleForm } from "../hooks/useAddBundleForm";

interface IMenuItem {
  id: string;
  value: string;
}

const initialValues: AddBundleForm = {
  name: "",
  sku: "",
  barcode: "",
  description: "",
  categorys: "",
  brand: "",
  tags: "",
  image: [],
};
function BundleCreate() {
  const [editable, setEditable] = useState(false);
  const [tags, setTags] = useState<IMenuItem[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const { addBundleAction } = useBundleAction();

  const { brand } = useBrand();
  const { category } = useCategory();

  const bundleForm = useAddBundleForm({
    onSubmit,
    initialValues,
  });

  const {
    touched,
    errors,
    values,
    handleChange,
    isSubmitting,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = bundleForm;

  async function onSubmit(
    values: AddBundleForm,
    _: FormikHelpers<AddBundleForm>,
  ) {
    const data: IAddBundleRequestRoot = {
      name: values.name,
      sku: values.sku,
      barcode: values.barcode,
      ...(!Number.isNaN(+values.categorys) && {
        categoryId: Number(values.categorys),
      }),
      tag: tags.map((i) => i.value).toString(),
      ...(!Number.isNaN(+values.brand) && {
        brandId: Number(values.brand),
      }),
      userId: Number(userDecoded.id),
      description: values.description,
      ...(uploadedFiles.length && {
        image: uploadedFiles.map((i) => i.value.split("base64,")[1]),
      }),
    };
    await addBundleAction(data);
    navigate("/catalog/bundles");
    setEditable(false);
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

    setUploadedFiles((s) => [...s, ...newUploadedFiles]);
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

  const toggleEditable = () => {
    setEditable((s) => !s);
  };

  return (
    <Container>
      <TableToolbar
        breadcrumbs={[{ link: "Bundles", to: "/catalog/bundles" }]}
        buttonText={
          isSubmitting ? <CircularProgress color="primary" size={12} /> : "Save"
        }
        handleClick={() => {
          handleSubmit();
          // navigate(AppRoutes.CATALOG.CategoriesCreate);
        }}
        title="New Bundle"
      />

      <Grid container marginTop={2} spacing={2}>
        <Grid item display="flex" justifyContent="end" xs={12}>
          <ToolBarButton
            handleClick={() => {
              handleSubmit();
              toggleEditable();
            }}
            icon={
              <SaveIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
            }
            title="Save"
          />
        </Grid>
        <Grid item xs={8}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="column" gap={3}>
                <TextField
                  iconEnd
                  error={!!touched.name && !!errors.name}
                  helperText={(touched.name && errors && errors.name) || ""}
                  // icon={<Inventory2Icon />}
                  id="name"
                  label="Name"
                  name="name"
                  size="small"
                  value={values.name}
                  onBlur={handleBlur("name")}
                  onChange={handleChange("name")}
                />
                <TextField
                  multiline
                  id="description"
                  label="Description"
                  name="description"
                  value={values.description}
                  onChange={handleChange("description")}
                />
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="Tracking">
              <Stack direction="row" gap={2}>
                <TextField
                  iconEnd
                  error={!!touched.sku && !!errors.sku}
                  helperText={(touched.sku && errors && errors.sku) || ""}
                  icon={<RefreshIcon />}
                  id="sku"
                  label="Sku"
                  name="sku"
                  size="small"
                  value={values.sku}
                  onBlur={handleBlur("sku")}
                  onChange={handleChange("sku")}
                  onClickIcon={() => {
                    if (values.name) {
                      const newName = values.name.split(" ");
                      const generateSku = newName
                        .map((i) => i.slice(0, 6))
                        .join("")
                        .toUpperCase()
                        .concat("-", generateRandomNumber(4));

                      setFieldValue("sku", generateSku);
                    }
                  }}
                />

                <TextField
                  iconEnd
                  icon={<RefreshIcon />}
                  id="barcode"
                  label="Barcode"
                  name="barcode"
                  size="small"
                  value={values.barcode}
                  onClickIcon={() => {
                    const newBarcode = generateRandomNumber(13);
                    setFieldValue("barcode", newBarcode);
                  }}
                />
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="Organization">
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  id="categorys"
                  label="Categorys"
                  menuItems={category}
                  name="categorys"
                  size="small"
                  value={values.categorys}
                  onSelectHandler={(e) => {
                    setFieldValue("categorys", e.target.value);
                  }}
                />
                <TextField
                  isSelect
                  id="Brand"
                  label="Brand"
                  menuItems={brand}
                  name="brand"
                  size="small"
                  value={values.brand}
                  onSelectHandler={(e) => {
                    setFieldValue("brand", e.target.value);
                  }}
                />
              </Stack>

              <Stack direction="row" gap={2} marginTop={2}>
                <TextFieldChip
                  chips={tags}
                  handleDelete={(item) => {
                    const newTags = tags.filter((i) => i.id !== item.id);
                    setTags(newTags);
                  }}
                  handleKeyDown={(keyCode: string) => {
                    if (keyCode === "Enter") {
                      setTags((s) => [
                        ...s,
                        {
                          id: crypto.randomUUID(),
                          value: values.tags,
                        },
                      ]);
                      setFieldValue("tags", "");
                    }
                  }}
                  id="tags"
                  label="Tags"
                  name="tags"
                  size="small"
                  sxForm={{
                    width: "100%",
                  }}
                  value={values.tags}
                  onChange={handleChange("tags")}
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              flex: 1,
            }}
          >
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default BundleCreate;
