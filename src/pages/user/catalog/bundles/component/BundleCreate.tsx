import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Card, Container, Grid, PaletteMode, Stack } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

function BundleCreate() {
  const navigate = useNavigate();
  const [editable, setEditable] = useState(false);

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
      title: "Discard",
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

  const fontColor = {
    style: { color: "red" },
  };

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[{ link: "Bundles", to: "/bundleDetails" }]}
          buttonText="Save"
          handleClick={() => {
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
                    id="categoryName"
                    inputProps={fontColor}
                    label="Name"
                    name="categoryName"
                    size="small"
                    value="bundle"
                    onChange={() => {}}
                  />
                  <TextField
                    multiline
                    id="description"
                    label="Description"
                    name="description"
                    onChange={() => {}}
                  />
                </Stack>
              </CustomCardContent>
              <CustomCardContent title="Tracking">
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
              </CustomCardContent>
              <CustomCardContent title="Organization">
                <Stack direction="row" gap={2}>
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
                </Stack>

                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    id="categoyTags"
                    label="Tags"
                    name="categoyTags"
                    size="small"
                    value="0"
                    onChange={() => {}}
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
