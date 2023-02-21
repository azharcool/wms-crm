import Fade from "@mui/material/Fade";
import Popper from "@mui/material/Popper";
import { ReactElement } from "react";

interface IPopper {
  open: boolean;
  anchorEl: HTMLElement | null;
  children: ReactElement;
}

function PopperContainer(props: IPopper) {
  const { open, anchorEl, children } = props;
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <Popper transition anchorEl={anchorEl} id={id} open={open}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          {children}
        </Fade>
      )}
    </Popper>
  );
}

export default PopperContainer;
