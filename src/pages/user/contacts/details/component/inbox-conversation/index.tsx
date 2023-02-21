import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AddActivity from "../add-activity";
import ChatHeader from "./chat-header";
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

export default function InboxConversation() {
  const [openAddActivity, setOpenAddActivity] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleOpenAddActivity = () => {
    setOpenAddActivity(true);
  };

  const handleCloseAddActivity = () => {
    setOpenAddActivity(false);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <ChatHeader />
        <Chats />
      </Box>
      <AddActivity
        handleClose={handleCloseAddActivity}
        open={openAddActivity}
      />
    </>
  );
}
