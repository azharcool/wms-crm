import { TableCell, TableCellProps, Typography } from "@mui/material";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ICustomTableText {
  text?: string | number;
  link?: boolean;
}
export function CustomTableText(props: ICustomTableText) {
  const { text, link } = props;

  const theme = useTheme();

  return (
    <Typography
      sx={{
        textDecoration: link ? "underline" : "none",
        whiteSpace: "nowrap",
        color: theme.palette.text.darkBlue,
        fontSize: "14px",
      }}
    >
      {text}
    </Typography>
  );
}

interface ICustomBodyTableCell extends TableCellProps {
  children: ReactNode;
  sxProps?: SxProps<Theme>;
}

function CustomBodyTableCell(props: ICustomBodyTableCell) {
  const { children, sxProps, ...restProps } = props;

  return (
    <TableCell
      sx={{
        minWidth: "150px",
        ...sxProps,
      }}
      {...restProps}
    >
      {children}
    </TableCell>
  );
}

export default CustomBodyTableCell;
