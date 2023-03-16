import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Button,
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
import CustomSwitch from "components/custom-switch";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
import palette from "theme/palette";

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

function BundleDetails() {
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
          buttonText="Edit"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="BUNDLES"
          title="bundles"
        />

        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={8}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Details">
                <Stack direction="column" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Typography color="text.secondary">Name</Typography>
                    <Typography>bundl-334</Typography>
                  </Stack>
                  <Stack direction="column" gap={2}>
                    <Typography color="text.secondary">Description</Typography>
                    <Typography>not provided</Typography>
                  </Stack>
                </Stack>
              </CustomCardContent>
            </Card>
            <Grid item xs={12} marginTop={2}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Image">
                  <Grid item xs={8} m={2}>
                    <Typography color="text.secondary">No image</Typography>
                  </Grid>
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Tracking">
                <Stack direction="row" gap={2}>
                  <Stack direction="column" gap={2}>
                    <Typography color="text.secondary">SKU</Typography>
                    <Typography>bundl-334</Typography>
                  </Stack>
                  <Stack direction="column" gap={2}>
                    <Typography color="text.secondary">Barcode</Typography>
                    <Typography>not provided</Typography>
                  </Stack>
                </Stack>
              </CustomCardContent>
            </Card>

            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Organization">
                  <Stack direction="row" gap={2}>
                    <Stack direction="column" gap={2}>
                      <Typography color="text.secondary">CATEGORY</Typography>
                      <Typography>bundl-334</Typography>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <Typography color="text.secondary">BRAND</Typography>
                      <Typography>not provided</Typography>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <Typography color="text.secondary">TAGS</Typography>
                      <Typography>not provided</Typography>
                    </Stack>
                  </Stack>
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default BundleDetails;
