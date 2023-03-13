import { Box, PaletteMode } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { Transition } from "components/layouts/popup-modals/Transition";
import * as React from "react";
import { grey, purple } from "@mui/material/colors";

interface ISlider {
  open: boolean;
  children: React.ReactNode;
  size?: "lg" | "sm";
  noHeight?: boolean;
}

function Slider(props: ISlider) {
  const { open, children, size, noHeight } = props;
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
      <Box
        sx={
          {
            // backgroundColor: "#F6F7FB",
          }
        }
      >
        <Dialog
          fullWidth
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          maxWidth={size || "lg"}
          open={open}
          PaperProps={{
            sx: {
              margin: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              height: noHeight ? null : "100vh",
              // backgroundColor: "#F6F7FB",
            },
          }}
          sx={{
            "& .MuiDialog-container.MuiDialog-scrollPaper": {
              justifyContent: "flex-end",
              ...(noHeight && { alignItems: "flex-start" }),
              height: noHeight ? null : "auto",
            },
          }}
          TransitionComponent={Transition}
        >
          {children}
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default Slider;
