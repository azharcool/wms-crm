import { colors } from "@mui/material";

const white = "#FFFFFF";
const black = "#000000";

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    /* Custom text color types */
    tertiary: string;
    link: string;
  }

  /* Custom Checkbox colors */
  interface CheckBoxPalette {
    dark: string;
    main: string;
    border: string;
    hover: string;
    disabled: string;
  }

  interface Palette {
    accentColor: Palette["primary"];
    checkbox: CheckBoxPalette;
  }

  interface PaletteOptions {
    accentColor?: PaletteOptions["primary"];
    checkbox?: CheckBoxPalette;
  }
}

export default {
  type: "light",
  common: {
    black,
    white,
  },
  primary: {
    contrastText: white,
    dark: "#1A2245",
    main: "#28356A",
    light: "#3D51A2",
  },
  secondary: {
    contrastText: white,
    dark: "#9E2540",
    main: "#B32A48",
    light: "#D23E5F",
    lightGray: "rgb(137 150 171)",
  },
  accentColor: {
    dark: "#956D04",
    main: "#F9BC1D",
    light: "##FBD36A",
  },
  success: {
    contrastText: white,
    dark: colors.green[900], //  900: '#1b5e20',
    main: "#41DA7E",
    light: "#68EBCA",
    lightBg: "rgba(39, 174, 95, 0.1)",
    lightGreen: "#27AE60",
  },
  info: {
    contrastText: white,
    dark: "#151B54", //  900: '#0d47a1',
    main: "#e65100",
    light: colors.blue[400], //  400: '#42a5f5',
    lightBg: "#ffa726",
    lightBg2: "rgba(60, 126, 243, 0.1)",
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900], // 900: '#e65100',
    main: "#EEAF22",
    light: colors.orange[400], //  400: '#ffa726',
    orange: "#ff5858",
    light_10: "rgb(253 247 231)",
  },
  box: {
    dark: "#ee9f27",
    light: "#f9ddb1",
  },
  error: {
    contrastText: white,
    dark: colors.red[900], //  900: '#b71c1c',
    main: "#F04461",
    light: colors.red[400], //  400: '#ef5350',
    lightBg: "rgba(255, 38, 74, 0.1)",
    lightRed: "#FF264A",
  },
  text: {
    primary: "#000000",
    secondary: "#133159",
    tertiary: "#1D1D1DCC",
    link: "#F3692E",
    topNav: "#555555",
    muted: "#546376",
  },
  action: {
    disabled: "#A0A0A0",
    hover: "rgba(40, 53, 106, 0.1)",
  },
  background: {
    default: white,
    paper: white,
  },
  divider: "rgba(29, 29, 29, 0.2)",
  checkbox: {
    dark: "#4D8BD5",
    main: "#4A8FE2",
    border: "#A3B0BE",
    hover: "#EBF1F5",
    disabled: "#DDE2E7",
  },
  sidebar: {
    navHover: "#A3C5FF",
  },
  gray: {
    light: "#F6F7FB",
  },
};
