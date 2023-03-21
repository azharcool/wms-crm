import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
};

interface ICustomModal {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}

function CustomModal(props: ICustomModal) {
  const { open, handleClose, children } = props;
  return (
    <Modal
      closeAfterTransition
      aria-describedby="transition-modal-description"
      aria-labelledby="transition-modal-title"
      open={open}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      slots={{ backdrop: Backdrop }}
      onClose={handleClose}
    >
      <Fade in={open}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}

export default CustomModal;
