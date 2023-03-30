import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import AutoComplete from "components/textfield/AutoComplete";
interface IAdjustment {
  open: boolean;
  handleClose: () => void;
}

function AdjustmentReasonsCreate(props:IAdjustment) {
  const { open, handleClose } = props;

  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        // handleSubmit();
      }}
      handleClose={handleClose}
      open={open}
      size="sm"
      title="Create Adjustment"
      //   isSubmitting={isSubmitting}
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
            <CustomCardContent title="GENERAL">
              <Stack direction="row" gap={2}>
                <TextField
                  id="name"
                  label="Name"
                  name="Name"
                  size="small"
                />

                <TextField
                  id="operation"
                  label="Operation"
                  name="operation"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
          <Card
            sx={{
              flex: 1,
            }}
          >
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AdjustmentReasonsCreate;
