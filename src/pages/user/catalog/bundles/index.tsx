import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import { useAlert } from "components/alert";
import TableToolbar from "components/table-toolbar";
import useBundleAction from "hooks/actions/catalog/bundle/useBundleAction";
import useGetAllBundle from "hooks/querys/catalog/bundle/useGetAllBundle";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBundle } from "redux/catalog/bundleSelector";
import { removeAllBundleIds } from "redux/catalog/bundleSlice";
import { useAppDispatch } from "redux/store";
import AppRoutes from "routes/appRoutes";
import BundleListing from "./component/BundleListing";

function Bundles() {
  const navigate = useNavigate();
  const alert = useAlert();
  const [bundlePagination, setBundlePagination] = useState({
    pageSize: 10,
    page: 0,
  });

  const getSelectedBulkIdsState = useSelector(getSelectedBundle);
  const dispatch = useAppDispatch();
  const { bulkDeleteBundleAsync } = useBundleAction();
  const { data: bundlePaginationResponse, refetch } =
    useGetAllBundle(bundlePagination);
  const ids = getSelectedBulkIdsState.toString();

  const handleBundleBulkDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete all selected bundles",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await bulkDeleteBundleAsync(ids);
        dispatch(removeAllBundleIds());
        // refetch();
      },
    });
  };
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
    <Container>
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
            handleBundleBulkDelete();
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
