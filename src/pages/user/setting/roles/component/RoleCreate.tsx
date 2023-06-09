import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Card, Container, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function RoleCreate() {
  const navigate = useNavigate();
  return (
    <Container>
      <TableToolbar
        navTitle="SETTINGS"
        rightActions={[
          {
            id: crypto.randomUUID(),
            title: "Cancel",
            onClick: () => {
              navigate(
                `/${AppRoutes.setting.layout}/${AppRoutes.setting.user.listing}`,
              );
            },
            icon: (
              <ArrowBackIosIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
            ),
          },
          {
            id: crypto.randomUUID(),
            title: "Save",
            onClick: () => {},
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
        title="New User"
      />

      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={8}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="column" gap={2}>
                <TextField id="name" label="Name" name="name" size="small" />
                <TextField
                  multiline
                  rows={6}
                  name="description"
                  label="Description"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RoleCreate;
