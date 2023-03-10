import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import TextField from "components/textfield";
import palette from "theme/palette";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
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

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
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
