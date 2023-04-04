import { Box } from "@mui/material";
import LineItemsList from "./LineItemsList";
import ReceivingInformationList from "./ReceivingInformationList";

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
