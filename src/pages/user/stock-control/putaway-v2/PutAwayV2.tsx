import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
// import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import OpenPutawayWarehouses from "./component/OpenPutawayWarehouses";
import PutAwayV2List from "./component/list/PutAwayV2List";

function PutAwayV2() {
  const [manageOpen, setManageOpen] = useState(false);

  const handleMange = () => {
    setManageOpen((s) => !s);
  };

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "New",
      onClick: () => {
        handleMange();
      },
      icon: (
        <AddCircleIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          navTitle="Stock Control"
          rightActions={rightActionsData}
          title="Putaway"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <PutAwayV2List />
        </Box>
      </CardContent>
      {manageOpen ? (
        <OpenPutawayWarehouses handleClose={handleMange} open={manageOpen} />
      ) : null}
    </Container>
  );
}

export default PutAwayV2;
