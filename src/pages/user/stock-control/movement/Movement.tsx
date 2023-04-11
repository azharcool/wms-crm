import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Box,
  CardContent,
  Container,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import TableToolbar from "components/table-toolbar";
import CustomPopover, {
  ICustomPopoverRef,
} from "components/utilities-popup/CustomPopover";
import useGetAllAdjustment from "hooks/querys/stock/adjustment/useGetAllAdjustment";
import useAdjustmentAction from "hooks/stock/adjustment/useAdjustmentAction";
import AppRoutes from "navigation/appRoutes";
import React, { useState } from "react";
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
  const customPopoverRef = React.useRef<ICustomPopoverRef>(null);

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
              onClick: () => {
                if (customPopoverRef) {
                  customPopoverRef.current?.handlePopover();
                }
              },

              //   navigate(
              //     `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.movement.create}`,
              //   ),
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
          <MovementList />
        </Box>
      </CardContent>
      <CustomPopover ref={customPopoverRef} title="Choose mode">
        <ListItem>
          <ListItemButton
            onClick={() =>
              navigate(
                `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.movement.create}`,
              )
            }
          >
            <ListItemText primary=" Browser" />
          </ListItemButton>

          <ListItemButton
            onClick={() =>
              navigate(
                `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.movement.create}`,
              )
            }
          >
            <ListItemText primary=" Scan" />
          </ListItemButton>
        </ListItem>
      </CustomPopover>
    </Container>
  );
}

export default Movement;
