import { Box, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import TextField from "components/textfield";
import { useFormik } from "formik";
import useBrand from "hooks/catalog/brand/useBrand";
import useCategory from "hooks/catalog/categories/useCategory";
import { IGetByIdProductData } from "types/catalog/products/getByIdProductResponse";

const detailMenu = [
  {
    id: "Digital product",
    value: "Digital product",
  },
  {
    id: "Physical product",
    value: "Physical product",
  },
  {
    id: "Service",
    value: "Service",
  },
];

const UoM = [
  {
    id: crypto.randomUUID(),
    value: "Box",
  },
  {
    id: crypto.randomUUID(),
    value: "Bottle",
  },
  {
    id: crypto.randomUUID(),
    value: "Can",
  },
  {
    id: crypto.randomUUID(),
    value: "Litre",
  },
  {
    id: crypto.randomUUID(),
    value: "Piece",
  },
  {
    id: crypto.randomUUID(),
    value: "Pack",
  },
  {
    id: crypto.randomUUID(),
    value: "Unit",
  },
  {
    id: crypto.randomUUID(),
    value: "IBCs",
  },
  {
    id: crypto.randomUUID(),
    value: "Drum",
  },
  {
    id: crypto.randomUUID(),
    value: "Bags",
  },
];

const strategys = [
  {
    id: crypto.randomUUID(),
    value: "First In First Out",
  },
  {
    id: crypto.randomUUID(),
    value: "First Expired First Out",
  },
  {
    id: crypto.randomUUID(),
    value: "Last In First  Out",
  },
];

const fullfillmentSwitchs = [
  {
    id: crypto.randomUUID(),
    value: "Track Serial numbers",
  },
  {
    id: crypto.randomUUID(),
    value: "Track Expiry dates",
  },
];

interface IMenuItem {
  id: string;
  value: string;
}

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: IGetByIdProductData;
}

function General(props: IGeneral) {
  const { isTrue, nameRef, editable, data } = props;

  const { category } = useCategory();
  const { brand } = useBrand();

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      productName: data?.name || "",
      productType: data?.type || "",
      productDescription: data?.description || "",
      productCategory: data?.categoryId || "",
      productTags: data?.tags || "",
      productBrand: data?.brandId || "",
      UoM: data?.uom || "",
      productHeight: data?.height || "",
      productWidth: data?.width || "",
      productLength: data?.length || "",
      productWeight: data?.weight || "",
      strategy: data?.strategy || "",
      minExpiryDays: data?.expiryDays || "",
    },
    onSubmit: () => {},
  });

  console.log(values);

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
                value={values.productName}
                onChange={handleChange("productName")}
              />

              <TextField
                isSelect
                disabled={isTrue}
                id="productType"
                label="Type"
                menuItems={detailMenu}
                name="productType"
                size="small"
                value={values.productType}
                onSelectHandler={(e) => {
                  setFieldValue("productType", e.target.value);
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
                value={values.productDescription}
                onChange={handleChange("productDescription")}
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
                value={values.productCategory}
                onChange={handleChange("productCategory")}
              />
              <TextField
                isSelect
                disabled={isTrue}
                id="productBrand"
                label="Brand"
                menuItems={brand}
                name="productBrand"
                size="small"
                value={values.productBrand}
                onSelectHandler={(e) => {
                  setFieldValue("productBrand", e.target.value);
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
                value={values.productTags}
                onChange={handleChange("productTags")}
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
              value={values.UoM}
              onSelectHandler={(e) => {
                setFieldValue("UoM", e.target.value);
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
            <Box
              sx={{
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
          <Divider />
          <CustomCardContent title="Dimensions">
            <Stack direction="row" gap={2}>
              <TextField
                disabled={isTrue}
                id="productHeight"
                label="Height"
                name="productHeight"
                size="small"
                value={values.productHeight}
                onChange={(e) => {
                  setFieldValue(
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
                value={values.productWidth}
                onChange={(e) => {
                  setFieldValue(
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
                value={values.productLength}
                onChange={(e) => {
                  setFieldValue(
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
                value={values.productWeight}
                onChange={(e) => {
                  setFieldValue(
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
                disabled={isTrue}
                label="Strategy"
                menuItems={strategys}
                name="strategy"
                size="small"
                value={values.strategy}
                onSelectHandler={(e) => {
                  setFieldValue("strategy", e.target.value);
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
                value={values.minExpiryDays}
                onChange={(e) => {
                  setFieldValue(
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
