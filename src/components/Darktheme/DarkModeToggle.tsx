import React, { JSXElementConstructor, ReactElement, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { IconButton, Tooltip } from "@material-ui/core";
import {
  Brightness4 as DarkIcon,
  Brightness7 as LightIcon,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import palette from "theme/palette";

interface Props {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
function DarkModeToggle({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Tooltip title="theme">
          <IconButton onClick={handleThemeToggle}>
            {darkMode ? <LightIcon /> : <DarkIcon />}
          </IconButton>
        </Tooltip>
      </Box>

      {children}
    </ThemeProvider>
  );
}

export default DarkModeToggle;
