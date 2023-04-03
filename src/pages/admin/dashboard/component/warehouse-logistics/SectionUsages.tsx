import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import CircularProgress from "@mui/material/CircularProgress";
import palette from "theme/palette";

function SectionUsages() {
  return (
    <Box
      sx={{
        background: palette.success.dark,
        borderRadius: 2,
        width: "300px",
        height: "300px",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          p: 1,
        }}
      >
        <Typography
          sx={{ m: 1, color: palette.gray.light, fontSize: 20 }}
          variant="h4"
        >
          Section 5 usage
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            size={150}
            sx={{ color: palette.box.dark, width: 20 }}
            value={50}
            variant="determinate"
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="white"
              component="div"
              fontSize={13}
              variant="h6"
            >{`${Math.round(50)}%`}</Typography>
            <Typography
              color="white"
              component="div"
              fontSize={13}
              variant="h6"
            >
              Location used
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: palette.gray.light, fontSize: 12 }}
            variant="h6"
          >
            Loaded
          </Typography>
          <Typography
            sx={{ m: 1, color: palette.gray.light, fontSize: 14 }}
            variant="h5"
          >
            19 shelves
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: palette.gray.light, fontSize: 12 }}
            variant="h6"
          >
            Empty
          </Typography>
          <Typography
            sx={{ m: 1, color: palette.gray.light, fontSize: 14 }}
            variant="h5"
          >
            64 shelves
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionUsages;
