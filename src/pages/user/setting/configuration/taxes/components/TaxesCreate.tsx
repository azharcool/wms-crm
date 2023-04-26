import { Box, Button, Card, Stack, Switch } from "@mui/material";
import { taxtype } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ITaxes {
  open: boolean;
  handleClose: () => void;
  view?: boolean;
}

function TaxesCreate(props: ITaxes) {
  const { open, handleClose, view } = props;

  return (
    <>
      <Slider
        buttonText="save"
        handleChange={() => {}}
        handleClose={handleClose}
        open={open}
        size="sm"
        title="New Taxes"
      >
        <PerfectScrollbar>
          <Stack
            gap={2}
            sx={{
              marginTop: "10px",
              borderRadius: "5px",
            }}
          >
            {view ? (
              <Box>
                <Button
                  color="error"
                  size="small"
                  style={{ padding: "0.5rem 1rem", backgroundColor: "#8B0000" }}
                  sx={{
                    boxShadow: "none",
                    display: "inline-block",
                    "&:hover": {
                      backgroundColor: "#8B0000",
                      opacity: 0.6,
                      boxShadow: "none",
                    },
                  }}
                  variant="contained"
                  //   onClick={handleClick}
                >
                  {/* {editable ? "Clear" : "Edit"} */}
                </Button>
              </Box>
            ) : null}

            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title=" Taxes">
                <Stack direction="row" gap={1}>
                  <TextField id="name" label="Name" name="name" size="small" />
                </Stack>
                <Stack direction="row" gap={2}>
                  <TextField
                    isSelect
                    id="taxtype"
                    label="Tax type"
                    menuItems={taxtype}
                    name="taxtype"
                    size="small"
                    sxMenuListProps={{
                      backdropFilter: "blur(15px)",
                    }}
                  />

                  <TextField
                    id="tax_value"
                    label="value"
                    name="tax_value"
                    size="small"
                  />
                </Stack>
                <Switch defaultChecked />
              </CustomCardContent>
            </Card>
          </Stack>
        </PerfectScrollbar>
      </Slider>
    </>
  );
}

export default TaxesCreate;
