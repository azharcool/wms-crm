import {
  Box,
  Button,
  Card,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  PaletteMode,
  Toolbar,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";

interface IProductCreate {
  open: boolean;
  handleClose: () => void;
  isEdit?: boolean;
}

function ProductCreate() {
  // const { open, handleClose, isEdit } = props;
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
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      {/* <Typography>PRODUCTS</Typography> */}
      {/* <DialogTitle>New Product</DialogTitle> */}
      <DialogActions style={{ justifyContent: "space-between" }}>
        <DialogTitle>
          {/* {isEdit ? "Edit Warehouse" : "New Warehouses"} */}
          New Product
        </DialogTitle>

        <Box>
          <Button
            sx={{
              width: "inherit",
              marginRight: "1rem",
            }}
            title="Save"
            variant="contained"
          >
            Save
          </Button>

          <Button autoFocus variant="contained">
            Discard
          </Button>
        </Box>
      </DialogActions>
      <PerfectScrollbar>
        <Toolbar
          sx={{
            left: {
              lg: 2,
            },
          }}
        >
          <Box>
            <Card>
              <DialogContent dividers sx={{ flex: 3 }}>
                <DialogTitle>Details</DialogTitle>
                <Divider sx={{ my: 1 }} />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "baseline",
                    marginBottom: "1rem",
                  }}
                >
                  <TextField
                    // error={!!touched.warehouseName && !!errors.warehouseName}
                    // helperText={
                    //   (touched.warehouseName && errors && errors.warehouseName) ||
                    //   ""
                    // }
                    label="Warehouse name"
                    name="warehouseName"
                    placeholder="Warehouse Name"
                    style={{ width: "550px" }}
                    // value={warehouseName}
                    // onBlur={handleBlur("warehouseName")}
                    // onChange={handleChange("warehouseName")}
                  />
                  <TextField
                    // error={!!touched.warehouseName && !!errors.warehouseName}
                    // helperText={
                    //   (touched.warehouseName && errors && errors.warehouseName) ||
                    //   ""
                    // }
                    label="Warehouse name"
                    name="warehouseName"
                    placeholder="Warehouse Name"
                    style={{ width: "550px" }}
                    // value={warehouseName}
                    // onBlur={handleBlur("warehouseName")}
                    // onChange={handleChange("warehouseName")}
                  />
                </Box>
              </DialogContent>
            </Card>
          </Box>
        </Toolbar>
      </PerfectScrollbar>
    </ThemeProvider>
  );
}

export default ProductCreate;
