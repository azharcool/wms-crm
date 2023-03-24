import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { memo, useState } from "react";
import Barcode from "react-barcode";
import { generateRandomNumber } from "utils";
import { detailMenu } from "__mock__";

function Permissions() {
  const [barcodeValue, setBarcodeValue] = useState<any>();
  const [quantity, setQuantity] = useState<any>(10);
  const [barcodes, setBarcodes] = useState<string[]>([]);

  const genBarCode = () => {
    // // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-plusplus
    // barcodeValue
    //   ? setBarcodes(barcodeValue)
    //   : alert("Plese Enter proper vlaue");

    const barcodes: string[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < quantity; i++) {
      barcodes.push(barcodeValue);
    }
    if (barcodes) {
      setBarcodes(barcodes);
    }
  };

  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CardContent sx={{ paddingTop: 0 }}>
            <TableToolbar
              breadcrumbs={[{ link: "CATAGORIES", to: "/BrandDetails" }]}
              buttonText="Save"
              handleClick={() => {
                // navigate(AppRoutes.CATALOG.CategoriesDetail);
              }}
              // rightActions={
              //   editable
              //     ? rightActionsData.filter((i) => i.title !== "Edit")
              //     : rightActionsData.filter((i) => i.title === "Edit")
              // }
              title="BrandDetails"
            />
            <Grid container>
              <Grid xs={6}>
                <Card sx={{ m: 2 }}>
                  <CustomCardContent title="Details">
                    <Stack direction="column" gap={2}>
                      <TextField
                        iconEnd
                        // error={!!touched.barcode && !!errors.barcode}
                        // helperText={
                        //   (touched.barcode && errors && errors.barcode) || ""
                        // }
                        icon={<RefreshIcon />}
                        id="barcode"
                        // label="Barcode"
                        name="barcode"
                        size="small"
                        value={barcodeValue}
                        // onChange={handleChange("barcode")}
                        onClickIcon={() => {
                          const newBarcode = generateRandomNumber(13);
                          setBarcodeValue(newBarcode);
                        }}
                      />
                      <TextField
                        // disabled={istrue}
                        // error={!!touched.name && !!errors.name}
                        // helperText={(touched.name && errors && errors.name) || ""}
                        id="categoryName"
                        label="Quantity"
                        name="categoryName"
                        // nameRef={nameRef}
                        size="small"
                        value={quantity}
                        // onBlur={handleBlur("name")}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <TextField
                        isSelect
                        // disabled={isTrue}
                        id="productType"
                        label="Type"
                        menuItems={detailMenu}
                        name="productType"
                        size="small"
                        value=""
                        // onSelectHandler={(e) => {
                        //   formik?.setFieldValue("productType", e.target.value);
                        // }}
                      />
                      <TextField
                        isSelect
                        // disabled={isTrue}
                        id="productType"
                        label="Font Size"
                        menuItems={detailMenu}
                        name="productType"
                        size="small"
                        value=""
                        // onSelectHandler={(e) => {
                        //   formik?.setFieldValue("productType", e.target.value);
                        // }}
                      />
                      <Button variant="contained" onClick={genBarCode}>
                        Generate Barcode
                      </Button>
                    </Stack>
                  </CustomCardContent>
                </Card>
              </Grid>
              <Grid xs={6}>
                <Card sx={{ m: 2 }}>
                  <CustomCardContent title="Details">
                    <Stack direction="column" gap={2}>
                      {barcodes ? (
                        barcodes?.map((item) => {
                          return (
                            <Barcode
                              background="#FFFFFF"
                              lineColor="#000"
                              value={item}
                            />
                          );
                        })
                      ) : (
                        <h3>Please enter value</h3>
                      )}
                    </Stack>
                  </CustomCardContent>
                </Card>
              </Grid>
            </Grid>

            <Box sx={{ mt: 3 }} />
          </CardContent>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default memo(Permissions);
