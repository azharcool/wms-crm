import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useBundleAction from "hooks/catalog/bundle/useBundleAction";
import useGetAllBundle from "hooks/querys/catalog/bundle/useGetAllBundle";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBundle } from "redux/catalog/bundleSelector";
import BundleListing from "./component/BundleListing";

function Bundles() {
  const navigate = useNavigate();
  const [bundlePagination, setbundlePagination] = useState({
    pageSize: 10,
    page: 1,
  });

  const getSelectedBulkIdsState = useSelector(getSelectedBundle);
  const { bulkDeleteBundleAsync } = useBundleAction();
  const { data: bundlePaginationResponse, refetch } =
    useGetAllBundle(bundlePagination);
  const ids = getSelectedBulkIdsState.toString();

  const handlePageChange = (pageNo: number) => {
    setbundlePagination((prevState) => ({ ...prevState, page: pageNo }));
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setbundlePagination((prevState) => ({ ...prevState, pageSize: limit }));
    setTimeout(() => {
      refetch();
    }, 500);
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
            data={bundlePaginationResponse}
            paginationData={bundlePagination}
            setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
            setPageLimit={(limit: number) => handlePageLimitChange(limit)}
            total={bundlePaginationResponse?.totalDocs || 0}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Bundles;
