import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { FILE_URL } from "config";
import { FormikHelpers } from "formik";
import useCategoriesAction from "hooks/actions/catalog/categories/useCategoriesAction";
import useCategory from "hooks/actions/catalog/categories/useCategory";
import useGetByIdCategory from "hooks/querys/catalog/categories/useGetByIdCategory";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import palette from "theme/palette";
import { EditCategoryRequestRoot } from "types/catalog/catagories/editCategoryRequest";
import useEditCategoriesForm, {
  EditCategoriesForm,
} from "../hooks/useEditCategoriesForm";

interface IMenuItem {
  id: string;
  value: string;
}

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

const initialValues: EditCategoriesForm = {
  parentCategoryId: "",
  position: "",
  tag: "",
  name: "",
  slug: "",
  detail: "",
  status: "",
};

function CategoriesDetail() {
  const navigate = useNavigate();
  const nameRef = useRef<any>(null);
  const { category } = useCategory();
  const [editable, setEditable] = useState(false);
  const { categoryId } = useParams();
  const { data: categoryItemResponse } = useGetByIdCategory({
    categoryId: Number(categoryId),
  });

  const userDecoded = useDecodedData();
  const { editCategoryAction } = useCategoriesAction();
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

  const categoryForm = useEditCategoriesForm({
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

  useEffect(() => {
    if (categoryItemResponse?.data) {
      setFieldValue(
        "parentCategoryId",
        categoryItemResponse?.data.parentCategoryId || "",
      );
      setFieldValue(
        "position",
        String(categoryItemResponse?.data.position) || "",
      );
      setFieldValue("tag", categoryItemResponse?.data.tag || "");
      setFieldValue("name", categoryItemResponse?.data.name || "");
      setFieldValue("slug", categoryItemResponse?.data.slug || "");
      setFieldValue("detail", categoryItemResponse?.data.detail || "");
      setFieldValue("status", categoryItemResponse?.data.status || "");
    }
  }, [categoryItemResponse?.data, setFieldValue]);

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
      status: Number(values.status),
    };
    const response = await editCategoryAction(data);
    if (response) {
      setEditable(false);
    }
  }

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
        handleSubmit();
        navigate(
          `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.categories}`,
        );
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

  const handleFile = async (e: any) => {
    const allFiles = Array.from(e.target.files);
    const images = await Promise.all(
      allFiles.map((file) => convertBase64(file)),
    );

    const newUploadedFiles = images.map((item) => ({
      id: crypto.randomUUID(),
      value: item,
    }));

    setUploadedFiles((s) => [...s, ...newUploadedFiles]);
  };

  const convertBase64 = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={[
          {
            link: "CATAGORIES",
            to: `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.categories}`,
          },
        ]}
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
                  menuItems={category}
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
                  menuItems={statusMenu}
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
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
                justifyContent="center"
              >
                {categoryItemResponse?.data?.picture ? (
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    {!istrue && (
                      <CancelIcon
                        sx={{
                          width: "17px",
                          height: "17px",
                          cursor: "pointer",
                          color: `${palette.error.lightRed}`,
                          position: "absolute",
                          right: "-5px",
                          top: "-5px",
                          background: "white",
                        }}
                        onClick={() => {
                          console.log("clicked");
                        }}
                      />
                    )}

                    <img
                      alt="new"
                      src={`${FILE_URL}${categoryItemResponse?.data?.picture.atachment}`}
                      style={{
                        objectFit: "cover",
                        width: "120px",
                        height: "120px",
                        borderRadius: "5px",
                        border: "0.5px solid #eee",
                      }}
                    />
                  </Box>
                ) : (
                  <Box>No Image</Box>
                )}

                {!istrue && <UploadButton handleFile={handleFile} />}
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CategoriesDetail;
