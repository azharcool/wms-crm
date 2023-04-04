import { Box, Card, Stack } from "@mui/material";
import Slider from "components/layouts/popup-modals/Slider";
import useWarehouse from "hooks/warehouse/useWarehouse";
import AppRoutes from "navigation/appRoutes";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

interface IShowScanedItems {
  open: boolean;
  handleClose: () => void;
}

function ShowScanedItems(props: IShowScanedItems) {
  const { open, handleClose } = props;
  const { warehouse } = useWarehouse();
  const navigate = useNavigate();

  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        // handleSubmit();
      }}
      handleClose={handleClose}
      //   isSubmitting={isSubmitting}
      open={open}
      size="md"
      title="Scanned Items"
    >
      <PerfectScrollbar>
        <Stack
          alignItems="center"
          flexDirection="row"
          flexWrap="wrap"
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
                  padding: "16px",
                  fontSize: "20px",
                  fontWeight: "600",
                  cursor: "pointer",
                  width: "45%",
                  height: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  navigate(
                    `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.putaway_v2.create}`,
                  );
                }}
              >
                <Box>{item.value}</Box>
              </Card>
            );
          })}
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default ShowScanedItems;
