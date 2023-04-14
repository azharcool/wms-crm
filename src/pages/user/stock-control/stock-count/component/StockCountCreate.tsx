import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PrintIcon from "@mui/icons-material/Print";
import { Card, Container, Grid, PaletteMode, Stack } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import useDecodedData from "hooks/useDecodedData";
import useArea from "hooks/warehouse/area/useArea";
import useWarehouse from "hooks/warehouse/useWarehouse";
import useZone from "hooks/warehouse/zone/useZone";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import useAddMovementForm, {
  AddMovementForm,
} from "../../movement/hooks/useAddMovementForm";

const initialValues: AddMovementForm = {
  userId: 0,
  warehouse: "",
  area: "",
  zone: "",
  location: "",
};

function StockCountCreate() {
  const newtheme = useSelector((state: any) => state.theme);
  const userDecoded = useDecodedData();
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });

  async function onSubmit(values: AddMovementForm) {
    const data = {
      userId: Number(userDecoded.id),
      warehouse: values.warehouse,
      area: values.area,
      zone: values.zone,
      location: values.location,
    };
  }

  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        // setEditable(false);
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
      title: "Save Draft",
      onClick: () => {},
      icon: (
        <PrintIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  const { warehouse } = useWarehouse();
  const { zones } = useZone();
  const { areas } = useArea();

  const movementForm = useAddMovementForm({
    onSubmit,
    initialValues,
  });
  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = movementForm;

  const {
    stockControl: {
      layout,
      movement: { listing },
    },
  } = AppRoutes;

  const [areaLabel, setAreaLabel] = useState<string>("");
  const [zoneLabel, setZoneLabel] = useState<string>("");

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[
            {
              link: "Movement",
              to: "",
            },
          ]}
          buttonText="Save"
          handleClick={() => {
            // handleSubmit()
          }}
          navTitle=""
          rightActions={rightActionsData}
          title="Create stock count"
        />

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
                  name="warehouse"
                  size="small"
                  value={values.area}
                  onSelectHandler={(e) => {
                    setFieldValue("area", e.target.value);
                    const tempId = e.target.value;
                    const tempArr = areas.filter((item) => item.id === tempId);
                    setAreaLabel(tempArr[0].label);
                  }}
                />

                <TextField
                  isSelect
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
                    const tempId = e.target.value;
                    const tempArr = areas.filter((item) => item.id === tempId);
                    setAreaLabel(tempArr[0].label);
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
                    const tempId = e.target.value;
                    const tempArr = zones.filter((item) => item.id === tempId);
                    setZoneLabel(tempArr[0].label);
                  }}
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default StockCountCreate;
