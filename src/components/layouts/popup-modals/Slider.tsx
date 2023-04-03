import CloseIcon from "@mui/icons-material/CancelRounded";
import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  PaletteMode,
  Stack,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Transition } from "components/layouts/popup-modals/Transition";
import * as React from "react";
import { useSelector } from "react-redux";
import palette from "theme/palette";

interface ISlider {
  open: boolean;
  children?: React.ReactNode;
  size?: "lg" | "sm" | "md";
  noHeight?: boolean;
  title?: string;
  handleClose?: () => void;
  handleChange?: () => void;
  isSubmitting?: boolean;
  buttonText?: string;
}

function Slider(props: ISlider) {
  const {
    open,
    children,
    size,
    noHeight,
    title,
    handleChange,
    handleClose,
    isSubmitting,
    buttonText,
  } = props;
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
      <Box
        sx={
          {
            // backgroundColor: "#fdf9f6",
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
              // backgroundColor: "##fdf9f6",
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
          <DialogTitle>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <IconButton
              aria-label="close"
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#8B0000",
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent
            sx={{
              background: newtheme.isDarkMode ? "#26263D" : "#fdf9f6",
            }}
          >
            {children}
          </DialogContent>

          <DialogActions
            sx={{
              padding: "1.2rem 0",
              justifyContent: "center",
            }}
          >
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="center"
              spacing={2}
            >
              <Button
                autoFocus
                style={{ padding: "0.5rem 1rem", minWidth: 150 }}
                sx={{
                  backgroundColor: palette.warning.dark,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: palette.warning.dark,
                    opacity: 0.6,
                    boxShadow: "none",
                  },
                }}
                variant="contained"
                onClick={handleChange}
              >
                {isSubmitting ? (
                  <CircularProgress color="warning" size={20} />
                ) : (
                  buttonText
                )}
              </Button>

              <Button
                autoFocus
                color="error"
                startIcon={<CloseIcon />}
                style={{ padding: "0.5rem 1rem", backgroundColor: "#8B0000" }}
                sx={{
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#8B0000",
                    opacity: 0.6,
                    boxShadow: "none",
                  },
                }}
                variant="contained"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}

export default Slider;
