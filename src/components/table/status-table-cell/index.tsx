import { Box } from "@mui/material";

interface IStatusTableCell {
  success?: boolean;
  title: string;
}

function StatusTableCell(props: IStatusTableCell) {
  const { title, success } = props;
  return (
    <>
      <Box
        sx={{
          borderRadius: "5px",
          background: success ? "#e8fff3" : "#fff5f8",
          color: success ? "#50cd89" : "#f1416c",
          padding: "4px 6.5px",
          display: "inline-flex",
          fontSize: "11px",
          fontWeight: "600",
        }}
      >
        {title}
      </Box>
    </>
  );
}

export default StatusTableCell;
