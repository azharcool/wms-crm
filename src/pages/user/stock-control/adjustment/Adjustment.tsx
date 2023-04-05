import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import useGetAllAdjustment from "hooks/querys/stock/adjustment/useGetAllAdjustment";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import AdjustmentList from "./component/list/AdjustmentList";

function Adjustment() {
  const [adjustmentPagination, setAdjustmentPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const {data:adjustmentPaginationResponse} = useGetAllAdjustment(adjustmentPagination);
  const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          navTitle="Stock Control"
          isBulkDisabled={false}
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
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
        <AdjustmentList data={adjustmentPaginationResponse} />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Adjustment;
