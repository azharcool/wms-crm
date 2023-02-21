import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import Visibility from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ContactTabs from "../contact-tabs";

import ViewInfoPopup from "../contact-tabs/view-info-popup";

interface IProps {
  userInfo: any;
}

function DetailInfo(props: IProps) {
  const { userInfo } = props;
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const id = Number(location.pathname.split("/")?.[2]);

  const handleInfoOpen = () => {
    setOpenInfo(true);
  };

  const handleInfoClose = () => {
    setOpenInfo(false);
  };
  const handleMessageOpen = () => {
    setOpenMessage(true);
  };

  const handleCallOpen = () => {
    setOpenCall(true);
  };

  const handleEmailOpen = () => {
    setOpenEmail(true);
  };

  const handleVoiceOpen = () => {
    setOpenVoice(true);
  };

  const handleVideoOpen = () => {
    setOpenVideo(true);
  };

  return (
    <Grid item lg={3} xs={12}>
      <Card>
        <CardContent sx={{ padding: "6px" }}>
          <Typography
            component="h6"
            sx={{ textAlign: "center", padding: "1rem 0" }}
            variant="h5"
          >
            Information
          </Typography>
          <Divider />
          <Box>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <AccountCircleIcon sx={{ mb: 1, fontSize: "6rem" }} />
              <Typography
                component="p"
                sx={{ fontWeight: "500", fontSize: "1rem" }}
              >
                {userInfo?.firstName} {userInfo?.lastName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "8px 0",
                marginBottom: "1.5rem",
                gap: 1,
                "& svg": {
                  fontSize: { xs: "1rem", lg: "1.3rem" },
                },
              }}
            >
              <Tooltip title="Send Message">
                <IconButton
                  color="primary"
                  sx={{ border: "1px solid" }}
                  onClick={handleMessageOpen}
                >
                  <MessageIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Send Email">
                <IconButton
                  color="error"
                  sx={{ border: "1px solid" }}
                  onClick={handleEmailOpen}
                >
                  <EmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Make a Call">
                <IconButton
                  color="success"
                  sx={{ border: "1px solid" }}
                  onClick={handleCallOpen}
                >
                  <LocalPhoneIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Send Voice Mail">
                <IconButton
                  color="error"
                  sx={{ border: "1px solid" }}
                  onClick={handleVoiceOpen}
                >
                  <KeyboardVoiceIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Send Video Mail">
                <IconButton
                  color="primary"
                  sx={{ border: "1px solid" }}
                  onClick={handleVideoOpen}
                >
                  <VideoCameraFrontIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <ContactTabs details={userInfo?.data} />
          <Box>
            <Button
              fullWidth
              color="primary"
              sx={{ mt: 3 }}
              variant="outlined"
              onClick={handleInfoOpen}
            >
              <Visibility sx={{ mr: 1 }} />
              <Typography>View all info</Typography>
            </Button>
            <Button fullWidth color="error" sx={{ mt: 1 }} variant="outlined">
              <DeleteOutlineIcon sx={{ mr: 1 }} />
              <Typography>Delete Contact</Typography>
            </Button>
          </Box>
        </CardContent>
        <ViewInfoPopup
          handleClose={handleInfoClose}
          open={openInfo}
          setOpen={setOpenInfo}
        />
      </Card>
    </Grid>
  );
}

export default DetailInfo;
