import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import AdjustmentReasonsList from "./components/list/AdjustmentReasonsList";

function AdjustmentReasons() {
  const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          navTitle="CONFIGURATION"
          isBulkDisabled={false}
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () =>
                navigate(
                  `/${AppRoutes.purchases.layout}/${AppRoutes.setting.configuration}`,
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
          title="Adjustment Reasons"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <AdjustmentReasonsList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default AdjustmentReasons;
