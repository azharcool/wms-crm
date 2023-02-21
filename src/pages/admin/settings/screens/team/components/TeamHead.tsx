import { Box, TableCell, Typography } from "@mui/material";

interface Props {
  label: string;
}

function TeamHead(props: Props) {
  return (
    <TableCell>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          fontWeight: "500",
        }}
      >
        <Typography component="p" sx={{ fontWeight: "inherit" }}>
          {props?.label}
        </Typography>{" "}
        <svg
          fill="none"
          height="18"
          style={{ cursor: "pointer", float: "right" }}
          viewBox="0 0 11 18"
          width="11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 11.5L5.14286 17.5L10.2857 11.5H0Z" fill="#546376" />
          <path
            d="M10.2852 6.5L5.1423 0.5L-0.000557899 6.5L10.2852 6.5Z"
            fill="#546376"
          />
        </svg>
      </Box>
    </TableCell>
  );
}

export default TeamHead;
