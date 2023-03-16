import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          aria-label="basic tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab label="GENERAL" {...a11yProps(0)} />
          <Tab label="STOCK" {...a11yProps(1)} />
          <Tab label="SUPPLIERS" {...a11yProps(2)} />
          <Tab label="HISTORY" {...a11yProps(3)} />
          <Tab label="INTERNATIONAL" {...a11yProps(4)} />
          <Tab label="INVENTORY LOG" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel index={0} value={value}>
        {/* <SidebarButton /> */}
      </TabPanel>
      <TabPanel index={1} value={value}>
        Item Two
      </TabPanel>
      <TabPanel index={2} value={value}>
        Item Three
      </TabPanel>
      <TabPanel index={3} value={value}>
        Item One
      </TabPanel>
      <TabPanel index={4} value={value}>
        Item Two
      </TabPanel>
      <TabPanel index={5} value={value}>
        Item Three
      </TabPanel>
    </Box>
  );
}
