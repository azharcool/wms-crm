import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
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
  const ids = getSelectedBulkIdsState.toString();

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={!!ids}
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
            if (ids) {
              bulkDeleteBundleAsync(ids);
            }
          }}
        />
        <Box sx={{ mt: 3 }}>
          <BundleListing />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Bundles;
