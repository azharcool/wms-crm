import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
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
    // <DashboardLayout>
    <Container maxWidth={false}>
      <Box
        // component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container columns={12} spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ ml: -2.5, mt: -2 }}>
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
              {/* <Box sx={{ p: 1 }}>
                <Grid container columns={10} spacing={2}>
                  <Grid item xs={2}>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img
                        alt="new"
                        src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                        width="100%"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography sx={{ fontSize: 15 }}>tshirt xxl</Typography>
                    <Typography sx={{ fontSize: 15 }}>
                      LESSADWI-274585-286451
                    </Typography>
                  </Grid>
                </Grid>
              </Box> */}
              <SidebarButton />
              <SidebarButton />
              <SidebarButton />
              <SidebarButton />
            </Card>
          </Grid>
          <Grid item xs={9}>
            <TableToolbar
              // buttonText="New"
              // handleClick={() => {
              //   navigate(AppRoutes.CATALOG.productCreate);
              // }}
              buttonText="New"
              navTitle="CATALOG"
              title="lenovo crt, adroid, WIRELESS"
            />
            <Tabs />
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{}} /> */}
    </Container>
    // </DashboardLayout>
  );
}

export default VariantDetails;
