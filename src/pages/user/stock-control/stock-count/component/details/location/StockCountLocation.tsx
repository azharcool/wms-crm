import { Card, Container, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import useArea from "hooks/actions/warehouse/area/useArea";
import useWarehouse from "hooks/actions/warehouse/useWarehouse";
import useZone from "hooks/actions/warehouse/zone/useZone";
import useLocationForm, {
  locationInitialValues,
} from "pages/user/warehouse2/warehouse-details/locations/hooks/useLocationForm";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ManageStockCount } from "../../../hooks/useManageStockCount";

const initialValues: ManageStockCount = {
  warehouse: "",
  area: "",
  zone: "",
};

function Location() {
  const { warehouse } = useWarehouse();
  const { zones } = useZone();
  const { areas } = useArea();

  const { values, touched, errors, setFieldValue } = useLocationForm({
    initialValues: locationInitialValues,
    onSubmit,
  });

  async function onSubmit(values: ManageStockCount) {
    const data = {
      warehouse: values.warehouse,
      area: values.area,
      zone: values.zone,
    };
  }

  // function onSubmit() {}
  return (
    <Container>
      <Grid item xs={8}>
        <Card
          sx={{
            flex: 1,
            mt: "25px",
          }}
        >
          <CustomCardContent title="Location">
            <Stack direction="row" gap={3}>
              <TextField
                isSelect
                error={!!touched.area && !!errors.area}
                helperText={(touched.area && errors && errors.area) || ""}
                id="warehouse"
                label="Warehouse"
                menuItems={warehouse}
                name="warehouse"
                size="small"
                value={values.warehouse}
                onSelectHandler={(e) => {
                  setFieldValue("warehouse", e.target.value);
                }}
              />

              <TextField
                isSelect
                disabled={Boolean(!values.warehouse)}
                error={!!touched.area && !!errors.area}
                helperText={(touched.area && errors && errors.area) || ""}
                id="area"
                label="Area"
                menuItems={areas}
                name="area"
                size="small"
                value={values.area}
                onSelectHandler={(e) => {
                  setFieldValue("area", e.target.value);
                }}
              />
              <TextField
                isSelect
                disabled={Boolean(!values.area)}
                error={!!touched.zone && !!errors.zone}
                helperText={(touched.zone && errors && errors.zone) || ""}
                id="zone"
                label="Zone"
                menuItems={zones}
                name="zone"
                size="small"
                value={values.zone}
                onSelectHandler={(e) => {
                  setFieldValue("zone", e.target.value);
                }}
              />
            </Stack>
          </CustomCardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Location;
