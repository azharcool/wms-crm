import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  PaletteMode,
  Stack,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { useSelector } from "react-redux";

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

interface ICustomCard {
  title: string;
  children: React.ReactNode;
}
function CustomCardContent(props: ICustomCard) {
  const { title, children } = props;
  return (
    <>
      <DialogTitle>
        <Typography component="h6">{title}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </>
  );
}

interface ICustomAccordian {
  title: string;
  children: React.ReactNode;
}
function CustomAccordian(props: ICustomAccordian) {
  const { title, children } = props;
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

function CategoriesUpdate() {
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

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[{ link: "CATAGORIES-UPDATE", to: "/Watches" }]}
          buttonText="Save"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.CategoriesUpdate);
          }}
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Edit",
              onClick: () => {},
              icon: (
                <EditIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
          ]}
          title="Watches"
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
                    disabled
                    id="categoryName"
                    label="Name"
                    name="categoryName"
                    size="small"
                    value="Watches"
                    onChange={() => {}}
                  />
                  <TextField
                    disabled
                    id="categoySlug"
                    label="Slug"
                    name="categoySlug"
                    size="small"
                    value="Not Provided"
                    onChange={() => {}}
                  />

                  <TextField
                    disabled
                    id="categoyDetail"
                    label="Detail"
                    name="categoyDetail"
                    size="small"
                    value="some other details"
                    onChange={() => {}}
                  />
                </Stack>
              </CustomCardContent>

              <CustomCardContent title="Organization">
                <Stack direction="row" gap={2}>
                  <TextField
                    disabled
                    id="categoryParent"
                    label="Parent"
                    name="categoryParent"
                    size="small"
                    value="Not Provided"
                    onChange={() => {}}
                  />
                  <TextField
                    disabled
                    id="categoyPosition"
                    label="Positon"
                    name="categoyPosition"
                    size="small"
                    value="0"
                    onChange={() => {}}
                  />
                </Stack>

                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    disabled
                    id="categoryStatus"
                    label="Status"
                    name="categoryStatus"
                    size="small"
                    value="Active"
                    onChange={() => {}}
                  />
                  <TextField
                    disabled
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

export default CategoriesUpdate;
