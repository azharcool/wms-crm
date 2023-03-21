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
import useCategoriesAction from "hooks/catalog/categories/useCategoriesAction";
import useGetByIdCategory from "hooks/querys/catalog/categories/useGetByIdCategory";
import useDecodedData from "hooks/useDecodedData";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditCategoryRequestRoot } from "types/catalog/catagories/editCategoryRequest";
import useEditCategoriesForm, {
  EditCategoriesForm,
} from "../hooks/useEditCategoriesForm";

const detailMenu = [
  {
    id: crypto.randomUUID(),
    value: "Watches",
  },
  {
    id: crypto.randomUUID(),
    value: "Video, DVD & Blu-Ray",
  },
  {
    id: crypto.randomUUID(),
    value: "Toys & Games",
  },
];
const statusMenu = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "Inactive",
  },
];

function CategoriesDetail() {
  const newtheme = useSelector((state: any) => state.theme);
  const navigate = useNavigate();
  const nameRef = useRef<any>(null);
  const [editable, setEditable] = useState(false);
  const { categoryId } = useParams();
  const { data: categoryItemResponse } = useGetByIdCategory({
    categoryId: Number(categoryId),
  });
  const userDecoded = useDecodedData();
  const { editCategoryAction } = useCategoriesAction();

  console.log("categoryItemResponse>>", categoryItemResponse);

  const initialValues: EditCategoriesForm = {
    parentCategoryId: categoryItemResponse?.data.parentCategoryId,
    position: categoryItemResponse?.data.position,
    tag: categoryItemResponse?.data.tag,
    name: categoryItemResponse?.data.name,
    slug: categoryItemResponse?.data.slug,
    detail: categoryItemResponse?.data.detail,
    status: categoryItemResponse?.data.status,
  };

  const categoryForm = useEditCategoriesForm({
    onSubmit,
    initialValues,
  });

  console.log("values>>", categoryForm.values);

  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = categoryForm;

  async function onSubmit(
    values: EditCategoriesForm,
    _: FormikHelpers<EditCategoriesForm>,
  ) {
    const data: EditCategoryRequestRoot = {
      id: categoryItemResponse?.data.id,
      userId: Number(userDecoded.id),
      parentCategoryId: Number(values.parentCategoryId),
      position: Number(values.position),
      tag: values.tag,
      name: values.name,
      slug: values.slug,
      detail: values.slug,
      status: Number(values.status === "Active" ? "1" : "2"),
    };
    const response = await editCategoryAction(data);
    // if (response) {
    //   setCategoryId(response);
    // }
  }

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
        handleSubmit();
        // navigate(-1);
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
          breadcrumbs={[{ link: "CATAGORIES", to: "/Watches" }]}
          buttonText="Save"
          handleClick={() => {
            handleSubmit();
          }}
          rightActions={
            editable
              ? rightActionsData.filter((i) => i.title !== "Edit")
              : rightActionsData.filter((i) => i.title === "Edit")
          }
          title={categoryItemResponse?.data.name}
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
                    error={!!touched.name && !!errors.name}
                    helperText={(touched.name && errors && errors.name) || ""}
                    id="name"
                    label="Name"
                    name="name"
                    nameRef={nameRef}
                    size="small"
                    value={values.name}
                    onBlur={handleBlur("name")}
                    onChange={handleChange("name")}
                  />

                  <TextField
                    disabled={istrue}
                    id="slug"
                    label="Slug"
                    name="slug"
                    size="small"
                    value={values.slug}
                    onChange={handleChange("slug")}
                  />

                  <TextField
                    disabled={istrue}
                    id="detail"
                    label="Detail"
                    name="detail"
                    size="small"
                    value={values.detail}
                    onChange={handleChange("detail")}
                  />
                </Stack>
              </CustomCardContent>

              <CustomCardContent title="Organization">
                <Stack direction="row" gap={2}>
                  <TextField
                    isSelect
                    disabled={istrue}
                    id="parentCategoryId"
                    label="Parent"
                    menuItems={detailMenu}
                    name="parentCategoryId"
                    size="small"
                    value={values.parentCategoryId}
                    onSelectHandler={(e) => {
                      setFieldValue("parentCategoryId", e.target.value);
                    }}
                  />
                  <TextField
                    disabled={istrue}
                    id="position"
                    label="Positon"
                    name="position"
                    size="small"
                    value={values.position}
                    onChange={handleChange("position")}
                  />
                </Stack>

                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    isSelect
                    disabled={istrue}
                    id="status"
                    label="Status"
                    name="status"
                    size="small"
                    value={values.status}
                    onSelectHandler={(e) => {
                      setFieldValue("status", e.target.value);
                    }}
                  />
                  <TextField
                    disabled={istrue}
                    id="tag"
                    label="Tags"
                    name="tag"
                    size="small"
                    value={values.tag}
                    onChange={handleChange("tag")}
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

export default CategoriesDetail;
