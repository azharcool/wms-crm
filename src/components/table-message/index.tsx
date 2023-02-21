import { TableCell, TableRow, Typography } from "@mui/material";
import palette from "theme/palette";

interface IProps {
  message: string;
  colspan?: number;
}

function TableMessage(props: IProps) {
  const { message, colspan } = props;
  return (
    <TableRow>
      <TableCell colSpan={colspan || 4} sx={{ textAlign: "center" }}>
        <Typography sx={{ color: palette.text.muted }} variant="body1">
          {message}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

export default TableMessage;
