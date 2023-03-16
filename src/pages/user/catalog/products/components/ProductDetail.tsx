import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  PaletteMode,
  Stack,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddVariant from "./AddVariant";

const detailMenu = [
  {
    id: crypto.randomUUID(),
    value: "Digital product",
  },
  {
    id: crypto.randomUUID(),
    value: "Physical product",
  },
  {
    id: crypto.randomUUID(),
    value: "Service",
  },
];

const uniqueBarcodingStrategy = [
  {
    id: crypto.randomUUID(),
    value: "Per each Unit",
  },
  {
    id: crypto.randomUUID(),
    value: "Per SKU or Set",
  },
];

const UoM = [
  {
    id: crypto.randomUUID(),
    value: "Box",
  },
  {
    id: crypto.randomUUID(),
    value: "Bottle",
  },
  {
    id: crypto.randomUUID(),
    value: "Can",
  },
  {
    id: crypto.randomUUID(),
    value: "Litre",
  },
  {
    id: crypto.randomUUID(),
    value: "Piece",
  },
  {
    id: crypto.randomUUID(),
    value: "Pack",
  },
  {
    id: crypto.randomUUID(),
    value: "Unit",
  },
  {
    id: crypto.randomUUID(),
    value: "IBCs",
  },
  {
    id: crypto.randomUUID(),
    value: "Drum",
  },
  {
    id: crypto.randomUUID(),
    value: "Bags",
  },
];

const fullfillmentSwitchs = [
  {
    id: crypto.randomUUID(),
    value: "Track Serial numbers",
  },
  {
    id: crypto.randomUUID(),
    value: "Track Expiry dates",
  },
];

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

const strategys = [
  {
    id: crypto.randomUUID(),
    value: "First In First Out",
  },
  {
    id: crypto.randomUUID(),
    value: "First Expired First Out",
  },
  {
    id: crypto.randomUUID(),
    value: "Last In First  Out",
  },
];

function ProductDetail() {
  const newtheme = useSelector((state: any) => state.theme);
  const nameRef = useRef<any>(null);
  const [openVariant, setOpenVariant] = useState(false);
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();

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

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Discard",
      onClick: () => {
        setEditable(false);
        // history.push(`123436/${AppRoutes.CATALOG.categoryDetail}`);
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
      title: "Edit",
      onClick: () => {
        setEditable(true);
        // setTimeout(() => {
        //   nameRef.current?.focus();
        // }, 500);
      },
      icon: (
        <EditIcon
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
        setEditable(false);
        navigate(-1);
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

  const istrue = !editable;

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[{ link: "PRODUCTS", to: "/puma" }]}
          buttonText="Save"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.ProductDetail);
          }}
          navTitle="Puma"
          rightActions={
            editable
              ? rightActionsData.filter((i) => i.title !== "Edit")
              : rightActionsData.filter((i) => i.title === "Edit")
          }
          title="Puma"
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
                    disabled={istrue}
                    id="productName"
                    label="Name"
                    name="productName"
                    nameRef={nameRef}
                    size="small"
                    value="Watches"
                    onChange={() => {}}
                  />

                  <TextField
                    disabled={istrue}
                    id="productType"
                    label="Type"
                    name="productType"
                    size="small"
                    value="Not Provided"
                    onChange={() => {}}
                  />
                </Stack>
                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    multiline
                    disabled={istrue}
                    id="productDescription"
                    label="Description"
                    name="productDescription"
                    rows={3}
                    size="small"
                    value="some other details"
                    onChange={() => {}}
                  />
                </Stack>
              </CustomCardContent>

              <CustomCardContent title="Organization">
                <Stack direction="row" gap={2}>
                  <TextField
                    disabled={istrue}
                    id="productCategory"
                    label="Category"
                    name="productCategory"
                    size="small"
                    value="Not Provided"
                    onChange={() => {}}
                  />
                  <TextField
                    disabled={istrue}
                    id="productBrand"
                    label="Brand"
                    name="productBrand"
                    size="small"
                    value="0"
                    onChange={() => {}}
                  />
                </Stack>

                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    disabled={istrue}
                    id="productTags"
                    label="Tags"
                    name="productTags"
                    size="small"
                    value="Active"
                    onChange={() => {}}
                  />
                </Stack>
              </CustomCardContent>

              <CustomCardContent title="Supply">
                <TextField
                  isSelect
                  disabled={istrue}
                  menuItems={UoM}
                  name="UoM"
                  size="small"
                  value={UoM[0].id}
                  onSelectHandler={() => {}}
                />
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
                    padding: "8px",
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
              <Divider />
              <CustomCardContent title="Dimensions">
                <Stack direction="row" gap={2}>
                  <TextField
                    disabled={istrue}
                    id="productHeight"
                    label="Height"
                    name="productHeight"
                    size="small"
                    value="Height in cm"
                    onChange={() => {}}
                  />
                  <TextField
                    disabled={istrue}
                    id="productWidth"
                    label="Width"
                    name="productWidth"
                    size="small"
                    value="Width in cm"
                    onChange={() => {}}
                  />
                </Stack>

                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    disabled={istrue}
                    id="productLength"
                    label="Length"
                    name="productLength"
                    size="small"
                    value="Length in cm"
                    onChange={() => {}}
                  />
                  <TextField
                    disabled={istrue}
                    id="productWeight"
                    label="Weight"
                    name="productWeight"
                    size="small"
                    value="Weight in kg"
                    onChange={() => {}}
                  />
                </Stack>
              </CustomCardContent>
              <CustomCardContent title="Fulfillment">
                <Stack direction="row" gap={2}>
                  <TextField
                    isSelect
                    disabled={istrue}
                    label="Strategy"
                    menuItems={strategys}
                    name="strategy"
                    size="small"
                    value={strategys[0].id}
                    onSelectHandler={() => {}}
                  />
                </Stack>
                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    disabled={istrue}
                    id="minExpiryDays"
                    label="Min Expiry Days"
                    name="minExpiryDays"
                    size="small"
                    value="0"
                    onChange={() => {}}
                  />
                </Stack>

                {editable
                  ? fullfillmentSwitchs?.map((item) => {
                      return (
                        <CustomSwitch
                          key={item.id}
                          checked={false}
                          title={item.value}
                          onChange={() => {}}
                        />
                      );
                    })
                  : fullfillmentSwitchs.map((item) => {
                      return (
                        <Typography sx={{ fontSize: "14px", color: "#9ea1b6" }}>
                          {item.value}
                        </Typography>
                      );
                    })}
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {openVariant ? (
        <AddVariant handleClose={handleVariant} open={openVariant} />
      ) : null}
    </ThemeProvider>
  );
}

export default ProductDetail;
