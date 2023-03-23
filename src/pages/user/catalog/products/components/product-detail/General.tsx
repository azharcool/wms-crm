import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import UploadButton from "components/image-upload-button/UploadButton";
import TextField from "components/textfield";
import { FILE_URL } from "config";
import { FormikProps } from "formik";
import useBrand from "hooks/catalog/brand/useBrand";
import useCategory from "hooks/catalog/categories/useCategory";
import { useEffect } from "react";
import palette from "theme/palette";
import { IGetByIdProductData } from "types/catalog/products/getByIdProductResponse";
import { detailMenu, fullfillmentSwitchs, strategys, UoM } from "__mock__";

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: IGetByIdProductData;
  formik: FormikProps<any>;
}

function General(props: IGeneral) {
  const { isTrue, nameRef, editable, data, formik } = props;

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
    }
  }, [data]);

  return (
    <Grid container padding={0} spacing={2}>
      <Grid item xs={8}>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Details">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
              disabled={isTrue}
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
              {data?.picture.map((images: any) => {
                return (
                  <Box
                    key={images}
                    sx={{
                      position: "relative",
                    }}
                  >
                    {!isTrue && (
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
                      src={`${FILE_URL}${images.atachment}`}
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
              })}
              {!isTrue && (
                <UploadButton
                  handleFile={() => {
                    console.log("click");
                  }}
                />
              )}
            </Stack>
          </CustomCardContent>
          <Divider />
          <CustomCardContent title="Dimensions">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
                disabled={isTrue}
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
