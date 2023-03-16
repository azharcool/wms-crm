import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import BundleListing from "./component/BundleListing";

function Bundles() {
  const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
            buttonText="New"
            handleClick={() => {
            //   navigate(AppRoutes.CATALOG.productCreate);
            }}
            rightActions={[
              {
                id: crypto.randomUUID(),
                title: "Bulk Actions",
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
              {
                id: crypto.randomUUID(),
                title: "New",
                onClick:()=>{navigate(`${AppRoutes.CATALOG.bundleCreate}/${1}`)},
                icon: (
                  <AddIcon
                    sx={{
                      fontSize: 22,
                      ml: 1,
                    }}
                  />
                ),
              },
            ]}
            navTitle="CATALOG"
            title="Bundles"
          />
          <Box sx={{ mt: 3 }}>
            <BundleListing />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Bundles;
