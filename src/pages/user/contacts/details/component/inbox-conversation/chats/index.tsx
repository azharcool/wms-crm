// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import palette from "theme/palette";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  sendContainer: {
    display: "flex",
    alignItems: "flex-end",
    gap: 12,
    marginTop: "1rem",
  },
  chatHead: {
    backgroundColor: palette.info.lightBg,
    padding: "1rem",
    borderRadius: "10px 10px 10px 0px  ",
    width: "94%",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-7px",
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderBottom: `10px solid ${palette.info.lightBg}`,
    },
  },
  receiveContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: "1rem",
  },
  receiveChatHead: {
    backgroundColor: palette.info.lightBg,
    padding: "1rem",
    borderRadius: "10px 10px 0px 10px ",
    width: "94%",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      right: "-7px",
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderBottom: `10px solid ${palette.info.lightBg}`,
    },
  },
  bottomText: { paddingTop: "0.3rem", color: palette.text.muted },
});

function Chats() {
  const classes = useStyles();
  return (
    <Box sx={{ height: "75vh", display: "flex", flexDirection: "column" }}>
      <Stack flex="11" justifyContent="flex-end" padding="8px">
        <Box className={`${classes.sendContainer}`}>
          <Box>
            <Avatar>SA</Avatar>
          </Box>
          <Box>
            <Box className={`${classes.chatHead}`}>
              <Typography sx={{ fontSize: { xs: "1rem", xl: "1.2rem" } }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti placeat accusantium illum laborum iure consectetur
                explicabo rem facere est recusandae.
              </Typography>
            </Box>
            <Box sx={{ paddingTop: "0.3rem", color: palette.text.secondary }}>
              <Typography sx={{ color: palette.text.muted }} variant="body2">
                <b>Jan 12,2023, 02:00 PM</b>. sent from <b>+911234567890</b>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={`${classes.receiveContainer}`}>
          <Box sx={{ width: "94%" }}>
            <Box className={`${classes.receiveChatHead}`}>
              <Typography sx={{ fontSize: { xs: "1rem", xl: "1.2rem" } }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti placeat accusantium illum laborum iure consectetur
                explicabo rem facere est recusandae.
              </Typography>
            </Box>
            <Box sx={{ paddingTop: "0.3rem", color: palette.text.secondary }}>
              <Typography sx={{ color: palette.text.muted }} variant="body2">
                <b>Jan 12,2023, 02:03 PM</b>. sent from <b>+911234567890</b>
              </Typography>
            </Box>
          </Box>
          <Box>
            <Avatar>SA</Avatar>
          </Box>
        </Box>
      </Stack>

      <Box
        flex="1"
        sx={{
          padding: "8px",
          backgroundColor: "#efefef",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton aria-label="menu" sx={{ p: "10px" }}>
            <AttachFileIcon sx={{ transform: "rotate(45deg)" }} />
          </IconButton>
          <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
          <InputBase
            inputProps={{ "aria-label": "Type a message" }}
            placeholder="Type a message"
            sx={{ ml: 1, flex: 1 }}
          />
          <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
          {/* <IconButton
            aria-label="voice-note"
            color="primary"
            sx={{ p: "10px" }}
          >
            <KeyboardVoiceIcon />
          </IconButton> */}
          <IconButton
            aria-label="voice-note"
            color="success"
            sx={{ p: "10px" }}
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
}

export default Chats;
