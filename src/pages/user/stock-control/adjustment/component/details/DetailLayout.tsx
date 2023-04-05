import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Container,
  PaletteMode,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAdjustmentSelected } from "redux/stock-control/adjustmentSelector";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function DetailLayout() {
  const newtheme = useSelector((state: any) => state.theme);
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedAdjustment = useSelector(getAdjustmentSelected);

  const {
    stockControl: {
      layout,
      adjustment: { generalDetails, historylisting, details },
    },
  } = AppRoutes;
  const navLinks = new Map([
    [0, `/${layout}/${details}/${selectedAdjustment.id}/${generalDetails}`],
    [1, `/${layout}/${details}/${selectedAdjustment.id}/${historylisting}`],
  ]);

  useEffect(() => {
    navLinks.forEach((value, key) => {
      if (value.includes(location.pathname)) {
        setValue(key);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    const link = navLinks.get(newValue || 0);

    if (link) {
      navigate(link);
    }
  };

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
      title: "Complete",
      onClick: () => {
        // setEditable(false);
      },
      icon: (
        <CheckIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Edit",
      onClick: () =>
        navigate(
          `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.adjustment.create}`,
        ),
      icon: (
        <EditIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];
  const istrue = !true;

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[
            {
              link: "ADJUSTMENT",
              to: `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.adjustment.listing}`,
            },
          ]}
          buttonText="Save"
          handleClick={() => {}}
          navTitle={`Stock Adjustment ${selectedAdjustment.name}`}
          rightActions={rightActionsData}
          title={`Stock Adjustment ${selectedAdjustment.name}`}
        />
        <Stack direction="row">
          <Tabs
            aria-label="basic tabs example"
            sx={{
              "& .MuiTab-root.Mui-selected": {
                color: "#c44e13",
              },
            }}
            TabIndicatorProps={{
              style: {
                background: "#c44e13",
              },
            }}
            value={value}
            onChange={handleChange}
          >
            <Tab label="GENERAL" />
            <Tab label="HISTORY" />
          </Tabs>
        </Stack>

        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default DetailLayout;
