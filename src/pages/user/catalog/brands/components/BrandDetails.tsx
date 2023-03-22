import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Container, Grid, PaletteMode, Stack } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useBrandDetail from "hooks/catalog/brand/useBrandDetails";
import useBrandDetailsForm, {
  IBrandDetail,
} from "hooks/catalog/brand/useBrandDetailsForm";
import useGetByIdBrand from "hooks/querys/catalog/brands/useGetByIdBrand";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBrandDetail } from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";

function BrandDetails() {
  const navigate = useNavigate();
  const nameRef = useRef<any>(null);
  const { brandId } = useParams();
  const [editable, setEditable] = useState(false);
  const userDecoded = useDecodedData();
  const { data: brandItemResponse } = useGetByIdBrand({
    brandId: Number(brandId),
  });

  console.log("brandItemResponse", brandItemResponse);
  // useGetByIdBrand
  const newtheme = useSelector((state: any) => state.theme);

  const initialValues: IBrandDetail = {
    id: brandItemResponse?.data?.id || 0,
    userId: 0,
    name: brandItemResponse?.data?.name || "",
    slug: brandItemResponse?.data?.slug || "",
    image: "string",
    fileUrl: "string",
  };

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
      title: "Cancel",
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
        // navigate(-1);
        handleSubmit();
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

  const formik = useBrandDetailsForm(onSubmit, initialValues);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const { addBrandDetailFunc } = useBrandDetail();

  const handle = () => {
    const body: IAddBrandRequestRoot = {
      // id: brandItemResponse?.data?.id,
      userId: userDecoded?.id,
      name: values.name,
      slug: values.slug,
    };
    addBrandDetail(body);
  };

  async function onSubmit(
    values: IBrandDetail,
    _: FormikHelpers<IBrandDetail>,
  ) {
    const data: IAddBrandRequestRoot = {
      userId: Number(userDecoded.id),
      id: brandItemResponse?.data?.id || 0,
      name: values.name,
      slug: values.slug,
    };
    const response = await addBrandDetail(data);
    if (response.statusCode === 200) {
      // setBrandId(response);
    }
  }

  const istrue = !editable;

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[{ link: "CATAGORIES", to: "/BrandDetails" }]}
          buttonText="Save"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.CategoriesDetail);
          }}
          rightActions={
            editable
              ? rightActionsData.filter((i) => i.title !== "Edit")
              : rightActionsData.filter((i) => i.title === "Edit")
          }
          title="BrandDetails"
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
                  <TextField
                    disabled={istrue}
                    error={!!touched.name && !!errors.name}
                    helperText={(touched.name && errors && errors.name) || ""}
                    id="categoryName"
                    label="Name"
                    name="categoryName"
                    nameRef={nameRef}
                    size="small"
                    value={values.name}
                    onBlur={handleBlur("name")}
                    onChange={handleChange("name")}
                  />

                  <TextField
                    disabled={istrue}
                    error={!!touched.name && !!errors.name}
                    helperText={(touched.name && errors && errors.name) || ""}
                    id="categoySlug"
                    label="Slug"
                    name="categoySlug"
                    size="small"
                    value={values.slug}
                    onBlur={handleBlur("slug")}
                    onChange={handleChange("slug")}
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

export default BrandDetails;
