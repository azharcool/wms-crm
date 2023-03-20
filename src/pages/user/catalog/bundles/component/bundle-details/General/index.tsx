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
import React, { useRef, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Dropzone from "react-dropzone";

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
}

function General(props: IGeneral) {
  const { isTrue } = props;
  const [imageList, setImageList] = useState<any>([]);

  const nameRef = useRef<any>(null);
  const [editable, setEditable] = useState(false);

  const onDrop = (acceptedFiles: any) => {
    acceptedFiles.map((file: any, index: number) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImageList((prevState: any) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
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
                id="categoryName"
                name="categoryName"
                size="small"
                value="bundle"
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
                label="Sku"
                name="sku"
                size="small"
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
                label="Barcode"
                name="barcode"
                size="small"
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
                isSelect
                disabled={isTrue}
                id="categorys"
                // menuItems={categorys}
                name="categorys"
                size="small"
                // value={categorys[0].id}
                onSelectHandler={() => {}}
              />
              <TextField
                isSelect
                disabled={isTrue}
                id="categorys"
                label="Brand"
                // menuItems={brands}
                name="brand"
                size="small"
                // value={brands[0].id}
                onSelectHandler={() => {}}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="categoyTags"
                label="Tags"
                name="categoyTags"
                size="small"
                value="0"
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
                {/* <input
                          multiple
                          id="files"
                          style={{ display: "none" }}
                          onChange={(e) => handleFileRead(e)}
                        /> */}
                <Dropzone multiple={false} onDrop={onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <Grid container xs={12}>
                      <Grid
                        item
                        {...getRootProps({ className: "" })}
                        sx={{ p: 2 }}
                      >
                        <input {...getInputProps()} />

                        <Typography color="text.secondary" variant="subtitle1">
                          Drop your image here, or click to select
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </Dropzone>
                {/* <img
                  alt="new"
                  src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                  style={{ objectFit: "cover" }}
                  width="100%"
                /> */}
              </Box>
            </Box>
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default General;
