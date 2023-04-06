import { TableCell } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ICustomTableCell {
  children: ReactNode;
  isCheck?: boolean;
  isSticky?: boolean;
  leftValue?: number;
  customStyle?: any;
  rightValue?: number;
  minWt?: number;
  isHeader?: boolean;
  sxTableCell?: SxProps<Theme>;
}
function CustomTableCell(props: ICustomTableCell) {
  const {
    children,
    isCheck,
    customStyle,
    isSticky,
    leftValue,
    rightValue,
    isHeader,
    minWt,
    sxTableCell,
  } = props;
  return (
    <TableCell
      padding={isCheck ? "checkbox" : "normal"}
      style={customStyle}
      sx={{
        minWidth: minWt || 60,
        ...sxTableCell,
        ...(isSticky
          ? {
              position: "sticky",
              left: leftValue,
              right: rightValue,
            }
          : null),

        background: isHeader ? "#ccc" : "white",
      }}
    >
      {children}
    </TableCell>
  );
}
export default CustomTableCell;
