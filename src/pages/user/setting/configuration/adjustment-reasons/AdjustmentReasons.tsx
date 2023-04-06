import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Box, Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import useGetAllAdjustmentReason from "hooks/querys/setting/adjustmentReason/useGetAllAdjustmentReason";
import useAdjustmentAction from "hooks/setting/adjustment/useAdjustmentAction";
import { useState } from "react";
import { useSelector } from "react-redux";

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

  const { bulkDeleteAdjustmentReasonAsync } = useAdjustmentAction();

  const { data: adjustmentResponse } =
    useGetAllAdjustmentReason(adjustmentPagination);
  const ids = getSelectedAdjustmentReasonIdsState.toString();
  const handleAdjustment = () => {
    setOpenForm((s) => !s);
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
          <AdjustmentReasonsList data={adjustmentResponse} />
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
