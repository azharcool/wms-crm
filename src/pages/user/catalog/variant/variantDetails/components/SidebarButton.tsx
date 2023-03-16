import { Box, Grid, Typography } from "@mui/material";

export default function SidebarButton() {
  return (
    <Box sx={{ p: 1 }}>
      <Grid container columns={10} spacing={2}>
        <Grid item xs={2}>
          <Box
            sx={{
              width: "40px",
              height: "40px",
            }}
          >
            <img
              alt="new"
              src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
              width="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{ fontSize: 15 }}>tshirt xxl</Typography>
          <Typography sx={{ fontSize: 15 }}>LESSADWI-274585-286451</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
