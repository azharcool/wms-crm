import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import ReceiveList from "./component/list/ReceiveList";

function Receive() {
  const [receivePagination, setReceivePagination] = useState({
    pageSize: 10,
    page: 0,
  });

  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
          navTitle="Stock Control"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () =>
                // navigate(
                //   `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.adjustment.create}`,
                // ),
                {},
              icon: (
                <AddCircleIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
          ]}
          title="Receive"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <ReceiveList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Receive;
