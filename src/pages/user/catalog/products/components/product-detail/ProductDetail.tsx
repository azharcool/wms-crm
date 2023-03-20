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
import useGetByIdProduct from "hooks/querys/catalog/product/useGetByIdProduct";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import General from "./General";
import Variants from "./Variants";
// import AddVariant from "../AddVariant";

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
  const { productId } = useParams();
  const { data: productItemResponse } = useGetByIdProduct({
    productId: Number(productId),
  });

  console.log({ productItemResponse }, productId);

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
