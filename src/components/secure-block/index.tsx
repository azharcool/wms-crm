import { Box } from "@mui/material";

interface IProps {
  accessible: boolean;
  children: any;
}
function SecureBlock(props: IProps) {
  const { children, accessible } = props;
  return accessible ? <Box>{children}</Box> : null;
}

export default SecureBlock;
