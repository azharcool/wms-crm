import { createTheme } from "@mui/material/styles";
import "@mui/material/styles/createPalette";
import { Colors } from "./Colors";

declare module "@mui/material/styles" {
  interface TypeBackground {
    darkBlue: string;
  }
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface PaletteColor {
    darkBlue?: string;
    brown?: string;
    lightRed?: string;
    tableButton?: {
      main?: string;
      light?: string;
    };
    icons?: {
      main?: string;
      light?: string;
    };
  }

  interface SimplePaletteColorOptions {
    darkBlue?: string;
    brown?: string;
    lightRed?: string;
    tableButton?: {
      main?: string;
      light?: string;
    };
    icons?: {
      main?: string;
      light?: string;
    };
  }

  interface TypeText {
    darkBlue?: string;
  }
}

const lightTheme = createTheme({
  status: {
    danger: "red",
  },
  palette: {
    mode: "light",
    background: {
      default: Colors.darkerGrey,
      paper: Colors.smoothLightGrey,
      darkBlue: Colors.darkerGrey,
    },
    primary: {
      light: Colors.lightGrey,
      main: Colors.white,
      dark: Colors.darkBlue,
      darkBlue: Colors.darkBlue,
      tableButton: {
        main: Colors.white,
        light: Colors.lightBlue,
      },
    },
    secondary: {
      light: Colors.lightRed,
      main: Colors.brown,
      contrastText: Colors.darkerGrey,
    },
    common: {
      white: Colors.white,
      black: Colors.black,
    },
    text: {
      darkBlue: Colors.darkBlue,
    },
  },
});

export default lightTheme;
