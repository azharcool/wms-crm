import { Box } from "@mui/material";

interface IStatusTableCell {
  status?: number;
}

function StatusTableCell(props: IStatusTableCell) {
  const { status } = props;
  return (
    <>
      <Box
        sx={{
          borderRadius: "5px",
          background: status === 2 ? "#fff5f8" : "#e8fff3",
          color: status === 2 ? "#f1416c" : "#50cd89",
          padding: "4px 6.5px",
          display: "inline-flex",
          fontSize: "11px",
          fontWeight: "600",
        }}
      >
        {status === 2 ? "Inactive" : "Active"}
      </Box>
    </>
  );
}

export default StatusTableCell;
