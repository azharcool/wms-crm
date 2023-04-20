import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";
import RoleListing from "./component/list/RoleListing";

function Roles() {
  const navigate = useNavigate();
  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          navTitle="Settings"
          title="Rolls"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate("/setting/role/create");
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
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <RoleListing />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Roles;
