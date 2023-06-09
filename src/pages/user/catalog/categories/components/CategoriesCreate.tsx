import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useCategoriesAction from "hooks/actions/catalog/categories/useCategoriesAction";
import useCategory from "hooks/actions/catalog/categories/useCategory";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { IAddCategoriesRequestRoot } from "types/catalog/catagories/addCategoriesRequest";
import useAddCategoriesForm, {
  AddCategoriesForm,
} from "../hooks/useAddCategoriesForm";

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

interface IMenuItem {
  id: string;
  value: string;
}

const initialValues: AddCategoriesForm = {
  parentCategoryId: "",
  position: "",
  tag: "",
  name: "",
  slug: "",
  detail: "",
  status: "",
  image: "",
};

function CategoriesCreate() {
  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const { addCategoriesAction } = useCategoriesAction();
  const { category } = useCategory();
  const [categoryId, setCategoryId] = useState("");
  const [editable, setEditable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

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
      status: Number(values.status),
      image: uploadedFiles.map((i) => i.value.split("base64,")[1]).toString(),
    };
    const response = await addCategoriesAction(data);
    if (response) {
      setCategoryId(response);
      navigate(-1);
    }
  }

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
    <Container>
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
                  menuItems={category}
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
                  type="number"
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
              <Stack direction="row" flexWrap="wrap" gap={2}>
                {uploadedFiles.map((item) => {
                  return (
                    <Box
                      key={item.id}
                      sx={{
                        position: "relative",
                      }}
                    >
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
                          const newUploadedFile = uploadedFiles.filter(
                            (i) => i.id !== item.id,
                          );
                          setUploadedFiles(newUploadedFile);
                        }}
                      />
                      <img
                        alt={item.value}
                        src={item.value}
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </Box>
                  );
                })}
                <UploadButton single handleFile={handleFile} />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CategoriesCreate;
