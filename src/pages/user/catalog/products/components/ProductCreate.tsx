import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Button,
  Card,
  Container,
  Grid,
  PaletteMode,
  Stack,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useProductAction from "hooks/catalog/product/useProductAction";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { IAddProductRequestRoot } from "types/catalog/products/addProductRequest";
import { generateRandomNumber } from "utils";
import useAddProductForm, { AddProductForm } from "../hooks/useAddProductForm";
import AddVariant from "./AddVariant";

const detailMenu = [
  {
    id: "Physical product",
    value: "Digital product",
  },
  {
    id: "Physical product",
    value: "Physical product",
  },
  {
    id: "Service",
    value: "Service",
  },
];

const uniqueBarcodingStrategy = [
  {
    id: "Per each Unit",
    value: "Per each Unit",
  },
  {
    id: "Per SKU or Set",
    value: "Per SKU or Set",
  },
];

const UoM = [
  {
    id: "Box",
    value: "Box",
  },
  {
    id: "Bottle",
    value: "Bottle",
  },
  {
    id: "Can",
    value: "Can",
  },
  {
    id: "Litre",
    value: "Litre",
  },
  {
    id: "Piece",
    value: "Piece",
  },
  {
    id: "Pack",
    value: "Pack",
  },
  {
    id: "Unit",
    value: "Unit",
  },
  {
    id: "IBCs",
    value: "IBCs",
  },
  {
    id: "Drum",
    value: "Drum",
  },
  {
    id: "Bags",
    value: "Bags",
  },
];

const fullfillmentSwitchs = [
  {
    id: crypto.randomUUID(),
    value: "Track Serial numbers",
    name: "trackSerialNumbers",
  },
  {
    id: crypto.randomUUID(),
    value: "Track Expiry dates",
    name: "trackExpiryDates",
  },
  {
    id: crypto.randomUUID(),
    value: "Sync Supply Price",
    name: "syncSupplyPrice",
  },
];

const categorys = [
  {
    id: "Watches",
    value: "Watches",
  },
  {
    id: "Topical",
    value: "Topical",
  },
];

const brands = [
  {
    id: "honda",
    value: "honda",
  },
  {
    id: "Puma",
    value: "Puma",
  },
];

const strategys = [
  {
    id: "First In First Out",
    value: "First In First Out",
  },
  {
    id: "First Expired First Out",
    value: "First Expired First Out",
  },
  {
    id: "Last In First  Out",
    value: "Last In First  Out",
  },
];

const initialValues: AddProductForm = {
  name: "",
  sku: "",
  type: "",
  barcode: "",
  description: "",
  uniqueBarcoding: "",
  quantity: "",
  UoM: "",
  supply: "",
  category: "",
  brand: "",
  tags: "",
  height: "",
  width: "",
  length: "",
  weight: "",
  strategy: "",
  minExpiryDays: "",
  trackSerialNumbers: false,
  trackExpiryDates: false,
  syncSupplyPrice: false,
};

function ProductCreate() {
  const newtheme = useSelector((state: any) => state.theme);
  const [openVariant, setOpenVariant] = useState(false);
  const [productId, setProductId] = useState("");

  const navigate = useNavigate();
  const { addProductAction } = useProductAction();
  const userDecoded = useDecodedData();

  const productForm = useAddProductForm({
    onSubmit,
    initialValues,
  });
  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = productForm;

  async function onSubmit(
    values: AddProductForm,
    _: FormikHelpers<AddProductForm>,
  ) {
    const data: IAddProductRequestRoot = {
      userId: Number(userDecoded.id),
      name: values.name,
      type: values.type || detailMenu[0].value || "",
      description: values.description || "",
      supplyPrice: Number(values.supply),
      sku: values.sku,
      barcode: values.barcode,
      strategy: values.strategy,
      quantity: Number(values.quantity) || 0,
      barcodeStrategy: values.uniqueBarcoding,
      trackExpiryDates: values.trackExpiryDates,
    };
    const response = await addProductAction(data);
    if (response) {
      setProductId(response);
    }
  }

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const handleVariant = () => {
    setOpenVariant((s) => !s);
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

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          buttonText="Save"
          handleClick={() => {
            handleSubmit();
          }}
          navTitle="PRODUCTS"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Cancel",
              onClick: () => {
                navigate(
                  `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`,
                );
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
                <AddCircleIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
          ]}
          title="New Product"
        />

        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={8}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Details">
                <Stack direction="row" gap={2}>
                  <TextField
                    iconEnd
                    error={!!touched.name && !!errors.name}
                    helperText={(touched.name && errors && errors.name) || ""}
                    icon={<Inventory2Icon />}
                    id="name"
                    label="Name"
                    name="name"
                    size="small"
                    value={values.name}
                    onBlur={handleBlur("name")}
                    onChange={handleChange("name")}
                  />
                  <TextField
                    isSelect
                    id="type"
                    label="Type"
                    menuItems={detailMenu}
                    name="type"
                    size="small"
                    value={values.type || detailMenu[0].id}
                    onSelectHandler={(e) => {
                      setFieldValue("type", e.target.value);
                    }}
                  />
                </Stack>

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
                    error={!!touched.barcode && !!errors.barcode}
                    helperText={
                      (touched.barcode && errors && errors.barcode) || ""
                    }
                    icon={<RefreshIcon />}
                    id="barcode"
                    label="Barcode"
                    name="barcode"
                    size="small"
                    value={values.barcode}
                    onChange={handleChange("barcode")}
                    onClickIcon={() => {
                      const newBarcode = generateRandomNumber(13);
                      setFieldValue("barcode", newBarcode);
                    }}
                  />
                </Stack>

                <TextField
                  multiline
                  id="description"
                  label="Description"
                  name="description"
                  value={values.description}
                  onChange={handleChange("description")}
                />

                <Stack direction="row" gap={2}>
                  <TextField
                    isSelect
                    id="uniqueBarcodingStrategy"
                    label="Unique Barcoding strategy"
                    menuItems={uniqueBarcodingStrategy}
                    name="Unique Barcoding strategy"
                    size="small"
                    value={values.uniqueBarcoding}
                    onSelectHandler={(e) => {
                      setFieldValue("uniqueBarcoding", e.target.value);
                    }}
                  />
                  <TextField
                    id="quantity"
                    label="Quantity"
                    name="quantity"
                    size="small"
                    value={values.quantity}
                    onChange={(e) => {
                      setFieldValue(
                        "quantity",
                        e.target.value.replace(/[^0-9]/g, ""),
                      );
                    }}
                  />

                  <TextField
                    isSelect
                    id="UoM"
                    label="UoM"
                    menuItems={UoM}
                    name="UoM"
                    size="small"
                    value={values.UoM}
                    onSelectHandler={(e) => {
                      setFieldValue("UoM", e.target.value);
                    }}
                  />
                </Stack>
              </CustomCardContent>

              <CustomCardContent title="Image">
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  size="small"
                  onChange={() => {}}
                />
              </CustomCardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{
                marginBottom: 2,
                flex: 1,
                backgroundColor: palette.warning.dark,
                color: "#fff",
                boxShadow: "none",
                opacity: 0.8,
                "&:hover": {
                  backgroundColor: palette.warning.dark,
                  opacity: 0.6,
                  boxShadow: "none",
                },
              }}
              variant="contained"
              onClick={() => {
                handleVariant();
              }}
            >
              Add Variants
            </Button>

            <CustomAccordian title="Supply">
              <TextField
                isSelect
                id="UoM"
                label="UoM"
                menuItems={UoM}
                name="UoM"
                size="small"
                value={values.UoM}
                onSelectHandler={(e) => {
                  setFieldValue("UoM", e.target.value);
                }}
              />
            </CustomAccordian>
            <CustomAccordian title="Organization">
              <TextField
                isSelect
                id="categorys"
                label="Categorys"
                menuItems={categorys}
                name="categorys"
                size="small"
                value={values.category}
                onSelectHandler={(e) => {
                  setFieldValue("category", e.target.value);
                }}
              />
              <TextField
                isSelect
                id="Brand"
                label="Brand"
                menuItems={brands}
                name="brand"
                size="small"
                value={values.brand}
                onSelectHandler={(e) => {
                  setFieldValue("brand", e.target.value);
                }}
              />
              <TextField
                id="tags"
                label="Tags"
                name="tags"
                size="small"
                value={values.tags}
                onChange={handleChange("tags")}
              />
            </CustomAccordian>
            <CustomAccordian title="Dimensions">
              <Stack direction="row" gap={2}>
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="height"
                  label="Height"
                  name="height"
                  size="small"
                  value={values.height}
                  onChange={(e) => {
                    setFieldValue(
                      "height",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />

                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="width"
                  label="Width"
                  name="width"
                  size="small"
                  value={values.width}
                  onChange={(e) => {
                    setFieldValue(
                      "width",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />
              </Stack>

              <Stack direction="row" gap={2}>
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="length"
                  label="length"
                  name="length"
                  size="small"
                  value={values.length}
                  onChange={(e) => {
                    setFieldValue(
                      "length",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />

                <TextField
                  iconEnd
                  icon={<Typography>kg</Typography>}
                  id="weight"
                  label="Weight"
                  name="weight"
                  size="small"
                  value={values.weight}
                  onChange={(e) => {
                    setFieldValue(
                      "weight",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />
              </Stack>
            </CustomAccordian>

            <CustomAccordian title="Fulfillment">
              <TextField
                isSelect
                label="Strategy"
                menuItems={strategys}
                name="strategy"
                size="small"
                value={values.strategy}
                onSelectHandler={(e) => {
                  setFieldValue("strategy", e.target.value);
                }}
              />

              <TextField
                id="minExpiryDays"
                label="Min Expiry Days"
                name="minExpiryDays"
                size="small"
                onChange={(e) => {
                  setFieldValue(
                    "minExpiryDays",
                    e.target.value.replace(/^[0-9]/g, ""),
                  );
                }}
              />

              {fullfillmentSwitchs?.map((item) => {
                return (
                  <CustomSwitch
                    key={item.id}
                    checked={Boolean(values[item.name as keyof AddProductForm])}
                    title={item.value}
                    onChange={(e) => {
                      setFieldValue(item.name, e.target.checked);
                    }}
                  />
                );
              })}
            </CustomAccordian>
          </Grid>
        </Grid>
      </Container>
      {openVariant && productId ? (
        <AddVariant
          handleClose={handleVariant}
          open={openVariant}
          productId={productId}
        />
      ) : null}
    </ThemeProvider>
  );
}

export default ProductCreate;
