import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  PaletteMode,
  Stack,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import GeneralList from "./component/GeneralList";

const statusMenu = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "Inactive",
  },
];

const conditionCode = [
  {
    id: "Azhar",
    value: "Azhar",
  },
  {
    id: "Riyaz",
    value: "Riyaz",
  },
  {
    id: "Sajid",
    value: "Sajid",
  },
];

interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon: React.ReactNode;
}

function ToolBarButton(props: ITooblarButton) {
  const { handleClick, title, icon } = props;

  return (
    <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
      <Button
        sx={{
          width: "inherit",
          borderRadius: "5px",
          padding: "5px 25px",
          backgroundColor: palette.warning.dark,
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: palette.warning.dark,
            opacity: 0.6,
            boxShadow: "none",
          },
        }}
        variant="contained"
        onClick={() => {
          handleClick?.();
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
        >
          {title}
        </Typography>
      </Button>
    </Box>
  );
}

function General() {
  const navigate = useNavigate();
  const newtheme = useSelector((state: any) => state.theme);

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
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "PUT",
      onClick: () => {
        // setEditable(false);
      },
    },
  ];

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <Stack direction="row" justifyContent="flex-end">
          {rightActionsData.map((item) => (
            <ToolBarButton
              key={item.id}
              handleClick={item.onClick}
              icon={undefined}
              title={item.title}
            />
          ))}
        </Stack>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={9}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Putaway Information">
                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled
                    id="lineItem"
                    label="Line Item"
                    name="lineItem"
                    size="small"
                    value={1}
                  />
                  <TextField
                    darkDisable
                    disabled
                    id="qty"
                    label="Qty"
                    name="qty"
                    size="small"
                    value={10}
                  />
                  <TextField
                    disabled
                    isSelect
                    id="status"
                    label="Status"
                    menuItems={statusMenu}
                    name="status"
                    size="small"
                    value={statusMenu[0].id}
                    onSelectHandler={(e) => {
                      //   setFieldValue("status", e.target.value);
                    }}
                  />
                </Stack>
                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled
                    id="fromLocation"
                    label="From Location"
                    name="fromLocation"
                    size="small"
                    value="RCV"
                  />
                  <TextField
                    darkDisable
                    disabled
                    id="duration"
                    label="Duration"
                    name="duration"
                    size="small"
                    value="00:03:12"
                  />
                  <TextField
                    darkDisable
                    disabled
                    id="createdDate"
                    label="Created Date"
                    name="createdDate"
                    size="small"
                    value="Mar 29, 2023"
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Assigned to">
                <Stack direction="row" flexWrap="wrap" gap={2} paddingY={3}>
                  <TextField
                    disabled
                    isSelect
                    id="categorys"
                    menuItems={conditionCode}
                    name="conditionCode"
                    size="small"
                    value={conditionCode[1].value}
                    onSelectHandler={(e) => {}}
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>

        <CardContent sx={{ padding: 0 }}>
          <Box sx={{ mt: 3 }}>
            <GeneralList />
          </Box>
        </CardContent>
      </Container>
    </ThemeProvider>
  );
}

export default General;
