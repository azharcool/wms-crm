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
import React, { useCallback, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IBundleDetails } from "types/catalog/bundles/getBundleResponse";
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
  const [selectedFiles, setSelectedFiles] = useState();
  const { state } = useLocation();
  const { bundleId } = state;
  const {
    data: bundle,
    refetch,
    isLoading,
    isFetching: isFetchingBundle,
  } = useGetByIdBundle(bundleId);

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
                id="categoryName"
                name="categoryName"
                size="small"
                value={bundle?.data?.name}
                onChange={() => {}}
                disabled={isTrue}
                // inputProps={fontColor}
                label="Name"
              />
              <TextField
                multiline
                disabled={isTrue}
                id="description"
                label="Description"
                name="description"
                value={bundle?.data?.description}
                onChange={() => {}}
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
                onClickIcon={() => {
                  console.log("clicked....");
                }}
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
                onClickIcon={() => {
                  console.log("clicked....");
                }}
              />
            </Stack>
          </CustomCardContent>
          <CustomCardContent title="Organization">
            <Stack direction="row" gap={2}>
              <TextField
                // isSelect
                disabled={isTrue}
                id="categorys"
                // menuItems={categorys}
                name="categorys"
                value={bundle?.data?.categoryName}
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
                id="categoyTags"
                // label="Tags"
                value={bundle?.data?.tag}
                name="categoyTags"
                size="small"
                onChange={() => {}}
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
