import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useBundleAction from "hooks/catalog/bundle/useBundleAction";
import AppRoutes from "navigation/appRoutes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBundle } from "redux/catalog/bundleSelector";
import BundleListing from "./component/BundleListing";

function Bundles() {
  const navigate = useNavigate();
  const getSelectedBulkIdsState = useSelector(getSelectedBundle);
  const { bulkDeleteBundleAsync } = useBundleAction();

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
            hasBulk
            buttonText="New"
            handleClick={() => {
              //   navigate(AppRoutes.CATALOG.productCreate);
            }}
            navTitle="CATALOG"
            rightActions={[
              {
                id: crypto.randomUUID(),
                title: "New",
                onClick: () => {
                  navigate(`${AppRoutes.CATALOG.bundleCreate}/${1}`);
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
            title="Bundles"
            onBulkHandle={() => {
              const ids = getSelectedBulkIdsState.toString();
              console.log({ ids });
              if (ids) {
                bulkDeleteBundleAsync(ids);
              }
            }}
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
