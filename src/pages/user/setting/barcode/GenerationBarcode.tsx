/* eslint-disable import/no-extraneous-dependencies */
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { detailMenu } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { useState } from "react";
import Barcode from "react-barcode";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";
import { generateRandomNumber } from "utils";

function GenerationBarcode() {
  const [barcodeValue, setBarcodeValue] = useState<any>();
  const [quantity, setQuantity] = useState<any>(0);
  const [barcodes, setBarcodes] = useState<string[]>([]);

  const genBarCode = () => {
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
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={[{ link: "CATAGORIES", to: "/BrandDetails" }]}
          buttonText="Save"
          handleClick={() => {}}
          title="BrandDetails"
        />
        <Grid container>
          <Grid xs={6}>
            <Card sx={{ m: 2 }}>
              <CustomCardContent title="Details">
                <Stack direction="column" gap={2}>
                  <TextField
                    endIcon={<RefreshIcon />}
                    id="barcode"
                    name="barcode"
                    size="small"
                    value={barcodeValue}
                    onClickIcon={() => {
                      const newBarcode = generateRandomNumber(13);
                      setBarcodeValue(newBarcode);
                    }}
                  />
                  <TextField
                    id="categoryName"
                    label="Quantity"
                    name="categoryName"
                    size="small"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <TextField
                    isSelect
                    id="productType"
                    label="Type"
                    menuItems={detailMenu}
                    name="productType"
                    size="small"
                    value=""
                  />
                  <TextField
                    isSelect
                    id="productType"
                    label="Font Size"
                    menuItems={detailMenu}
                    name="productType"
                    size="small"
                    value=""
                  />
                  <Button
                    sx={{
                      backgroundColor: palette.warning.dark,
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: palette.warning.dark,
                        boxShadow: "none",
                        opacity: 0.8,
                      },
                    }}
                    variant="contained"
                    onClick={genBarCode}
                  >
                    Generate Barcode
                  </Button>
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card
              sx={{
                m: 2,
                minHeight: "300px",
              }}
            >
              <CustomCardContent title="Details">
                <Stack
                  direction="column"
                  gap={2}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    maxHeight: "400px",
                  }}
                >
                  <PerfectScrollbar>
                    {barcodes
                      ? barcodes?.map((item) => {
                          return (
                            <Barcode
                              key={item}
                              background="#FFFFFF"
                              lineColor="#000"
                              value={item}
                            />
                          );
                        })
                      : null}
                  </PerfectScrollbar>
                  {barcodes.length === 0 ? (
                    <Typography>Please Generate Barcode</Typography>
                  ) : null}
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Container>
  );
}

export default GenerationBarcode;
