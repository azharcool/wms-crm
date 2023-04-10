import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Box, Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import useGetAllAdjustment from "hooks/querys/stock/adjustment/useGetAllAdjustment";
import useAdjustmentAction from "hooks/stock/adjustment/useAdjustmentAction";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedAdjustment } from "redux/stock-control/adjustmentSelector";
import AdjustmentList from "./component/list/AdjustmentList";

function Adjustment() {
  const navigate = useNavigate();
  const [adjustmentPagination, setAdjustmentPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { data: adjustmentPaginationResponse } =
    useGetAllAdjustment(adjustmentPagination);
  const getSelectedAdjustmentIdsState = useSelector(getSelectedAdjustment);

  const { bulkDeleteAdjustmentAsync } = useAdjustmentAction();

  const ids = getSelectedAdjustmentIdsState.toString();

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={!!ids}
          navTitle="Stock Control"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () =>
                navigate(
                  `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.adjustment.create}`,
                ),
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
          title="Adjustment"
          onBulkHandle={() => {
            bulkDeleteAdjustmentAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <AdjustmentList data={adjustmentPaginationResponse} />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Adjustment;
