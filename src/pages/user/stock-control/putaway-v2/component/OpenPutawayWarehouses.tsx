import { Card, Stack } from "@mui/material";
import Slider from "components/layouts/popup-modals/Slider";
import useWarehouse from "hooks/warehouse/useWarehouse";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

interface IOpenPutawayWarehouses {
  open: boolean;
  handleClose: () => void;
}

function OpenPutawayWarehouses(props: IOpenPutawayWarehouses) {
  const { open, handleClose } = props;
  const { warehouse } = useWarehouse();

  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        // handleSubmit();
      }}
      handleClose={handleClose}
      //   isSubmitting={isSubmitting}
      open={open}
      size="sm"
      title="Choose Warehouse"
    >
      <PerfectScrollbar>
        <Stack
          gap={2}
          sx={{
            marginTop: "50px",
            borderRadius: "5px",
          }}
        >
          {warehouse.map((item) => {
            return (
              <Card
                sx={{
                  textAlign: "center",
                  padding: "16px",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {}}
              >
                {item.value}
              </Card>
            );
          })}
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default OpenPutawayWarehouses;
