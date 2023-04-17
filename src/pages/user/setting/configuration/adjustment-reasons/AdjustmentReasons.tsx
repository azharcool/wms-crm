import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllAdjustmentReason from "hooks/querys/setting/adjustmentReason/useGetAllAdjustmentReason";
import { useState } from "react";
import { useSelector } from "react-redux";

import useAdjustmentReasonAction from "hooks/setting/adjustment-reason/useAdjustmentReasonAction";
import { getSelectedAdjustmentReason } from "redux/settings/configuration/adjustmentReasonSelector";
import AdjustmentReasonsCreate from "./components/AdjustmentReasonsCreate";
import AdjustmentReasonsList from "./components/list/AdjustmentReasonsList";

function AdjustmentReasons() {
  const [openForm, setOpenForm] = useState(false);
  const [adjustmentPagination, setAdjustmentPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const getSelectedAdjustmentReasonIdsState = useSelector(
    getSelectedAdjustmentReason,
  );

  const { bulkDeleteAdjustmentReasonAsync } = useAdjustmentReasonAction();

  const { data: adjustmentResponse, refetch } =
    useGetAllAdjustmentReason(adjustmentPagination);
  const ids = getSelectedAdjustmentReasonIdsState.toString();

  const handleAdjustment = () => {
    setOpenForm((s) => !s);
  };
  const handlePagination = (name: string, value: number) => {
    setAdjustmentPagination((s) => ({
      ...s,
      [name]: value,
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
          isBulkDisabled={!!ids}
          navTitle="CONFIGURATION"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleAdjustment();
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
          title="Adjustment Reasons"
          onBulkHandle={() => {
            bulkDeleteAdjustmentReasonAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <AdjustmentReasonsList
            adjustmentPagination={adjustmentPagination}
            data={adjustmentResponse}
            handlePagination={handlePagination}
          />
        </Box>
      </CardContent>
      <>
        {openForm ? (
          <AdjustmentReasonsCreate
            handleClose={handleAdjustment}
            open={openForm}
          />
        ) : null}
      </>
    </Container>
  );
}

export default AdjustmentReasons;
