import { TableCell, TableCellProps } from "@mui/material";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ICustomHeadTableCell extends TableCellProps {
  children: ReactNode;
  sxProps?: SxProps<Theme>;
}

function CustomHeadTableCell(props: ICustomHeadTableCell) {
  const { children, sxProps, ...restProps } = props;

  const theme = useTheme();

  return (
    <TableCell
      sx={{
        minWidth: "150px",
        background: theme.palette.primary.darkBlue,
        color: theme.palette.common.white,
        fontWeight: "bold",
        ...sxProps,
      }}
      {...restProps}
    >
      {children}
    </TableCell>
  );
}

export default CustomHeadTableCell;
