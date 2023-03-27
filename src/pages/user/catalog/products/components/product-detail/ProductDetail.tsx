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
import { useFormik } from "formik";
import useProductAction from "hooks/catalog/product/useProductAction";
import useGetByIdProduct from "hooks/querys/catalog/product/useGetByIdProduct";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditProductRequestRoot } from "types/catalog/products/editProductRequest";
import AddVariant from "../AddVariant";
import General from "./General";
import Variants from "./Variants";

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
  const userDecoded = useDecodedData();
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(0);
  const [openVariant, setOpenVariant] = useState(false);

  const navigate = useNavigate();
  const { productId } = useParams();
  const { editProductAction } = useProductAction();
  const { data: productItemResponse } = useGetByIdProduct({
    productId: Number(productId),
  });

  const handleVariant = () => {
    setOpenVariant((s) => !s);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setEditable(false);
  };

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const formik = useFormik({
    initialValues: {
      productName: "",
      productType: "",
      productDescription: "",
      productCategory: "",
      productTags: "",
      productBrand: "",
      UoM: "",
      productHeight: "",
      productWidth: "",
      productLength: "",
      productWeight: "",
      strategy: "",
      minExpiryDays: "",
    },
    onSubmit: async (values) => {
      const editData: EditProductRequestRoot = {
        id: productItemResponse?.data?.id || 0,
        userId: Number(userDecoded.id),
        name: values.productName,
        type: values.productType,
        description: values.productDescription,
        tags: values.productTags,
        brandId: Number(values.productBrand),
        uom: Number(values.UoM),
        categoryId: Number(values.productCategory),
        height: Number(values.productHeight),
        width: Number(values.productWidth),
        length: Number(values.productLength),
        weight: Number(values.productWeight),
        strategy: values.strategy,
        expiryDays: Number(values.minExpiryDays),
      };
      const response = await editProductAction(editData);
      if (response) {
        setEditable(false);
        formik.resetForm();
        navigate(-1);
      }
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
      title: "Edit",
      onClick: () => {
        if (value === 0) {
          setEditable(true);
          setTimeout(() => {
            nameRef.current?.focus();
          }, 500);
        } else {
          handleVariant();
        }
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
        formik.handleSubmit();
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
          title={productItemResponse?.data.name || ""}
        />

        <Stack direction="row">
          <Tabs
            aria-label="basic tabs example"
            sx={{
              "& .MuiTab-root.Mui-selected": {
                color: "#c44e13",
              },
            }}
            TabIndicatorProps={{
              style: {
                background: "#c44e13",
              },
            }}
            value={value}
            onChange={handleChange}
          >
            <Tab label="General" />
            <Tab label="Variants" />
          </Tabs>
        </Stack>
        <TabPanel index={0} value={value}>
          <General
            data={productItemResponse?.data}
            editable={editable}
            formik={formik}
            isTrue={istrue}
            nameRef={nameRef}
          />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Variants isTrue={istrue} />
        </TabPanel>
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

export default ProductDetail;
