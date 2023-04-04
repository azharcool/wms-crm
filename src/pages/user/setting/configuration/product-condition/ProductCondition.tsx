import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import ProductConditionList from "./components/list/ProductConditionList";
import ManageProductCondition from "./components/ManageProductCondition";

function ProductCondition() {
  const [manageOpen, setManageOpen] = useState(false);

  const handleManage = () => {
    setManageOpen((s) => !s);
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          navTitle="CONFIGURATION"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleManage();
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
          title="Product Condition"
        />
        <Box sx={{ mt: 3 }}>
          <ProductConditionList />
        </Box>
      </CardContent>

      {manageOpen ? (
        <ManageProductCondition handleClose={handleManage} open={manageOpen} />
      ) : null}
    </Container>
  );
}

export default ProductCondition;
