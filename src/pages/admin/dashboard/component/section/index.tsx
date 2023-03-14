import { CssBaseline, PaletteMode, Typography } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
import SectionBox from "./component/sections-box";

function Section() {
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
            Warehouse Logistics
          </Typography>
          <Box sx={{ m: 1 }}>
            <TextField
              isSelect
              id={undefined}
              menuItems={[
                { id: 1, value: "section1" },
                { id: 2, value: "section2" },
              ]}
              name=""
              size={undefined}
              style={{ width: "250px" }}
            />
          </Box>
        </Box>
        <SectionBox />
      </Box>
    </ThemeProvider>
  );
}

export default Section;
