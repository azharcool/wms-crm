import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import TextFieldChip from "components/textfield/TextFieldChip";
import PerfectScrollbar from "react-perfect-scrollbar";
import palette from "theme/palette";

const itemsLabel = [
  {
    id: crypto.randomUUID(),
    value: "Image",
  },
  {
    id: crypto.randomUUID(),
    value: "Variant",
  },
  {
    id: crypto.randomUUID(),
    value: "SKU",
    subTitle: "Generate Sku",
  },
  {
    id: crypto.randomUUID(),
    value: "Barcode",
    subTitle: "Generate barcode",
  },
  {
    id: crypto.randomUUID(),
    value: "Supply",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "M.R.P",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "Retail price",
    subTitle: "Copy to all",
  },
  {
    id: crypto.randomUUID(),
    value: "Weight/Dimensions",
  },
  {
    id: crypto.randomUUID(),
    value: "Cross docking",
  },
  {
    id: crypto.randomUUID(),
    value: "Enabled",
  },
];

interface IAddVariant {
  open: boolean;
  handleClose: () => void;
}
function AddVariant(props: IAddVariant) {
  const { open, handleClose } = props;

  return (
    <Slider
      buttonText="Add Variants"
      handleChange={() => {}}
      handleClose={handleClose}
      open={open}
      title="Add Variants"
    >
      <PerfectScrollbar>
        <Box
          sx={{
            marginTop: "20px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <CustomCardContent title="Variant Options">
            <Button
              sx={{
                marginBottom: 2,
                flex: 1,
                backgroundColor: palette.warning.dark,
                color: "#fff",
                boxShadow: "none",
                opacity: 0.5,
                "&:hover": {
                  backgroundColor: palette.warning.dark,
                  opacity: 0.7,
                  boxShadow: "none",
                },
              }}
              variant="contained"
              onClick={() => {}}
            >
              Add Another Option
            </Button>

            <Grid container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  id="optionName"
                  label="Option name"
                  name="optionName"
                  size="small"
                  onChange={() => {}}
                />
              </Grid>

              <Grid item xs={9}>
                <TextFieldChip
                  chips={[
                    {
                      id: crypto.randomUUID(),
                      value: "honda",
                    },
                    {
                      id: crypto.randomUUID(),
                      value: "honda",
                    },
                    {
                      id: crypto.randomUUID(),
                      value: "honda",
                    },
                    {
                      id: crypto.randomUUID(),
                      value: "honda",
                    },
                  ]}
                  id="chip"
                  label="Values"
                  size="small"
                  style={{
                    width: "100%",
                  }}
                />
                <Button
                  disableFocusRipple
                  disableRipple
                  sx={{
                    ":hover": {
                      background: "transparent",
                    },
                    color: "red",
                  }}
                >
                  <DeleteIcon />
                </Button>
              </Grid>
            </Grid>
          </CustomCardContent>
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <CustomCardContent title="Items">
            <TableContainer>
              <PerfectScrollbar>
                <Table
                  sx={{
                    height: "100%",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      {itemsLabel.map((item) => {
                        return (
                          <TableCell
                            key={item.id}
                            sx={{
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "15px",
                              }}
                            >
                              {item.value}
                            </Typography>
                            {item.subTitle ? (
                              <Typography
                                sx={{
                                  textDecoration: "underline",
                                  fontSize: "12px",
                                  cursor: "pointer",
                                }}
                              >
                                {item.subTitle}
                              </Typography>
                            ) : null}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        sx={{
                          width: 50,
                          background: "white",
                        }}
                      >
                        <Box
                          sx={{
                            width: "40px",
                            height: "40px",
                          }}
                        >
                          <img
                            alt="new"
                            src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                            width="100%"
                          />
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Typography>tshirt ta </Typography>
                      </TableCell>

                      <TableCell>
                        <TextField
                          id="text"
                          label="sku"
                          name="sku"
                          onChange={() => {}}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </PerfectScrollbar>
            </TableContainer>
          </CustomCardContent>
        </Box>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AddVariant;
