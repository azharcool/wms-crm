import { Snackbar as MUISnackbar } from "@mui/material";
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import React from "react";

type IProps = {
  open: boolean;
  title: string;
  type: AlertColor;
  handleClose: () => void;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
});

function Snackbar(props: IProps) {
  const { open, title, type, handleClose } = props;

  return (
    <MUISnackbar autoHideDuration={6000} open={open} onClose={handleClose}>
      <Alert severity={type} sx={{ width: "100%" }} onClose={handleClose}>
        {title}
      </Alert>
    </MUISnackbar>
  );
}

export default Snackbar;
