import { createTheme } from "@mui/material";
import { Colors } from "./Colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
    primary: {
      light: Colors.lightGrey,
      main: Colors.white,
      dark: Colors.black,
      darkBlue: Colors.darkBlue,
    },
    secondary: {
      light: Colors.lightRed,
      main: Colors.brown,
      contrastText: Colors.lighterGrey,
    },
  },
});

export default darkTheme;
