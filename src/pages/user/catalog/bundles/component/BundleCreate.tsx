import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Container, Grid, PaletteMode, Stack } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useBundleAction from "hooks/catalog/bundle/useBundleAction";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IAddBundleRequestRoot } from "types/catalog/bundles/addBundleRequest";
import { generateRandomNumber } from "utils";
import useAddBundleForm, { AddBundleForm } from "../hooks/useAddBundleForm";

const categorys = [
  {
    id: crypto.randomUUID(),
    value: "Watches",
  },
  {
    id: crypto.randomUUID(),
    value: "Topical",
  },
];

const brands = [
  {
    id: crypto.randomUUID(),
    value: "honda",
  },
  {
    id: crypto.randomUUID(),
    value: "Puma",
  },
];

const initialValues: AddBundleForm = {
  name: "",
  sku: "",
  barcode: "",

  description: "",
  categorys: "",
  brand: "",
  tags: "",
};
function BundleCreate() {
  const navigate = useNavigate();
  const [editable, setEditable] = useState(false);
  const userDecoded = useDecodedData();
  const { addBundleAction } = useBundleAction();
  const bundleForm = useAddBundleForm({
    onSubmit,
    initialValues,
  });
  const {
    touched,
    errors,
    values,
    handleChange,
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
      categoryId: Number(values.categorys),
      brandId: Number(values.brand),
      userId: Number(userDecoded.id),
      description: values.description,
    };
    const response = await addBundleAction(data);
  }

  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

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
        setEditable(false);
        navigate("/catalog/bundles");
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
          buttonText="Save"
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
                    label="category"
                    menuItems={categorys}
                    name="categorys"
                    size="small"
                    value={values.categorys}
                    onSelectHandler={(e) => {
                      setFieldValue("categorys", e.target.value);
                    }}
                  />
                  <TextField
                    isSelect
                    id="brand"
                    label="Brand"
                    menuItems={brands}
                    name="brand"
                    value={values.brand}
                    size="small"
                    onSelectHandler={(e) => {
                      setFieldValue("brand", e.target.value);
                    }}
                  />
                </Stack>

                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    id="categoyTags"
                    label="Tags"
                    name="categoyTags"
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
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default BundleCreate;
