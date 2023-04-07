import { Box, Button, Card, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CustomCardContent from "components/card/CustomCardContent";
import DashedCard from "components/card/DashedCard";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { Dispatch, SetStateAction, useState, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useReactToPrint } from "react-to-print";
import Barcode from "react-barcode";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";

interface IUnitBarcode {
  open: boolean;
  handleClose: () => void;
}

function AdjustmentBarcode(props: IUnitBarcode) {
  const { open, handleClose } = props;
  const [quantity, setQuantity] = useState<SetStateAction<string>>("1");
  const [serialNumbers, setSerialNumbers] = useState<String[]>([]);

  const handleGenerate = () => {
    const serials = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < Number(quantity); i++) {
      const randomNumber = Math.floor(Math.random() * 90000) + 10000;
      serials.push(randomNumber.toString());
    }
    setSerialNumbers(serials);
    setQuantity("");
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current!,
    pageStyle:
      "@page { size: auto; margin: 5mm; } @media  print { html, body { height: 100vh; page-break-inside: auto; margin: 0 !important; padding: 0 !important; page-brake-before:always;}}",
  });
  return (
    <Slider
      buttonText="Print"
      handleChange={handlePrint}
      handleClose={handleClose}
      open={open}
      size="sm"
      title="Barcode units"
    >
      <PerfectScrollbar>
        <Stack
          gap={2}
          sx={{
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={2}
              >
                <TextField
                  label="Quantity"
                  autoComplete="off"
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  size="small"
                />
                <Button
                  sx={{
                    backgroundColor: palette.warning.dark,
                    boxShadow: "none",
                    width: "250px",
                    borderRadius: "5px",
                    padding: "8px 25px",
                    mb: 1,
                    "&:hover": {
                      backgroundColor: palette.warning.dark,
                      opacity: 0.6,
                      boxShadow: "none",
                    },
                  }}
                  variant="contained"
                  onClick={handleGenerate}
                >
                  Generate
                </Button>
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="">
              <PerfectScrollbar>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                  ref={componentRef}
                  id="barcode"
                >
                  {serialNumbers.map((serial) => {
                    return (
                      <Box m={2} sx={{ pageBreakAfter: "always" }}>
                        <Barcode
                          key={Number(serial)}
                          background="#FFFFFF"
                          lineColor="#000"
                          value={serial.toString()}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </PerfectScrollbar>
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AdjustmentBarcode;
