import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
// import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import RecieveList from "./component/list/RecieveList";

function Recieve() {
  return (
    <Container maxWidth={false}>
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
          <RecieveList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Recieve;
