import React from "react";
import { Card, CardContent } from "@mui/material";
import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import UnitListing from "./component/UnitListing";

function Units() {
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
            title="Units"
            rightActions={[
              {
                id: crypto.randomUUID(),
                title: "Print Barcode",
                onClick:()=>{},
                icon: (
                  <ArrowDropDownIcon
                    sx={{
                      fontSize: 22,
                      ml: 1,
                    }}
                  />
                ),
              },
            ]}
          />
          <Box sx={{ mt: 3 }}>
            <UnitListing />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Units;
