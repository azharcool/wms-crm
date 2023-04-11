import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllAdjustment from "hooks/querys/stock/adjustment/useGetAllAdjustment";
import useAdjustmentAction from "hooks/stock/adjustment/useAdjustmentAction";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedAdjustment } from "redux/stock-control/adjustmentSelector";
import MovementList from "./component/list/MovementList";
// import AdjustmentList from "./component/list/AdjustmentList";

function Movement() {
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
                  `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.movement.create}`,
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
          title="Movement"
          onBulkHandle={() => {
            bulkDeleteAdjustmentAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <MovementList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Movement;
