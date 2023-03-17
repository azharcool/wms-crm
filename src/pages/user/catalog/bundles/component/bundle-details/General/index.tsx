import React, { useRef, useState } from "react";
import {
  Grid,
  Card,
  Typography,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Dropzone from 'react-dropzone';
import { Box, Stack } from "@mui/system";
import TextField from "components/textfield";

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
  const [selectedFiles, setSelectedFiles] = useState()
  const nameRef = useRef<any>(null);
  const [editable, setEditable] = useState(false);
  
  const onDrop=(files:any)=>{
    console.log("filess12",URL.createObjectURL(files[0]))
  }

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
                disabled={isTrue}
                // inputProps={fontColor}
                label="Name"
                name="categoryName"
                size="small"
                value="bundle"
                onChange={() => {}}
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
                icon={<RefreshIcon />}
                disabled={isTrue}
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
                id="categorys"
                disabled={isTrue}
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
                 <Dropzone onDrop={onDrop} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <Grid container xs={12}>
              <Grid item {...getRootProps({ className: '' })} sx={{ p:2}}>
                <input {...getInputProps()} />
                {selectedFiles ? (
                  <Box className="selected-file">
                    {selectedFiles}
                  </Box>
                ) : (
                    <Typography color="text.secondary" variant="subtitle1">
                  Drop your image here, or click to select
                  </Typography>
                )}
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
