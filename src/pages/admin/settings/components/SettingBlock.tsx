import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface IProps {
  title: string;
  handleClick?: () => void;
  icon?: React.ReactElement;
  color?: string;
  accessible?: boolean;
}
function SettingBlock(props: IProps) {
  const { title, color, handleClick, icon, accessible } = props;

  return accessible ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        p: "1rem 2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: color || "#0096FF",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="delete" size="small">
            {icon}
          </IconButton>
        </Box>
        <Typography component="p" sx={{ mt: 2 }}>
          {title}
        </Typography>
      </Box>
    </Box>
  ) : null;
}

SettingBlock.defaultProps = {
  accessible: true,
};

export default SettingBlock;
