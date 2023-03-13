import { PaletteMode, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { grey, purple } from "@mui/material/colors";

function UsedSection() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
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

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          //   flexGrow: 1,
          py: 3,
        }}
      >
        <Box sx={{ background: palette.success.dark, borderRadius: 2 }}>
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
            <Box sx={{ m: 1, color: palette.gray.light }}>close</Box>
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
                sx={{ color: palette.box.dark, width: 20 }}
                size={150}
                variant="determinate"
                value={50}
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
                  variant="h6"
                  component="div"
                  fontSize={13}
                  color="white"
                >{`${Math.round(50)}%`}</Typography>
                <Typography
                  variant="h6"
                  fontSize={13}
                  component="div"
                  color="white"
                >
                  Location used
                </Typography>
              </Box>
            </Box>{" "}
            {/* <Box  sx={{display:'flex',flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
        <Typography
          sx={{ color: palette.gray.light, fontSize: 17, }}
          variant="h4"
        >
          58%
        </Typography>
        <Typography
          sx={{ m: 1, color: palette.gray.light, fontSize: 14, }}
          variant="h5"
        >
          Location used
        </Typography>
        </Box> */}
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
      </Box>
    </ThemeProvider>
  );
}

export default UsedSection;
