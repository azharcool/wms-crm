import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { Transition } from "components/layouts/popup-modals/Transition";
import * as React from "react";

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
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
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
