import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import SendEmail from "pages/user/contacts/components/quick-activities/send-email";
import SendMessage from "pages/user/contacts/components/quick-activities/send-message";
import SendVideo from "pages/user/contacts/components/quick-activities/send-video";
import SendVoice from "pages/user/contacts/components/quick-activities/send-voice";
import AddActivity from "pages/user/contacts/details/component/add-activity";
import AddCampaigns from "pages/user/contacts/details/component/add-campaigns";
import AddCollaborator from "pages/user/contacts/details/component/add-collaborator";

import ViewInfoPopup from "pages/user/contacts/details/component/contact-tabs/view-info-popup";
import CreateDeal from "pages/user/contacts/details/component/create-deal";
import EditInfoForm from "pages/user/contacts/details/component/edit-info-form";
import InboxConversation from "pages/user/contacts/details/component/inbox-conversation";
import { useState } from "react";
import palette from "theme/palette";
import NoDataFound from "../../../assets/images/inbox-no-data.png";

const leadSource = [
  {
    id: 1,
    label: "Map",
  },
  {
    id: 1,
    label: "Outgoing Call",
  },
  {
    id: 1,
    label: "Incoming SMS",
  },
  {
    id: 1,
    label: "API",
  },
];

const leadOwner = [
  {
    id: 1,
    label: "Mohsin",
  },
  {
    id: 1,
    label: "riyz",
  },
];
const searchLeadOwner = [
  {
    id: 1,
    label: "All users",
  },
  {
    id: 2,
    label: "Mohsin amin",
  },
  {
    id: 3,
    label: "Riyz sheikh",
  },
];

const chatTypes = [
  {
    id: 1,
    label: "All",
  },
  {
    id: 2,
    label: "Unread",
  },
  {
    id: 3,
    label: "Recent",
  },
  {
    id: 4,
    label: "Important",
  },
  {
    id: 3,
    label: "Archive",
  },
];

const chatList = [
  {
    id: 1,
    label: "Joey",
    days: 3,
    chat: "Outgoing call",
    date: "Feb 3, 2023 8:44 AM",
  },
  {
    id: 2,
    label: "Mohammad Sabeel",
    days: 4,
    chat: "Incoming call",
    date: "Feb 4, 2023 4:41 AM",
  },
  {
    id: 3,
    label: "Ava Cook",
    days: 5,
    chat: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    date: "Feb 5, 2023 10:20 AM",
  },
  {
    id: 4,
    label: "Paul Stants",
    days: 6,
    chat: "Outgoing call",
    date: "Feb 6, 2023 7:54 AM",
  },
  {
    id: 5,
    label: "John Sparks",
    days: 11,
    chat: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: "Jan 27, 2023 11:01 AM",
  },
];

export interface IToggleModel {
  collaborators: boolean;
  deals: boolean;
  task: boolean;
  appointment: boolean;
  campaigns: boolean;
  formEntries: boolean;
}

interface IData {
  label: string;
  id: number;
}
interface ICallaboratorList {
  data: IData[];
}

function CallaboratorList(props: ICallaboratorList) {
  const { data } = props;

  if (data.length === 0) {
    return <Typography>None Assigned</Typography>;
  }

  const renderItem = data.map((item) => {
    return (
      <Stack key={item.id} direction="row" justifyContent="space-between">
        <Typography>{item.label}</Typography>
        <DeleteForeverIcon color="error" />
      </Stack>
    );
  });

  return <>{renderItem}</>;
}

function Inbox() {
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [filterLead, setfilterLead] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [switchFilter, setSwitchFilter] = useState(false);
  const [listType, setListType] = useState("All");
  const [showChatDetail, setShowChatDetail] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expandAccordion, setExpandAccordion] = useState("");
  const [toggles, setToggles] = useState<IToggleModel>({
    collaborators: false,
    deals: false,
    task: false,
    appointment: false,
    campaigns: false,
    formEntries: false,
  });

  const iconStyle = {
    color: palette.secondary.lightGray,
    mr: "5px",
  };

  function handleToggle<T>(name: T) {
    const toggleValue = toggles[name as keyof IToggleModel];
    setToggles((s) => ({
      ...s,
      [name as keyof IToggleModel]: !toggleValue,
    }));
  }

  const handleChange = (value: string) => {
    setExpandAccordion(value);
  };
  const handleInfoOpen = () => {
    setOpenInfo(true);
  };

  const handleInfoClose = () => {
    setOpenInfo(false);
  };
  const handleMessageOpen = () => {
    setOpenMessage(true);
  };

  const handleMessageClose = () => {
    setOpenMessage(false);
  };
  const handleCallOpen = () => {
    setOpenCall(true);
  };

  const handleCallClose = () => {
    setOpenCall(false);
  };
  const handleEmailOpen = () => {
    setOpenEmail(true);
  };

  const handleEmailClose = () => {
    setOpenEmail(false);
  };
  const handleVoiceOpen = () => {
    setOpenVoice(true);
  };

  const handleVoiceClose = () => {
    setOpenVoice(false);
  };
  const handleVideoOpen = () => {
    setOpenVideo(true);
  };

  const handleVideoClose = () => {
    setOpenVideo(false);
  };

  const handleFilterLeadOwner = () => {
    setfilterLead(!filterLead);
  };

  const handleSelectedFilter = (selected: string) => {
    setSelectedFilter(selected);
  };

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
          <Grid container alignItems="stretch" spacing={2}>
            <Grid item lg={3} xs={12}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ padding: "10px" }}>
                  <Box>
                    <Box sx={{ maxWidth: 300 }}>
                      <TextField
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
                        placeholder="Search People in chat"
                        variant="outlined"
                      />
                    </Box>
                  </Box>

                  {/* <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    margin="10px"
                    padding="5px 0"
                    position="relative"
                  >
                    <Box
                      sx={{ cursor: "pointer" }}
                      onClick={handleFilterLeadOwner}
                    >
                      <Stack
                        alignItems="center"
                        border="1px solid #ddd"
                        borderRadius="5px"
                        direction="row"
                        justifyContent="space-between"
                        padding="5px"
                        width="200px"
                      >
                        <SecureBlock
                          accessible={isControlAccessible(
                            ACCESS_CODES.FILTER_LEAD,
                            SCREEN_CODES.CONTACTS,
                          )}
                        >
                          <Box sx={{ typography: "subtitle2" }}>
                            {switchFilter
                              ? selectedFilter
                              : "Filter By Lead Owner"}
                          </Box>
                          <KeyboardArrowDownIcon />
                        </SecureBlock>
                      </Stack>
                    </Box>
                    {filterLead ? (
                      <Grid
                        spacing={2}
                        sx={{
                          position: "absolute",
                          top: "42px",
                          width: "100%",
                          zIndex: 1000,
                        }}
                      >
                        <Grid item sx={{ width: "100%" }}>
                          <Card
                            sx={{
                              border: "0.05px solid #ddd",
                            }}
                          >
                            <CardContent
                              sx={{
                                paddingTop: "20px",
                                paddingX: "10px",
                                paddingBottom: "0",
                              }}
                            >
                              <Box sx={{ maxWidth: 300 }}>
                                <TextField
                                  fullWidth
                                  InputProps={{
                                    sx: {
                                      // borderRadius: 50,
                                      "& input": {
                                        padding: "10px",
                                        paddingLeft: "16px",
                                        fontSize: "0.9rem",
                                      },
                                    },
                                  }}
                                  placeholder="Search user"
                                  variant="outlined"
                                />
                              </Box>

                              <Box sx={{ marginTop: "12px" }}>
                                {searchLeadOwner.map((owner) => {
                                  return (
                                    <Box
                                      key={owner.id}
                                      sx={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setSwitchFilter(!switchFilter);
                                        handleSelectedFilter(owner.label);
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          typography: "subtitle2",
                                          padding: "0.5rem 0.25rem",
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        {owner.label}
                                        {(switchFilter === true &&
                                          selectedFilter === owner.label) ||
                                        (switchFilter === true &&
                                          selectedFilter === "All users") ? (
                                          <CheckIcon />
                                        ) : null}
                                      </Box>
                                      <Divider />
                                    </Box>
                                  );
                                })}
                                <Box>
                                  <Typography
                                    sx={{
                                      padding: "0.5rem 0.25rem",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Clear All
                                  </Typography>
                                  <Divider />
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    ) : null}

                    <Box
                      sx={{
                        backgroundColor: "#F6F7FB",
                        padding: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => alert("clicked!")}
                    >
                      <AddIcon />
                    </Box>
                  </Stack> */}

                  {/* <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    padding="8px"
                  >
                    {chatTypes.map((chatType) => {
                      return (
                        <Box
                          key={chatType.id}
                          sx={{ cursor: "pointer" }}
                          onClick={() => setListType(chatType.label)}
                        >
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: "600",
                              color:
                                listType === chatType.label
                                  ? "#3c7ef3"
                                  : "#000",
                            }}
                          >
                            {chatType.label}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Stack> */}
                  <Divider
                    sx={{ borderBottomWidth: "1px", marginTop: "10px" }}
                  />

                  {chatList.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        sx={{
                          marginY: "10px",
                          border: "1px solid #ddd",
                          borderRadius: "10px",
                          padding: "5px 10px",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowChatDetail(true)}
                      >
                        <Typography
                          sx={{
                            fontSize: "10px",
                            textAlign: "right",
                          }}
                        >
                          {item.date}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: "10px",
                              borderRadius: "360px",
                              backgroundColor: "#f6f7fb",
                            }}
                          >
                            {item.chat.includes("call") ? (
                              <LocalPhoneIcon
                                color="secondary"
                                fontSize="small"
                              />
                            ) : (
                              <EmailIcon color="primary" fontSize="small" />
                            )}
                          </Box>
                          <Box sx={{ marginLeft: "10px" }}>
                            <Typography
                              sx={{ color: "#133159", fontWeight: "600" }}
                            >
                              {item.label}
                            </Typography>
                            <Typography
                              sx={{ fontSize: "12px", color: "#546376" }}
                            >{`${item.days} days | ${
                              item.chat.includes("call") ? item.chat : "Message"
                            }`}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {showChatDetail ? (
              <Grid item lg={9} xs={12}>
                <Card sx={{ height: "100%" }}>
                  <CardContent style={{ padding: 0, position: "relative" }}>
                    <InboxConversation />
                  </CardContent>
                </Card>
              </Grid>
            ) : (
              <Grid item lg={9} xs={12}>
                <Card sx={{ height: "90vh" }}>
                  <CardContent sx={{ padding: "50px" }}>
                    <Grid container justifyContent="center" spacing={2}>
                      <Grid item justifyContent="center" lg={6} xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingY: "50px",
                          }}
                        >
                          <img
                            alt="No data found"
                            src={NoDataFound}
                            style={{ width: "100%" }}
                          />
                          <Typography sx={{ fontWeight: "500" }}>
                            No Data Found!
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "500",
                              color: "#777",
                              fontSize: "12px",
                              width: "70%",
                              textAlign: "center",
                            }}
                          >
                            Try to add more contacts from your personal account
                            or compose email to someone
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
      <AddCollaborator
        handleClose={(name) => handleToggle(name)}
        name="collaborators"
        open={toggles.collaborators}
      />

      <CreateDeal
        handleClose={(name) => handleToggle(name)}
        name="deals"
        open={toggles.deals}
      />

      <AddActivity
        handleClose={(name) => handleToggle(name)}
        name="task"
        open={toggles.task}
      />

      <AddActivity
        handleClose={(name) => handleToggle(name)}
        name="appointment"
        open={toggles.appointment}
        title="Add Appointment"
      />

      <AddCampaigns
        handleClose={(name) => handleToggle(name)}
        name="campaigns"
        open={toggles.campaigns}
      />

      <EditInfoForm handleClose={handleClose} open={open} />

      <ViewInfoPopup
        handleClose={handleInfoClose}
        open={openInfo}
        setOpen={setOpenInfo}
      />
      <SendMessage
        handleClose={handleMessageClose}
        open={openMessage}
        setOpen={setOpenMessage}
      />
      <SendEmail
        handleClose={handleEmailClose}
        open={openEmail}
        setOpen={setOpenEmail}
      />
      <SendVideo
        handleClose={handleVideoClose}
        open={openVideo}
        setOpen={setOpenVideo}
      />
      <SendVoice
        handleClose={handleVoiceClose}
        open={openVoice}
        setOpen={setOpenVoice}
      />
    </DashboardLayout>
  );
}

export default Inbox;
