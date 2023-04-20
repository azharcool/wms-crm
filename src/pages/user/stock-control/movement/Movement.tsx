import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Box,
  Card,
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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import MovementList from "./component/list/MovementList";

function Movement() {
  const navigate = useNavigate();
  const [adjustmentPagination, setAdjustmentPagination] = useState({
    pageSize: 10,
    page: 1,
  });

  const customPopoverRef = React.useRef<ICustomPopoverRef>(null);

  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
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
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <MovementList />
        </Box>
      </CardContent>
      <CustomPopover ref={customPopoverRef} title="Choose mode">
        <ListItem>
          <Card sx={{ mt: 3 }}>
            <ListItemButton
              onClick={() =>
                navigate(
                  `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.movement.create}`,
                )
              }
            >
              <ListItemText primary=" Browser" />
            </ListItemButton>
          </Card>
          <Card sx={{ mt: 3, ml: 2 }}>
            <ListItemButton
              onClick={() =>
                navigate(
                  `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.movement.create}`,
                )
              }
            >
              <ListItemText primary=" Scan" />
            </ListItemButton>
          </Card>
        </ListItem>
      </CustomPopover>
    </Container>
  );
}

export default Movement;
