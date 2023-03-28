import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, PaletteMode, Typography } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { Box } from "@mui/system";
import palette from "theme/palette";

import Tooltip from "@material-ui/core/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import sections from "../../__mock__/sections.json";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1em",
        color: "white",
        backgroundColor: "green",
        borderRadius: 10,
        width: 140,
        height: 80,
      },
    },
  },
});

function SectionBox() {
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
      <Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            //   p: 1,
          }}
        >
          <Typography sx={{ m: 1, fontSize: 20 }} variant="h4">
            Section 005
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ ml: 1 }}>Show All</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {sections.map((box: any) => {
            const { id, isLoaded } = box;
            return (
              // <ThemeProvider
              //   theme={newtheme.isDarkMode ? darkTheme : lightTheme}
              // >
              <Tooltip title="Row 3 #487849 H60 x W40 x 20kg Delivered 06:10pm">
                <Box
                  key={id}
                  sx={{
                    width: 25,
                    height: 25,
                    background: isLoaded ? palette.box.dark : palette.box.light,
                    borderRadius: 0.9,
                  }}
                />
              </Tooltip>
              // </ThemeProvider>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", my: 2 }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: 25,
                height: 25,
                background: palette.box.light,
                borderRadius: 0.9,
              }}
            />
            <Typography sx={{ ml: 1 }}>Free place</Typography>
          </Box>
          <Box sx={{ display: "flex", ml: 2 }}>
            <Box
              sx={{
                width: 25,
                height: 25,
                background: palette.box.dark,
                borderRadius: 0.9,
              }}
            />
            <Typography sx={{ ml: 1 }}>Loaded place</Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SectionBox;
