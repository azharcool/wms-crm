import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Container,
  PaletteMode,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import General from "./General";
import Variants from "./Variants";
// import AddVariant from "../AddVariant";

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ProductDetail() {
  const newtheme = useSelector((state: any) => state.theme);
  const nameRef = useRef<any>(null);
  const [openVariant, setOpenVariant] = useState(false);
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        setTimeout(() => {
          nameRef.current?.focus();
        }, 500);
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

        <Stack direction="row">
          <Tabs
            aria-label="basic tabs example"
            value={value}
            onChange={handleChange}
          >
            <Tab label="General" />
            <Tab label="Variants" />
          </Tabs>
        </Stack>
        <TabPanel index={0} value={value}>
          <General editable={editable} isTrue={istrue} nameRef={nameRef} />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Variants isTrue={istrue} />
        </TabPanel>
      </Container>
      {/* {openVariant ? (
        <AddVariant handleClose={handleVariant} open={openVariant} />
      ) : null} */}
    </ThemeProvider>
  );
}

export default ProductDetail;
