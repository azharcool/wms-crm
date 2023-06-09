import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CardContent } from "@mui/material";
import { Box, Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";
import UnitListing from "./component/UnitListing";

function Units() {
  const navigate = useNavigate();
  return (
    <Container>
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
              title: "Print Barcode",
              onClick: () => {},
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
          title="Units"
        />
        <Box sx={{ mt: 3 }}>
          <UnitListing />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Units;
