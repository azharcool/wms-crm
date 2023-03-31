import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import { IGetByIdVariantData } from "types/catalog/variants/getByIdVariantResponse";
import CustomCardContent from "components/card/CustomCardContent";
import { Dispatch, SetStateAction, useEffect } from "react";
import palette from "theme/palette";
import UploadButton from "components/image-upload-button/UploadButton";
import { IUploadFile } from "..";

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: IGetByIdVariantData;
  setUploadedFiles: Dispatch<SetStateAction<IUploadFile[]>>;
  uploadedFiles: IUploadFile[];
  formik: FormikProps<any>;
}

interface ICustomAccordian {
  title: string;
  children: React.ReactNode;
}
function CustomAccordian(props: ICustomAccordian) {
  const { title, children } = props;
  return (
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon />}
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default function General(props: IGeneral) {
  const {
    isTrue,
    nameRef,
    editable,
    data,
    formik,
    setUploadedFiles,
    uploadedFiles,
  } = props;
  const handleFile = async (e: any) => {
    const allFiles = Array.from(e.target.files);
    const images = await Promise.all(
      allFiles.map((file) => convertBase64(file)),
    );

    const newUploadedFiles = images.map((item) => ({
      id: crypto.randomUUID(),
      value: item,
    }));

    setUploadedFiles((s: any) => [...s, ...newUploadedFiles]);
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
  // const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (data) {
      formik?.setFieldValue("productName", data?.productName || "");
      formik?.setFieldValue("optionName", data?.optionName || "");
      formik?.setFieldValue("variantName", data?.variantName || "");
      formik?.setFieldValue("height", data?.height);
      formik?.setFieldValue("weight", data?.weight);
      formik?.setFieldValue("width", data?.width);
      formik?.setFieldValue("length", data?.length);
      formik?.setFieldValue("mrp", data?.mrp || "");
      formik?.setFieldValue("retailPrice", data?.retailPrice || "");
      formik?.setFieldValue("supplyPrice", data?.supplyPrice);
      formik?.setFieldValue("sku", data?.sku || "");
      formik?.setFieldValue("barcode", data?.barcode || "");
      formik?.setFieldValue("value", data?.value || "");
      formik?.setFieldValue("crossDocking", data?.crossDocking || "");
    }
  }, [data]);

  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    width: "5rem",
    height: "5rem",
  };
  const istrue = !editable;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={8} xs={6}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Options">
              <Stack direction="row" gap={2}>
                <TextField
                  disabled={istrue}
                  id="optionName"
                  label={data?.optionName}
                  name="optionName"
                  //   nameRef={nameRef}
                  size="small"
                  value={formik?.values.optionName}
                  onChange={formik.handleChange("optionName")}
                />
              </Stack>
            </CustomCardContent>
          </Card>

          <Card
            sx={{
              flex: 1,
              mt: 2,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="row" gap={2}>
                <TextField
                  disabled={istrue}
                  id="productName"
                  label="Name"
                  name="productName"
                  //   nameRef={nameRef}
                  size="small"
                  value={formik?.values.productName}
                  onChange={formik.handleChange("productName")}
                />

                <TextField
                  disabled={istrue}
                  id="description"
                  label="Description"
                  name="description"
                  size="small"
                  value={formik?.values.description || "Not provided"}
                  // onChange={formik.handleChange("description")}
                />
              </Stack>
            </CustomCardContent>
          </Card>
          <Card sx={{ flex: 1, mt: 2 }}>
            <CustomCardContent title="Image">
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={2}
                justifyContent="center"
              >
                {!isTrue ? (
                  // uploadedFiles.map((item: any) => {
                  //   return (
                  <Box
                    // key={item.id}
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
                      // onClick={() => {
                      //   const newUploadedFile = uploadedFiles.filter(
                      //     (i: any) => i.id !== item.id,
                      //   );
                      //   setUploadedFiles(newUploadedFile);
                      // }}
                    />
                    <img
                      // alt={item.value}
                      // src={item.value}
                      alt="imag"
                      src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                      style={{
                        width: "120px",
                        height: "120px",
                      }}
                    />
                  </Box>
                ) : (
                  //   );
                  // })
                  <>
                    {/* {data?.picture.map((images: any) => {
                  return ( */}
                    <Box
                      // key={images}
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
                        src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                        // src={`${FILE_URL}${images.atachment}`}
                        style={{
                          objectFit: "cover",
                          width: "120px",
                          height: "120px",
                          borderRadius: "5px",
                          border: "0.5px solid #eee",
                        }}
                      />
                    </Box>
                    {!isTrue && <UploadButton handleFile={handleFile} />}
                  </>
                )}
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item md={4} xs={6}>
          {/* <Card> */}
          <CustomAccordian title="Supply">
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="supplier"
                label="Supplier"
                name="supplier"
                //   nameRef={nameRef}
                size="small"
                value="Not provided"
                onChange={formik.handleChange("supplier")}
              />
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Tracking">
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="sku"
                label="SKU"
                name="sku"
                //   nameRef={nameRef}
                size="small"
                value={formik?.values.sku}
                onChange={formik.handleChange("sku")}
              />

              <TextField
                disabled={istrue}
                id="barcode"
                label="Barcode"
                name="barcode"
                size="small"
                value={formik?.values.barcode}
                onChange={formik.handleChange("barcode")}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Unique Barcoding strategy"
                name="categorySlug"
                size="small"
                value="Per SKU or Set"
                onChange={formik.handleChange("categorySlug")}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Barcode"
                name="barcode"
                size="small"
                value="Per SKU or Set"
                onChange={formik.handleChange("barcode")}
              />
              <Stack direction="row" gap={2}>
                <TextField
                  disabled={istrue}
                  id="categoryName"
                  label="Quantity"
                  name="quantity"
                  //   nameRef={nameRef}
                  size="small"
                  value="1"
                  onChange={formik.handleChange("quantity")}
                />

                <TextField
                  disabled={istrue}
                  id="uom"
                  label="UoM"
                  name="uom"
                  size="small"
                  value="Not provided"
                  onChange={formik.handleChange("uom")}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Dimensions">
            <Stack direction="row" gap={2}>
              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>cm</Typography>}
                id="height"
                label="Height"
                name="height"
                size="small"
                value={formik?.values.height}
                onChange={formik.handleChange("height")}
              />

              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>cm</Typography>}
                id="width"
                label="Width"
                name="width"
                size="small"
                value={formik?.values.width}
                onChange={formik.handleChange("width")}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>cm</Typography>}
                id="length"
                label="Lenght"
                value={formik?.values.length}
                onChange={formik.handleChange("length")}
                name="length"
                //   nameRef={nameRef}
                size="small"
              />

              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>kg</Typography>}
                id="weight"
                label="Weight"
                name="weight"
                size="small"
                value={formik?.values.weight}
                onChange={formik.handleChange("weight")}
              />
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Reorder">
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="Reorder Point "
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value="0"
                // onChange={{}}
              />

              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Reorder Quantity "
                name="categoySlug"
                size="small"
                value="0"
                // onChange={{}}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Min Replenishment Point"
                name="categoySlug"
                size="small"
                value="0"
                // onChange={{}}
              />
              <TextField
                disabled={istrue}
                id="categoySlug"
                label="Max Replenishment Point"
                name="categoySlug"
                size="small"
                value="0"
                // onChange={{}}
              />
            </Stack>
          </CustomAccordian>
          <CustomAccordian title="Fulfillment">
            <Stack direction="column" gap={2}>
              <TextField
                disabled={istrue}
                id="categoryName"
                label="Fulfillment"
                name="categoryName"
                //   nameRef={nameRef}
                size="small"
                value=""
                // onChange={{}}
              />

              <TextField
                iconEnd
                disabled={istrue}
                icon={<Typography>INR</Typography>}
                id="supplyPrice"
                label="Sync Supply Price"
                name="supplyPrice"
                size="small"
                value={formik.values.supplyPrice}
                onChange={formik.handleChange("supplyPrice")}
              />
            </Stack>
          </CustomAccordian>
        </Grid>
      </Grid>
    </Box>
  );
}
