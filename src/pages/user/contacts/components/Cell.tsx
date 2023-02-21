import { TableCell } from "@mui/material";
import React from "react";
import { IColumn } from "./ContactTable";

interface ICell {
  children: React.ReactNode;
  columnIds: IColumn[];
  index: number;
  id?: string;
}

function Cell(props: ICell) {
  const { children, columnIds, index } = props;
  const isExists = columnIds.find((x: IColumn) => x.id === index);

  return (
    <TableCell
      style={{
        minWidth: 200,
        display: isExists ? "none" : "table-cell",
        paddingLeft: 0,
      }}
    >
      {children}
    </TableCell>
  );
}

export default Cell;
