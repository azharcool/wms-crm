import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Box, Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import useGetAllAdjustment from "hooks/querys/setting/adjustment/useGetAllAdjustment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdjustmentReasonsCreate from "./components/AdjustmentReasonsCreate";
import AdjustmentReasonsList from "./components/list/AdjustmentReasonsList";

function AdjustmentReasons() {
  const [openForm, setOpenForm] = useState(false);
  const navigate = useNavigate();
  const [adjustmentPagination, setAdjustmentPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const {
    data: item,
    refetch,
    isLoading,
  } = useGetAllAdjustment(adjustmentPagination);

  const handleAdjustment = () => {
    setOpenForm((s) => !s);
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
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
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <AdjustmentReasonsList data={item} />
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
