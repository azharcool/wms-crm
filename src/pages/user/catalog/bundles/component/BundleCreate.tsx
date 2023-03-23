import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Grid,
  PaletteMode,
  Stack,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import TextFieldChip from "components/textfield/TextFieldChip";
import { FormikHelpers } from "formik";
import useBundleAction from "hooks/catalog/bundle/useBundleAction";
import useGetAllBrand from "hooks/querys/catalog/brands/useGetAllBrand";
import useGetAllCategories from "hooks/querys/catalog/categories/useGetAllCategories";
import useDecodedData from "hooks/useDecodedData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const navigate = useNavigate();
  const [editable, setEditable] = useState(false);
  const [brand, setBrand] = useState<IMenuItem[]>([]);
  const [supplier, setSupplier] = useState<IMenuItem[]>([]);
  const [category, setSetCategory] = useState<IMenuItem[]>([]);
  const [tags, setTags] = useState<IMenuItem[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);
  const userDecoded = useDecodedData();
  const { addBundleAction } = useBundleAction();

  const { data: brandResponse } = useGetAllBrand({
    pageSize: 10,
    page: 1,
  });

  const { data: getAllCategoryResponse } = useGetAllCategories({});

  useEffect(() => {
    if (getAllCategoryResponse?.data) {
      const response = getAllCategoryResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.name,
        };
      });
      setSetCategory(response);
    }
  }, [getAllCategoryResponse]);

  useEffect(() => {
    if (brandResponse?.data) {
      const response = brandResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.name,
        };
      });
      setBrand(response);
    }
  }, [brandResponse]);

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
    helper: FormikHelpers<AddBundleForm>,
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
        image: uploadedFiles.map((i) => i.value),
      }),
    };
    await addBundleAction(data);
    navigate("/catalog/bundles");
    setEditable(false);
  }

  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
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
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        setEditable(false);
      },
      icon: (
        <ArrowBackIosIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Save",
      onClick: () => {
        handleSubmit();
      },
      icon: (
        <SaveIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[{ link: "Bundles", to: "/catalog/bundles" }]}
          buttonText={
            isSubmitting ? (
              <CircularProgress color="primary" size={12} />
            ) : (
              "Save"
            )
          }
          handleClick={() => {
            handleSubmit();
            // navigate(AppRoutes.CATALOG.CategoriesCreate);
          }}
          rightActions={rightActionsData}
          title="New Bundle"
        />

        <Grid container marginTop={2} spacing={2}>
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
                    onChange={handleChange("sku")}
                    onBlur={handleBlur("sku")}
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
    </ThemeProvider>
  );
}

export default BundleCreate;
