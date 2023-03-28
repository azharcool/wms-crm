import { Box } from "@mui/material";

interface IStatusTableCell {
  status?: number;
}

function StatusTableCell(props: IStatusTableCell) {
  const { status } = props;
  return (
    <>
      {status === 2 ? (
        <Box
          sx={{
            borderRadius: "5px",
            background: "#fff5f8",
            color: "#f1416c",
            padding: "4px 6.5px",
            display: "inline-flex",
            fontSize: "11px",
            fontWeight: "600",
          }}
        >
          Inactive
        </Box>
      ) : (
        <Box
          sx={{
            borderRadius: "5px",
            background: "#e8fff3",
            color: "#50cd89",
            padding: "4px 6.5px",
            display: "inline-flex",
            fontSize: "11px",
            fontWeight: "600",
          }}
        >
          Active
        </Box>
      )}
    </>
  );
}

export default StatusTableCell;
