import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import { UoM, detailMenu, fullfillmentSwitchs, strategys } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import UploadButton from "components/image-upload-button/UploadButton";
import { ToolBarButton } from "components/table-toolbar";
import TextField from "components/textfield";
import { FILE_URL } from "config";
import { FormikProps } from "formik";
import useBrand from "hooks/actions/catalog/brand/useBrand";
import useCategory from "hooks/actions/catalog/categories/useCategory";
import { Dispatch, useEffect, useState } from "react";
import palette from "theme/palette";
import { IGetByIdProductData } from "types/catalog/products/getByIdProductResponse";

export interface IMenuItem {
  id: string;
  value?: string;
  isUpload: boolean;
}
interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: IGetByIdProductData;
  formik: FormikProps<any>;
  setNewImages: Dispatch<React.SetStateAction<IMenuItem[]>>;
  newImages: IMenuItem[];
}

function General(props: IGeneral) {
  const { nameRef, data, formik, newImages, setNewImages } = props;
  // const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);
  const [editable, setEditable] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

  const { category } = useCategory();
  const { brand } = useBrand();

  useEffect(() => {
    if (data) {
      formik?.setFieldValue("productName", data?.name || "");
      formik?.setFieldValue("productType", data?.type);
      formik?.setFieldValue("productDescription", data?.description || "");
      formik?.setFieldValue("productCategory", data?.categoryId || "");
      formik?.setFieldValue("productTags", data?.tags || "");
      formik?.setFieldValue("productBrand", data?.brandId || "");
      formik?.setFieldValue("UoM", data?.uom || "");
      formik?.setFieldValue("productHeight", data?.height || "");
      formik?.setFieldValue("productWidth", data?.width || "");
      formik?.setFieldValue("productLength", data?.length || "");
      formik?.setFieldValue("productWeight", data?.weight || "");
      formik?.setFieldValue("strategy", data?.strategy || "");
      formik?.setFieldValue("minExpiryDays", data?.expiryDays || "");
      formik?.setFieldValue(
        "oldImage",
        data?.picture.map((i) => i.atachment) || [],
      );
      setUploadedFiles(
        data?.picture.map((i) => ({
          id: crypto.randomUUID(),
          value: i.atachment,
          isUpload: false,
        })),
      );
    }
  }, [data]);

  const handleFile = async (e: any) => {
    const allFiles = Array.from(e.target.files);
    const images = await Promise.all(
      allFiles.map((file) => convertBase64(file)),
    );
    const newUploadedFiles = images.map((item) => ({
      id: crypto.randomUUID(),
      value: item,
      isUpload: true,
    }));
    setUploadedFiles((s) => [...s, ...newUploadedFiles]);
    setNewImages((i) => [...i, ...newUploadedFiles]);
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

  const toggleEditable = () => {
    setEditable((s) => !s);
  };

  const onRemoveTap = (image: IMenuItem) => {
    const filter = uploadedFiles.filter((i) => i.id !== image.id);
    setUploadedFiles(filter);
    if (image.isUpload) {
      const filterNew = newImages.filter((i) => i.value !== image.value);
      setNewImages(filterNew);
    } else {
      const filterOld = formik.values.oldImage.filter(
        (i: any) => i !== image.value,
      );
      formik.setFieldValue("oldImage", filterOld);
    }
  };

  return (
    <Grid container padding={0} spacing={2}>
      <Grid item display="flex" justifyContent="end" xs={12}>
        {!editable ? (
          <ToolBarButton
            handleClick={() => {
              toggleEditable();
            }}
            icon={
              <EditIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
            }
            title="Edit"
          />
        ) : null}

        {editable ? (
          <>
            <ToolBarButton
              handleClick={() => {
                toggleEditable();
                setTimeout(() => {
                  nameRef.current?.focus();
                }, 500);
              }}
              icon={
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              }
              title="Cancel"
            />
            <ToolBarButton
              handleClick={() => {
                formik.handleSubmit();
                toggleEditable();
              }}
              icon={
                <SaveIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              }
              title="Save"
            />
          </>
        ) : null}
      </Grid>
      <Grid
        item
        sx={{
          "&.MuiGrid-item": {
            paddingTop: "0px",
          },
        }}
        xs={8}
      >
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Details">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={!editable}
                id="productName"
                label="Name"
                name="productName"
                nameRef={nameRef}
                size="small"
                value={formik?.values.productName}
                onChange={formik.handleChange("productName")}
              />

              <TextField
                isSelect
                disabled={!editable}
                id="productType"
                label="Type"
                menuItems={detailMenu}
                name="productType"
                size="small"
                value={formik?.values.productType}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("productType", e.target.value);
                }}
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                multiline
                disabled={!editable}
                id="productDescription"
                label="Description"
                name="productDescription"
                rows={3}
                size="small"
                value={formik?.values.productDescription}
                onChange={formik.handleChange("productDescription")}
              />
            </Stack>
          </CustomCardContent>

          <CustomCardContent title="Organization">
            <Stack direction="row" gap={2}>
              <TextField
                isSelect
                disabled={!editable}
                id="productCategory"
                label="Category"
                menuItems={category}
                name="productCategory"
                size="small"
                value={formik?.values.productCategory}
                onSelectHandler={(e) => {
                  formik.setFieldValue("productCategory", e.target.value);
                }}
              />
              <TextField
                isSelect
                disabled={!editable}
                id="productBrand"
                label="Brand"
                menuItems={brand}
                name="productBrand"
                size="small"
                value={formik?.values.productBrand}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("productBrand", e.target.value);
                }}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={!editable}
                id="productTags"
                label="Tags"
                name="productTags"
                size="small"
                value={formik?.values.productTags}
                onChange={formik.handleChange("productTags")}
              />
            </Stack>
          </CustomCardContent>

          <CustomCardContent title="Supply">
            <TextField
              isSelect
              disabled={!editable}
              menuItems={UoM}
              name="UoM"
              size="small"
              value={formik?.values.UoM}
              onSelectHandler={(e) => {
                formik?.setFieldValue("UoM", e.target.value);
              }}
            />
          </CustomCardContent>
        </Card>
      </Grid>
      <Grid
        item
        sx={{
          "&.MuiGrid-item": {
            paddingTop: "0px",
          },
        }}
        xs={4}
      >
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
              {uploadedFiles?.length > 0
                ? uploadedFiles?.map((images: any) => {
                    return (
                      <Box
                        key={images.id}
                        sx={{
                          position: "relative",
                        }}
                      >
                        {editable && (
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
                            onClick={() => onRemoveTap(images)}
                          />
                        )}

                        <img
                          alt="new"
                          src={
                            images.isUpload
                              ? images.value
                              : `${FILE_URL}${images.value}`
                          }
                          style={{
                            objectFit: "cover",
                            width: "120px",
                            height: "120px",
                            borderRadius: "5px",
                            border: "0.5px solid #eee",
                          }}
                        />
                      </Box>
                    );
                  })
                : !editable && <Typography>No Image</Typography>}
              {editable && <UploadButton handleFile={handleFile} />}
            </Stack>
          </CustomCardContent>
          <Divider />
          <CustomCardContent title="Dimensions">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={!editable}
                id="productHeight"
                label="Height"
                name="productHeight"
                size="small"
                value={formik?.values.productHeight}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "productHeight",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
              <TextField
                disabled={!editable}
                id="productWidth"
                label="Width"
                name="productWidth"
                size="small"
                value={formik?.values.productWidth}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "productWidth",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={!editable}
                id="productLength"
                label="Length"
                name="productLength"
                size="small"
                value={formik?.values.productLength}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "productLength",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
              <TextField
                disabled={!editable}
                id="productWeight"
                label="Weight"
                name="productWeight"
                size="small"
                value={formik?.values.productWeight}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "productWeight",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>
          </CustomCardContent>
          <CustomCardContent title="Fulfillment">
            <Stack direction="row" gap={2}>
              <TextField
                isSelect
                // disabled={isTrue}
                disabled={!editable}
                label="Strategy"
                menuItems={strategys}
                name="strategy"
                size="small"
                value={formik?.values.strategy}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("strategy", e.target.value);
                }}
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={!editable}
                id="minExpiryDays"
                label="Min Expiry Days"
                name="minExpiryDays"
                size="small"
                value={formik?.values.minExpiryDays}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "minExpiryDays",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>

            {editable
              ? fullfillmentSwitchs?.map((item) => {
                  return (
                    <CustomSwitch
                      key={item.id}
                      checked={false}
                      title={item.value}
                      onChange={() => {}}
                    />
                  );
                })
              : fullfillmentSwitchs.map((item) => {
                  return (
                    <Typography
                      key={item.id}
                      sx={{ fontSize: "14px", color: "#9ea1b6" }}
                    >
                      {item.value}
                    </Typography>
                  );
                })}
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default General;
