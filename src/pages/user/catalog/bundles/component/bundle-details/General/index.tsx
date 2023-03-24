import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Card,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import useBrand from "hooks/catalog/brand/useBrand";
import useCategory from "hooks/catalog/categories/useCategory";
import React, { useEffect } from "react";
import { IBundleDetails } from "types/catalog/bundles/getBundleResponse";
import { generateRandomNumber } from "utils";
// eslint-disable-next-line import/no-extraneous-dependencies

interface ICustomCard {
  title: string;
  children: React.ReactNode;
}

function CustomCardContent(props: ICustomCard) {
  const { title, children } = props;
  return (
    <>
      <DialogTitle>
        <Typography component="h6">{title}</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </>
  );
}

interface IGeneral {
  isTrue?: boolean;
  data?: IBundleDetails | undefined;
  nameRef?: any;
  editable?: boolean;
  formik: FormikProps<any>;
}

function General(props: IGeneral) {
  const { isTrue, data, nameRef, editable, formik } = props;
  const { category } = useCategory();
  const { brand } = useBrand();

  useEffect(() => {
    if (data) {
      formik?.setFieldValue("name", data?.name || "");
      formik?.setFieldValue("description", data?.description || "");
      formik?.setFieldValue("categoryId", data?.categoryId || "");
      formik?.setFieldValue("tag", data?.tag || "");
      formik?.setFieldValue("brandId", data?.brandId || "");
      formik?.setFieldValue("sku", data?.sku || "");
      formik?.setFieldValue("barcode", data?.barcode || "");
    }
  }, [data]);

  return (
    <Grid container marginTop={2} spacing={2}>
      <Grid item xs={8}>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Details">
            <Stack direction="column" gap={3}>
              <TextField
                disabled={isTrue}
                id="name"
                label="Name"
                name="name"
                nameRef={nameRef}
                size="small"
                value={formik.values.name}
                onChange={formik.handleChange("name")}
              />
              <TextField
                multiline
                disabled={isTrue}
                id="description"
                label="Description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange("description")}
              />
            </Stack>
          </CustomCardContent>
          <CustomCardContent title="Tracking">
            <Stack direction="row" gap={2}>
              <TextField
                iconEnd
                disabled={isTrue}
                icon={<RefreshIcon />}
                id="sku"
                label="SKU"
                name="sku"
                size="small"
                value={formik.values.sku}
                onChange={formik.handleChange("sku")}
                onClickIcon={() => {
                  if (formik.values.name) {
                    const newName = formik.values.name.split(" ");
                    const generateSku = newName
                      .map((i: string) => i.slice(0, 6))
                      .join("")
                      .toUpperCase()
                      .concat("-", generateRandomNumber(4));

                    formik.setFieldValue("sku", generateSku);
                  }
                }}
              />

              <TextField
                iconEnd
                disabled={isTrue}
                icon={<RefreshIcon />}
                id="barcode"
                label="barcode"
                name="barcode"
                size="small"
                value={formik.values.barcode}
                onChange={formik.handleChange("barcode")}
                onClickIcon={() => {
                  const newBarcode = generateRandomNumber(13);
                  formik.setFieldValue("barcode", newBarcode);
                }}
              />
            </Stack>
          </CustomCardContent>
          <CustomCardContent title="Organization">
            <Stack direction="row" gap={2}>
              <TextField
                isSelect
                disabled={isTrue}
                id="categoryId"
                label="Category"
                menuItems={category}
                name="categoryId"
                size="small"
                value={formik.values.categoryId}
                onSelectHandler={(e) => {
                  formik.setFieldValue("categoryId", e.target.value);
                }}
              />
              <TextField
                isSelect
                disabled={isTrue}
                id="brandId"
                label="Brand"
                menuItems={brand}
                name="brandId"
                size="small"
                value={formik.values.brandId}
                onSelectHandler={(e) => {
                  formik.setFieldValue("brandId", e.target.value);
                }}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="tag"
                label="Tags"
                name="tag"
                size="small"
                value={formik.values.tag}
                onChange={formik.handleChange("tag")}
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
                  width: "350px",
                  height: "200px",
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
  );
}

export default General;
