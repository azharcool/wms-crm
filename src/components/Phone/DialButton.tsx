import CallRoundedIcon from "@mui/icons-material/CallRounded";
import { IconButton, Tooltip } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";
import * as React from "react";
import palette from "theme/palette";
import Dialer from "./DialPad";

const emails = ["username@gmail.com", "user02@gmail.com"];
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
export function PhoneDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Dialer />
    </Dialog>
  );
}
export default function DialButton() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box>
      <Tooltip title="Contacts">
        <IconButton
          sx={{
            ml: 2,
            backgroundColor: palette.success.light,
            color: "#fff",
            "&:hover": {
              color: palette.success.light,
            },
          }}
          onClick={handleClickOpen}
        >
          <CallRoundedIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
      <PhoneDialog
        open={open}
        selectedValue={selectedValue}
        onClose={handleClose}
      />
    </Box>
  );
}
