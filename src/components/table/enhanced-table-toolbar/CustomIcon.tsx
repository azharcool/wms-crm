import { IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface ICustomIcon {
  children?: ReactNode;
  title: string;
}

function CustomIcon(props: ICustomIcon) {
  const { title, children } = props;
  return (
    <Tooltip title={title}>
      <IconButton>{children}</IconButton>
    </Tooltip>
  );
}

export default CustomIcon;
