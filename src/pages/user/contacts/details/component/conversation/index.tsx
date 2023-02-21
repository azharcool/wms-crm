import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { Button, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import TextField from "components/textfield";
import * as React from "react";
import AddActivity from "../add-activity";
import { communicationData } from "../data/communicationData";
import Log from "../log";
import Notes from "../notes";
import Activities from "./Activities";
import Chats from "./chats";

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

export default function Conversation() {
  const [openAddActivity, setOpenAddActivity] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpenAddActivity = () => {
    setOpenAddActivity(true);
  };

  const handleCloseAddActivity = () => {
    setOpenAddActivity(false);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            aria-label="basic tabs example"
            sx={{
              "& button": {
                padding: "8px",
                fontSize: { xs: "0.8rem", xl: "1.1rem" },
              },
            }}
            value={value}
            variant="scrollable"
            onChange={handleChange}
          >
            <Tab
              label={
                <TextField
                  isSelect
                  menuItems={communicationData}
                  style={{
                    fontSize: { xs: "0.8rem", xl: "1rem" },
                    padding: "5px",
                  }}
                  value={1}
                />
              }
              {...a11yProps(0)}
            />
            <Tab
              icon={<TextSnippetIcon />}
              iconPosition="start"
              label="Notes"
              {...a11yProps(0)}
            />
            <Tab
              icon={<FormatListBulletedIcon />}
              iconPosition="start"
              label="Activities"
              {...a11yProps(0)}
            />
            <Tab
              icon={<InsertDriveFileIcon />}
              iconPosition="start"
              label="Files"
              {...a11yProps(0)}
            />
            <Tab
              icon={<AddCircleIcon />}
              iconPosition="start"
              label="Log"
              {...a11yProps(0)}
            />
          </Tabs>
        </Box>
        <TabPanel index={0} value={value}>
          <Chats />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Notes />
        </TabPanel>
        <TabPanel index={2} value={value}>
          <Activities handleAddActivity={handleOpenAddActivity} />
        </TabPanel>
        <TabPanel index={3} value={value}>
          <Box>
            <Button
              color="info"
              sx={{ borderRadius: "0.3rem" }}
              variant="contained"
            >
              NEW
            </Button>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ pt: "0.9rem" }}>
                Screenshot from 2023-02-01 15-59-11.png
              </Typography>
              <Box>
                <IconButton aria-label="delete" size="large">
                  <VerticalAlignBottomIcon sx={{ color: "rgb(19, 49, 89)" }} />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                  <DeleteIcon sx={{ color: "rgb(235, 87, 87)" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel index={4} value={value}>
          <Log />
        </TabPanel>
      </Box>
      <AddActivity
        handleClose={handleCloseAddActivity}
        open={openAddActivity}
      />
    </>
  );
}
