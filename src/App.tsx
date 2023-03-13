import React from "react";
import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import {
  amber,
  blueGrey,
  deepOrange,
  grey,
  purple,
} from "@mui/material/colors";
import Routes from "navigation";
import neutral from "./theme/newTheme";
import "./App.css";

function App() {
  const newtheme = useSelector((state: any) => state.theme);
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light",
        );
      },
    }),
    [],
  );

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
    <>
      <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
