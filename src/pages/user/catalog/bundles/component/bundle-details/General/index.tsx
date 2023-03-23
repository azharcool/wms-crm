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
import useGetByIdBundle from "hooks/querys/catalog/bundle/useGetByIdBundle";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IBundleDetails } from "types/catalog/bundles/getBundleResponse";
import useGeneralForm, { IGeneralForm } from "../../../hooks/useGeneralForm";
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
  isTrue: boolean;
  data: IBundleDetails | undefined;
}

function General(props: IGeneral) {
  const { isTrue, data } = props;
  const [selectedFiles, setSelectedFiles] = useState<any>();
  const [name, setName] = useState<any>("");

  const { state } = useLocation();
  const { bundleId } = state;
  const {
    data: bundle,
    refetch,
    isLoading,
    isFetching: isFetchingBundle,
  } = useGetByIdBundle(bundleId);

  const initialValues: IGeneralForm = {
    name: bundle?.data.name || "",
    description: bundle?.data.description || "",
  };

  const onSubmit = async (values: IGeneralForm) => {
    //
  };

  const formik = useGeneralForm(onSubmit, initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
    resetForm,
  } = formik;

  useEffect(() => {
    setName(bundle?.data?.name);
  }, [bundle]);
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
                error={!!touched.name && !!errors.name}
                helperText={(touched.name && errors && errors.name) || ""}
                id="categoryName"
                label="Name"
                name="categoryName"
                size="small"
                value={values.name}
                onBlur={handleBlur("name")}
                onChange={handleChange("name")}
              />
              <TextField
                multiline
                disabled={isTrue}
                error={!!touched.description && !!errors.description}
                helperText={
                  (touched.description && errors && errors.description) || ""
                }
                id="description"
                label="Description"
                name="description"
                value={values.description}
                onBlur={handleBlur("description")}
                onChange={handleChange("description")}
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
                // label="sku"
                name="sku"
                size="small"
                value={bundle?.data?.sku}
                onChange={() => {}}
                onClickIcon={() => {}}
              />

              <TextField
                iconEnd
                disabled={isTrue}
                icon={<RefreshIcon />}
                id="barcode"
                // label="barcode"
                // label={!isTrue ? "Barcode" : bundle?.data?.barcode}
                name="barcode"
                size="small"
                value={bundle?.data?.barcode}
                onChange={() => {}}
                onClickIcon={() => {}}
              />
            </Stack>
          </CustomCardContent>
          <CustomCardContent title="Organization">
            <Stack direction="row" gap={2}>
              <TextField
                // isSelect
                disabled={isTrue}
                value={bundle?.data?.categoryName}
                id="categorys"
                // menuItems={categorys}
                name="categorys"
                size="small"
                // value={categorys[0].id}
                onSelectHandler={() => {}}
              />
              <TextField
                // isSelect
                disabled={isTrue}
                id="categorys"
                name="brand"
                // label="Brand"
                // menuItems={brands}
                value={bundle?.data?.brandName}
                size="small"
                // value={brands[0].id}
                onSelectHandler={() => {}}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                name="categoyTags"
                size="small"
                onChange={() => {}}
                id="categoyTags"
                // label="Tags"
                value={bundle?.data?.tag}
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
