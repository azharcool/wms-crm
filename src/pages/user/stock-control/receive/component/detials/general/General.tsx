import { Box } from "@mui/material";
import ReceivingInformationList from "./ReceivingInformationList";
import LineItemsList from "./line-items/LineItemsList";

function General() {
  return (
    <>
      <Box>
        <ReceivingInformationList />
      </Box>
      <Box>
        <LineItemsList />
      </Box>
    </>
  );
}

export default General;
