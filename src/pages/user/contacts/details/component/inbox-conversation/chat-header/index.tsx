import { Avatar, Box } from "@mui/material";

export default function ChatHeader() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "8px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ marginRight: "8px" }}>
            <Avatar>JS</Avatar>
          </Box>
          <Box>John Sparks</Box>
        </Box>
      </Box>
    </Box>
  );
}
