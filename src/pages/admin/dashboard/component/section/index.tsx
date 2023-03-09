import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/system";
import TextField from "components/textfield";
import palette from "theme/palette";
import SectionBox from "./component/sections-box";

function Section() {
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
          <Typography
            sx={{ m: 1, color: palette.text.secondary, fontSize: 20 }}
            variant="h4"
          >
            Warehouse Logistics
          </Typography>
          <Box sx={{ m: 1 }}>
            <TextField
              style={{ width: "250px" }}
              isSelect
              menuItems={[
                { id: 1, value: "section1" },
                { id: 2, value: "section2" },
              ]}
            />
          </Box>
        </Box>
        <SectionBox />
      </Box>
    </ThemeProvider>
  );
}

export default Section;
