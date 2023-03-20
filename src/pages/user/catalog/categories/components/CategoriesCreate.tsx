import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Container, Grid, PaletteMode, Stack } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import DragAndDropImage from "components/drag-and-drop-image";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useCategoriesAction from "hooks/catalog/categories/useCategoriesAction";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IAddCategoriesRequestRoot } from "types/catalog/catagories/addCategoriesRequest";
import useAddCategoriesForm, {
  AddCategoriesForm,
} from "../hooks/useAddCategoriesForm";

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

const initialValues: AddCategoriesForm = {
  parentCategoryId: "",
  position: "",
  tag: "",
  name: "",
  slug: "",
  detail: "",
  status: "",
};

function CategoriesCreate() {
  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const { addCategoriesAction } = useCategoriesAction();
  const [categoryId, setCategoryId] = useState("");
  const [editable, setEditable] = useState(false);
  const newtheme = useSelector((state: any) => state.theme);

  const categoryForm = useAddCategoriesForm({
    onSubmit,
    initialValues,
  });

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
    values: AddCategoriesForm,
    _: FormikHelpers<AddCategoriesForm>,
  ) {
    const data: IAddCategoriesRequestRoot = {
      userId: Number(userDecoded.id),
      parentCategoryId: Number(values.parentCategoryId),
      position: Number(values.position),
      tag: values.tag,
      name: values.name,
      slug: values.slug,
      detail: values.slug,
      status: Number(values.status === "Active" ? "1" : "2"),
    };
    const response = await addCategoriesAction(data);
    if (response) {
      setCategoryId(response);
    }
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
        navigate(-1);
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

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[{ link: "CATAGORIES", to: "/New Category" }]}
          buttonText="Save"
          handleClick={() => {
            handleSubmit();
          }}
          rightActions={rightActionsData}
          title="New Category"
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
                    error={!!touched.name && !!errors.name}
                    helperText={(touched.name && errors && errors.name) || ""}
                    id="name"
                    label="Name"
                    name="name"
                    size="small"
                    value={values.name}
                    onBlur={handleBlur("name")}
                    onChange={handleChange("name")}
                  />
                  <TextField
                    id="slug"
                    label="Slug"
                    name="slug"
                    size="small"
                    value={values.slug}
                    onChange={handleChange("slug")}
                  />
                </Stack>
                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    multiline
                    id="detail"
                    label="Detail"
                    name="detail"
                    rows={3}
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
                    id="status"
                    label="Status"
                    menuItems={statusMenu}
                    name="status"
                    size="small"
                    value={values.status}
                    onSelectHandler={(e) => {
                      setFieldValue("status", e.target.value);
                    }}
                  />
                  <TextField
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
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DragAndDropImage />
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

export default CategoriesCreate;
