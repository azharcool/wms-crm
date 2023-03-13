import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import { grey, purple } from "@mui/material/colors";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
function DeleveryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          //   flexGrow: 1,
          py: 4,
        }}
      >
        {" "}
        <Box sx={{}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Received" color={palette.success.lightGreen} />
            <Tab label="Sent" />
            <Tab label="Expected" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItem: "center",
              flex: "start",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                background: palette.box.dark,
                borderRadius: 0.9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SystemUpdateAltIcon sx={{ color: "white" }} />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography variant="subtitle1">Box 132883</Typography>
              <Typography variant="caption">Deleverd 06:15pm</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItem: "center",
              flex: "start",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                background: palette.box.dark,
                borderRadius: 0.9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SystemUpdateAltIcon sx={{ color: "white" }} />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography variant="subtitle1">Box 132883</Typography>
              <Typography variant="caption">Deleverd 06:15pm</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItem: "center",
              flex: "start",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                background: palette.box.dark,
                borderRadius: 0.9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SystemUpdateAltIcon sx={{ color: "white" }} />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography variant="subtitle1">Box 132883</Typography>
              <Typography variant="caption">Deleverd 06:15pm</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItem: "center",
              flex: "start",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                background: palette.box.dark,
                borderRadius: 0.9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SystemUpdateAltIcon sx={{ color: "white" }} />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography variant="subtitle1">Box 132883</Typography>
              <Typography variant="caption">Deleverd 06:15pm</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItem: "center",
              flex: "start",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                background: palette.box.dark,
                borderRadius: 0.9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SystemUpdateAltIcon sx={{ color: "white" }} />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography variant="subtitle1">Box 132883</Typography>
              <Typography variant="caption">Deleverd 06:15pm</Typography>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}

export default DeleveryTabs;
