import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import React from "react";
import palette from "theme/palette";

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
function DeleveryTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component="main"
      sx={{
        //   flexGrow: 1,
        py: 4,
      }}
    >
      {" "}
      <Box sx={{}}>
        <Tabs
          aria-label="basic tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab color={palette.success.lightGreen} label="Received" />
          <Tab label="Sent" />
          <Tab label="Expected" />
        </Tabs>
      </Box>
      <TabPanel index={0} value={value}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItem: "center",
            flex: "start",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              background: palette.box.dark,
              borderRadius: 0.9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SystemUpdateAltIcon sx={{ color: "white" }} />
          </Box>
          <Box sx={{ ml: 3 }}>
            <Typography variant="subtitle1">Box 132883</Typography>
            <Typography variant="caption">Deleverd 06:15pm</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItem: "center",
            flex: "start",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              background: palette.box.dark,
              borderRadius: 0.9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SystemUpdateAltIcon sx={{ color: "white" }} />
          </Box>
          <Box sx={{ ml: 3 }}>
            <Typography variant="subtitle1">Box 132883</Typography>
            <Typography variant="caption">Deleverd 06:15pm</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItem: "center",
            flex: "start",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              background: palette.box.dark,
              borderRadius: 0.9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SystemUpdateAltIcon sx={{ color: "white" }} />
          </Box>
          <Box sx={{ ml: 3 }}>
            <Typography variant="subtitle1">Box 132883</Typography>
            <Typography variant="caption">Deleverd 06:15pm</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItem: "center",
            flex: "start",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              background: palette.box.dark,
              borderRadius: 0.9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SystemUpdateAltIcon sx={{ color: "white" }} />
          </Box>
          <Box sx={{ ml: 3 }}>
            <Typography variant="subtitle1">Box 132883</Typography>
            <Typography variant="caption">Deleverd 06:15pm</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItem: "center",
            flex: "start",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              background: palette.box.dark,
              borderRadius: 0.9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SystemUpdateAltIcon sx={{ color: "white" }} />
          </Box>
          <Box sx={{ ml: 3 }}>
            <Typography variant="subtitle1">Box 132883</Typography>
            <Typography variant="caption">Deleverd 06:15pm</Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel index={1} value={value}>
        Item Two
      </TabPanel>
      <TabPanel index={2} value={value}>
        Item Three
      </TabPanel>
    </Box>
  );
}

export default DeleveryTabs;
