import { Box, Button, Typography } from "@mui/material";
import palette from "theme/palette";

interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon?: React.ReactNode;
}

function CustomToolButton(props: ITooblarButton) {
  const { handleClick, title, icon } = props;

  return (
    <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
      <Button
        sx={{
          width: "inherit",
          borderRadius: "5px",
          padding: "5px 20px",
          backgroundColor: palette.warning.dark,
          opacity: 0.9,
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: palette.warning.dark,
            opacity: 0.6,
            boxShadow: "none",
          },
        }}
        variant="contained"
        onClick={() => {
          handleClick?.();
        }}
      >
        {icon || null}
        <Typography
          component="span"
          sx={{ fontSize: { xs: "1.0rem", xl: "1.0rem" } }}
        >
          {title}
        </Typography>
      </Button>
    </Box>
  );
}

export default CustomToolButton;
