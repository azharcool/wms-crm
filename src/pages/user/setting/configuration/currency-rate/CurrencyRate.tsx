import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import React, { useState } from "react";
import CurrencyList from "./component/list/CurrencyList";
import CurrencyCreate from "./component/CurrencyCreate";

function CurrencyRate() {
  const [openForm, setOpenForm] = useState(false);
  const handleCurencyCreate = () => {
    setOpenForm((s) => !s);
  };
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          navTitle="CONFIGURATION"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleCurencyCreate();
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
          ]}
          title="Currency Rate"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <CurrencyList />
        </Box>
      </CardContent>
      <>
        {openForm ? (
          <CurrencyCreate
            handleClose={handleCurencyCreate}
            open={openForm}
          />
        ) : null}
      </>
    </Container>
  );
}

export default CurrencyRate;
