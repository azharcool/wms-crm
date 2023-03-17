import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Card, CardContent, Container } from "@mui/material";

import TableToolbar from "components/table-toolbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddBrand from "./components/AddBrand";
import BrandListing from "./components/BrandListing";

function Brands() {
  const [openBrand, setOpenBrand] = useState(false);

  const handleVariant = () => {
    setOpenBrand((s) => !s);
  };
  const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
            buttonText="New"
            handleClick={() => {
              // navigate(AppRoutes.CATALOG.productCreate);
            }}
            navTitle="CATALOG"
            rightActions={[
              {
                id: crypto.randomUUID(),
                title: "New",
                onClick: () => {
                  handleVariant();
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
            title="Brands"
          />
          <Box sx={{ mt: 3 }}>
            <BrandListing />
          </Box>
        </CardContent>
      </Card>
      {openBrand ? (
        <AddBrand handleClose={handleVariant} open={openBrand} />
      ) : null}
    </Container>
  );
}

export default Brands;
function setOpenVariant(arg0: (s: any) => boolean) {
  throw new Error("Function not implemented.");
}
