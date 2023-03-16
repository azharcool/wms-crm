import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Container,
  Divider,
  Grid,
  InputAdornment,
  SvgIcon,
  TextField,
  Tooltip,
} from "@mui/material";
import TableToolbar from "components/table-toolbar";
import SidebarButton from "./components/SidebarButton";
import Tabs from "./components/Tabs";

function VariantDetails() {
  return (
    <Container maxWidth={false}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container columns={12} spacing={2}>
          <Grid item xs={3}>
            <Box
              sx={{
                ml: -2.5,
                mt: -2,
                backgroundColor: "#fff",
                height: "100%",
                overflow: "scroll",
                position: "sticky",
              }}
            >
              <Tooltip title="Search">
                <Box sx={{ mt: 2, p: 1 }}>
                  <Box sx={{ maxWidth: 300 }}>
                    <TextField
                      fullWidth
                      InputProps={{
                        sx: {
                          // borderRadius: 5,
                          "& input": {
                            padding: "8px 10px",
                            paddingLeft: "16px",
                            fontSize: "0.9rem",
                          },
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <SvgIcon color="action" fontSize="small">
                              <SearchIcon />
                            </SvgIcon>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Search..."
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Tooltip>
              <Divider sx={{ pb: 1 }} />

              <SidebarButton />
              <SidebarButton />
              <SidebarButton />
              <SidebarButton />
            </Box>
          </Grid>

          <Grid item xs={9}>
            <TableToolbar
              buttonText="New"
              navTitle="CATALOG"
              title="lenovo crt, adroid, WIRELESS"
            />
            <Tabs />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default VariantDetails;
