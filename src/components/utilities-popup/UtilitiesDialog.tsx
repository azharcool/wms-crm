import AddIcon from "@mui/icons-material/Add";
import { Divider, IconButton, Tooltip } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import triangleWhite from "assets/images/triangle-white.png";
import * as React from "react";
import palette from "theme/palette";

export default function UtilitiesDialog() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Tooltip title="Utilities">
        <IconButton
          aria-describedby={id}
          sx={{
            ml: 2,
            backgroundColor: palette.info.main,
            color: "#fff",
            "&:hover": {
              color: palette.info.main,
            },
          }}
          onClick={handleClick}
        >
          <AddIcon fontSize="medium" />
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        id={id}
        open={open}
        sx={{
          position: "absolute",
          top: "18px",
          right: "2rem",
          "&::before": {
            content: '""',
            position: "absolute",
            backgroundImage: `url(${triangleWhite})`,
            width: "34px",
            height: "23px",
            top: "33px",
            right: "13rem",
            transitionDelay: "0",
            zIndex: 9,
            backgroundSize: "cover",
            transform: "translateX(48%)",
          },
        }}
        onClose={handleClose}
      >
        <Box>
          <Box>
            <Typography sx={{ p: "12px 17px 0px 17px" }} variant="h6">
              New Deal
            </Typography>
            <Typography sx={{ p: "0px 17px 12px 17px" }}>
              Add a new deal to your sales pipeline
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography sx={{ p: "12px 17px 0px 17px" }} variant="h6">
              New Contact
            </Typography>
            <Typography sx={{ p: "0px 17px 12px 17px" }}>
              Add a new contact to the system
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography sx={{ p: "12px 17px 0px 17px" }} variant="h6">
              New Activity
            </Typography>
            <Typography sx={{ p: "0px 17px 12px 17px" }}>
              Schedule meeting, task and follow up activities
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Typography sx={{ p: "12px 17px 0px 17px" }} variant="h6">
              New Campaign
            </Typography>
            <Typography sx={{ p: "0px 17px 12px 17px" }}>
              Add a new automated drip marketing campaign
            </Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}
