import AddCircleIcon from "@mui/icons-material/AddCircle";
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
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
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
  {
    id: crypto.randomUUID(),
    value: "Sync Supply Price",
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

function ProductCreate() {
  const newtheme = useSelector((state: any) => state.theme);
  const [openVariant, setOpenVariant] = useState(false);
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

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          buttonText="Save"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="PRODUCTS"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Discard",
              onClick: () => {},
              icon: (
                <AddCircleIcon
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
              onClick: () => {},
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
                    icon={<Inventory2Icon />}
                    id="productName"
                    label="Name"
                    name="productName"
                    size="small"
                    onChange={() => {}}
                  />
                  <TextField
                    isSelect
                    label="Type"
                    menuItems={detailMenu}
                    name="type"
                    size="small"
                    value={detailMenu[0].id}
                    onSelectHandler={() => {}}
                  />
                </Stack>

                <Stack direction="row" gap={2}>
                  <TextField
                    iconEnd
                    icon={<RefreshIcon />}
                    id="sku"
                    label="Sku"
                    name="sku"
                    size="small"
                    onChange={() => {}}
                    onClickIcon={() => {
                      console.log("clicked....");
                    }}
                  />

                  <TextField
                    iconEnd
                    icon={<RefreshIcon />}
                    id="barcode"
                    label="Barcode"
                    name="barcode"
                    size="small"
                    onChange={() => {}}
                    onClickIcon={() => {
                      console.log("clicked....");
                    }}
                  />
                </Stack>

                <TextField
                  multiline
                  id="description"
                  label="Description"
                  name="description"
                  onChange={() => {}}
                />

                <Stack direction="row" gap={2}>
                  <TextField
                    isSelect
                    menuItems={uniqueBarcodingStrategy}
                    name="Unique Barcoding strategy"
                    size="small"
                    value={uniqueBarcodingStrategy[0].id}
                    onSelectHandler={() => {}}
                  />
                  <TextField
                    id="quantity"
                    label="Quantity"
                    name="quantity"
                    size="small"
                    onChange={() => {}}
                  />

                  <TextField
                    isSelect
                    menuItems={UoM}
                    name="UoM"
                    size="small"
                    value={UoM[0].id}
                    onSelectHandler={() => {}}
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
                menuItems={UoM}
                name="UoM"
                size="small"
                value={UoM[0].id}
                onSelectHandler={() => {}}
              />
            </CustomAccordian>
            <CustomAccordian title="Organization">
              <TextField
                isSelect
                id="categorys"
                menuItems={categorys}
                name="categorys"
                size="small"
                value={categorys[0].id}
                onSelectHandler={() => {}}
              />
              <TextField
                isSelect
                id="categorys"
                label="Brand"
                menuItems={brands}
                name="brand"
                size="small"
                value={brands[0].id}
                onSelectHandler={() => {}}
              />
              <TextField
                id="tags"
                label="Tags"
                name="tags"
                size="small"
                onChange={() => {}}
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
                  onChange={() => {}}
                />

                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="width"
                  label="Width"
                  name="width"
                  size="small"
                  onChange={() => {}}
                />
              </Stack>

              <Stack direction="row" gap={2}>
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="lenght"
                  label="Lenght"
                  name="lenght"
                  size="small"
                  onChange={() => {}}
                />

                <TextField
                  iconEnd
                  icon={<Typography>kg</Typography>}
                  id="weight"
                  label="Weight"
                  name="weight"
                  size="small"
                  onChange={() => {}}
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
                value={strategys[0].id}
                onSelectHandler={() => {}}
              />

              <TextField
                id="minExpiryDays"
                label="Min Expiry Days"
                name="minExpiryDays"
                size="small"
                onChange={() => {}}
              />

              {fullfillmentSwitchs?.map((item) => {
                return (
                  <CustomSwitch
                    key={item.id}
                    checked={false}
                    title={item.value}
                    onChange={() => {}}
                  />
                );
              })}
            </CustomAccordian>
          </Grid>
        </Grid>
      </Container>
      {openVariant ? (
        <AddVariant handleClose={handleVariant} open={openVariant} />
      ) : null}
    </ThemeProvider>
  );
}

export default ProductCreate;
