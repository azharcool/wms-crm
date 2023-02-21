import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  TextField as MUITextField,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridOnIcon from "@mui/icons-material/GridOn";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DashboardLayout from "components/dashboard-container";
import DateRangePicker from "components/DateRangePicker";
import TextField from "components/textfield";
import { useState } from "react";
import palette from "theme/palette";
import DealsCard from "./component/cards";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Deals() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [dateRange, setDateRange] = useState();
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Card>
            <CardContent sx={{ padding: "6px", width: "100%" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item lg={6} xs={12}>
                  <Stack alignItems="center" direction="row" gap={1}>
                    <Typography component="h5" variant="h5">
                      Deal
                    </Typography>{" "}
                    <TextField
                      isSelect
                      menuItems={[{ id: "1", value: "pipeline" }]}
                      name="dealPipline"
                      style={{
                        width: "200px",
                        "& .MuiSelect-select": { padding: "8px" },
                      }}
                    />
                    <TextField
                      isSelect
                      menuItems={[{ id: "1", value: "Won" }]}
                      name="dealStatus"
                      style={{
                        width: "140px",
                        "& .MuiSelect-select": { padding: "8px" },
                      }}
                    />
                    {/* <Box sx={{ display: "none" }}>
                      <DateRangePicker />
                    </Box> */}
                    <Typography component="span">Deals:1</Typography>{" "}
                    <Typography component="span">value:$100</Typography>
                    <DateRangePicker
                      format="MMM Do, YYYY"
                      label=""
                      separator=""
                      value={dateRange}
                      onChange={(e: any) => {
                        setDateRange(e);
                      }}
                    />
                  </Stack>
                </Grid>
                <Grid item lg={5} xs={12}>
                  <Stack alignItems="center" direction="row" gap={1}>
                    {" "}
                    <Box sx={{ maxWidth: 250 }}>
                      <MUITextField
                        fullWidth
                        InputProps={{
                          sx: {
                            borderRadius: 50,
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
                    <Box>
                      <Tabs
                        aria-label="basic tabs example"
                        sx={{
                          "& 	.MuiTab-root": {
                            padding: "4px",
                            minWidth: "35px",
                            minHeight: "35px",
                            width: "45px",
                            height: "45px",
                            "& svg": {
                              fontSize: "25px",
                            },
                            "&.Mui-selected": {
                              border: "none",
                              backgroundColor: palette.info.light,
                              color: "#fff",
                            },
                          },
                        }}
                        TabIndicatorProps={{
                          sx: { display: "none" },
                        }}
                        value={value}
                        onChange={handleChange}
                      >
                        <Tab
                          icon={<FormatListBulletedIcon />}
                          {...a11yProps(0)}
                        />
                        <Tab icon={<GridOnIcon />} {...a11yProps(1)} />
                        <Tab icon={<TrendingUpIcon />} {...a11yProps(2)} />
                      </Tabs>
                    </Box>
                    <Box>
                      <IconButton>
                        <AddIcon sx={{ fontSize: "25px" }} />
                      </IconButton>
                      <IconButton>
                        <SettingsIcon sx={{ fontSize: "25px" }} />
                      </IconButton>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ width: "100%" }}>
                <TabPanel index={0} value={value}>
                  Item One 12
                </TabPanel>
                <TabPanel index={1} value={value}>
                  Item Two
                </TabPanel>
                <TabPanel index={2} value={value}>
                  Item Three
                </TabPanel>
              </Box>
              <DealsCard />
            </CardContent>
          </Card>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Deals;
