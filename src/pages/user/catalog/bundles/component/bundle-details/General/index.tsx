import CancelIcon from "@mui/icons-material/Cancel";
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

import UploadButton from "components/image-upload-button/UploadButton";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import useBrand from "hooks/catalog/brand/useBrand";
import useCategory from "hooks/catalog/categories/useCategory";
import React, { useEffect, useState } from "react";
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

interface IMenuItem {
  id: string;
  value: string;
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
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

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
                        width: "120px",
                        height: "120px",
                      }}
                    />
                  </Box>
                );
              })}
              <UploadButton handleFile={handleFile} />
            </Stack>
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default General;
