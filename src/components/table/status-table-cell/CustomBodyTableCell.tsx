import { TableCell, TableCellProps } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

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
