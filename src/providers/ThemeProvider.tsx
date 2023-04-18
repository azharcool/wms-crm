import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { getSelectedThemeMode } from "redux/theme/themeSelector";

import darkTheme from "themes/darkTheme";
import lightModeTheme from "themes/lightTheme";

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const getThemeMode = useSelector(getSelectedThemeMode);

  return (
    <>
      <MuiThemeProvider
        theme={getThemeMode === "dark" ? darkTheme : lightModeTheme}
      >
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </>
  );
}

export default ThemeProvider;
