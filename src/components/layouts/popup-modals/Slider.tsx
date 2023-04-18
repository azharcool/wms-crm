import CloseIcon from "@mui/icons-material/CancelRounded";
import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Transition } from "components/layouts/popup-modals/Transition";
import * as React from "react";
import palette from "theme/palette";

interface ISlider {
  open: boolean;
  children?: React.ReactNode;
  size?: "lg" | "sm" | "md";
  noHeight?: boolean;
  title?: string | React.ReactNode;
  handleClose?: () => void;
  handleChange?: () => void;
  isSubmitting?: boolean;
  buttonText?: string;
  isDisabled?: boolean;
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
    isDisabled,
  } = props;

  return (
    <Box>
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
        // sx={{
        //   background: newtheme.isDarkMode ? "#26263D" : "#fdf9f6",
        // }}
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
              disabled={isDisabled}
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
  );
}

export default Slider;
