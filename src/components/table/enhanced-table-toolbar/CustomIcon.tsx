import { IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface ICustomIcon {
  children?: ReactNode;
  title: string;
  onClick?: () => void;
}

function CustomIcon(props: ICustomIcon) {
  const { title, children, onClick } = props;
  return (
    <Tooltip title={title}>
      <IconButton onClick={() => onClick && onClick()}>{children}</IconButton>
    </Tooltip>
  );
}

export default CustomIcon;
