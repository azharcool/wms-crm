import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import { useFormik } from "formik";
import useProductAction from "hooks/actions/catalog/product/useProductAction";
import useGetByIdProduct from "hooks/querys/catalog/product/useGetByIdProduct";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditProductRequestRoot } from "types/catalog/products/editProductRequest";
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
  const nameRef = useRef<any>(null);
  const userDecoded = useDecodedData();
  const [editable, setEditable] = useState(false);
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const { productId } = useParams();
  const { editProductAction } = useProductAction();
  const { data: productItemResponse } = useGetByIdProduct({
    productId: Number(productId),
  });

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

  const istrue = !editable;

  return (
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={[
          {
            link: "PRODUCTS",
            to: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`,
          },
        ]}
        navTitle={productItemResponse?.data.name || ""}
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
        <Variants productName={productItemResponse?.data.name || ""} />
      </TabPanel>
    </Container>
  );
}

export default ProductDetail;
