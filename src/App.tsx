import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, PaletteMode } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Routes from "navigation";
import neutral from "./theme/newTheme";
import "./App.css";
import { red } from "@mui/material/colors";

type IProps = {
  newtheme: any;
};

function App() {
  const newtheme = useSelector((state: any) => state.theme);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#1e1e2d",
  //       dark: "#1e1e2d",
  //       // light: "#000000",
  //     },
  //   },
  // });
  const darkTheme = createTheme({
    // palette: {
    //   mode: "dark",
    // },
    palette: {
      mode: "dark",
      primary: red,
      secondary: {
        main: "#1e1e2d",
      },
    },
  });
  // const getDesignTokens = (mode: PaletteMode) => ({
  //   palette: {
  //     mode,
  //     primary:
  //       ...neutral,
  //       ...(mode === 'dark' && {
  //         main: neutral[900]
  //       }),
  //     },
  //     ...(mode === 'dark' && {
  //       background: {
  //         default: neutral[900],
  //         paper: neutral[900],
  //       },
  //     }),
  // })

  return (
    <>
      <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
