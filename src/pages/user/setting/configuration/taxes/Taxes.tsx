import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import TaxesCreate from "./components/TaxesCreate";
import TaxesList from "./components/list/TaxesList";

function Taxes() {
  const [openForm, setOpenForm] = useState(false);
  const [taxesPagination, setTaxesPagination] = useState({
    pageSize: 10,
    page: 0,
  });

  const handleAdjustment = () => {
    setOpenForm((s) => !s);
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
          navTitle="CONFIGURATION"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleAdjustment();
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
          title="Taxes"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <TaxesList />
        </Box>
      </CardContent>
      <>
        {openForm ? (
          <TaxesCreate handleClose={handleAdjustment} open={openForm} />
        ) : null}
      </>
    </Container>
  );
}

export default Taxes;
