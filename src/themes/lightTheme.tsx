import { createTheme } from "@mui/material";
import { Colors } from "./Colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const lightTheme = createTheme({
  status: {
    danger: "red",
  },
  palette: {
    mode: "light",
    background: {
      // light: Colors.primary as PaletteType,
      default: Colors.darkerGrey,
      paper: Colors.smoothLightGrey,
    },
    primary: {
      light: Colors.lightGrey,
      main: Colors.white,
      dark: Colors.darkBlue,
    },
    secondary: {
      light: Colors.lightRed,
      main: Colors.brown,
      contrastText: Colors.darkerGrey,
    },
  },
});

export default lightTheme;
