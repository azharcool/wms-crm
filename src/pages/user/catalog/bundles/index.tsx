import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useBundleAction from "hooks/actions/catalog/bundle/useBundleAction";
import useGetAllBundle from "hooks/querys/catalog/bundle/useGetAllBundle";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBundle } from "redux/catalog/bundleSelector";
import BundleListing from "./component/BundleListing";

function Bundles() {
  const navigate = useNavigate();
  const [bundlePagination, setBundlePagination] = useState({
    pageSize: 10,
    page: 0,
  });

  const getSelectedBulkIdsState = useSelector(getSelectedBundle);
  const { bulkDeleteBundleAsync } = useBundleAction();
  const { data: bundlePaginationResponse, refetch } =
    useGetAllBundle(bundlePagination);
  const ids = getSelectedBulkIdsState.toString();

  const handlePagination = (name: string, value: number) => {
    setBundlePagination((s) => ({
      ...s,
      [name]: value,
      ...(name === "pageSize" && {
        page: 0,
      }),
    }));

    setTimeout(() => {
      refetch();
    });
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          buttonText="New"
          handleClick={() => {
            //   navigate(AppRoutes.CATALOG.productCreate);
          }}
          isBulkDisabled={!!ids}
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
          <BundleListing
            bundlePagination={bundlePagination}
            data={bundlePaginationResponse}
            handlePagination={handlePagination}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Bundles;
