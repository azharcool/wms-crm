import { DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";

interface ICustomPopover {
  children: React.ReactNode;
  title: string;
}

export interface ICustomPopoverRef {
  handlePopover: () => void;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide ref={ref} direction="left" {...props} />;
});

function CustomPopover(
  props: ICustomPopover,
  ref: ForwardedRef<ICustomPopoverRef>,
) {
  const { children, title } = props;

  const [open, setOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      handlePopover: () => {
        setOpen((s) => !s);
      },
    }),
    [],
  );

  const handleClose = () => {
    setOpen((s) => !s);
  };

  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default forwardRef(CustomPopover);
