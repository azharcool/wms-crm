import { Box, TableCell, TableRow } from "@mui/material";

interface INoDataTableRow {
  title?: string;
  colSize?: number;
}

function NoDataTableRow(props: INoDataTableRow) {
  const { title, colSize } = props;
  return (
    <TableRow>
      <TableCell colSpan={colSize}>
        <Box
          sx={{
            color: "#000",
            textAlign: "center",
          }}
        >
          {title}
        </Box>
      </TableCell>
    </TableRow>
  );
}

export default NoDataTableRow;
