import { IconButton, PaletteMode, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { grey, purple } from "@mui/material/colors";

interface IProps {
  title: string;
  handleClick?: () => void;
  icon?: React.ReactElement;
  color?: string;
  accessible?: boolean;
}
function SettingBlock(props: IProps) {
  const { title, color, handleClick, icon, accessible } = props;
  const newtheme = useSelector((state: any) => state.theme);
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  return accessible ? (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
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
    </ThemeProvider>
  ) : null;
}

SettingBlock.defaultProps = {
  accessible: true,
};

export default SettingBlock;
