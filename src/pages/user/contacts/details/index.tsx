import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import AssignmentIcon from "@mui/icons-material/Assignment";
import CampaignIcon from "@mui/icons-material/Campaign";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EmailIcon from "@mui/icons-material/Email";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HandshakeIcon from "@mui/icons-material/Handshake";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import SourceIcon from "@mui/icons-material/Source";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import Visibility from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AccordionItems from "components/accordion-items";
import { useAlert } from "components/alert";
import DashboardLayout from "components/dashboard-container";
import useDecodedData from "hooks/useDecodedData";
import { useFetchLeadSources } from "pages/admin/settings/screens/lead-source/query/useFetchLeadSources";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useContactActions } from "redux/contacts/contacts";
import palette from "theme/palette";
import { dateFormatter } from "utils";
import AddCollaborator from "./component/add-collaborator/index";
import ContactTabs from "./component/contact-tabs";
import Lead from "./component/lead";

import SendEmail from "../components/quick-activities/send-email";
import SendMessage from "../components/quick-activities/send-message";
import SendVideo from "../components/quick-activities/send-video";
import SendVoice from "../components/quick-activities/send-voice";
import { useFetchUserRoleByRoleName } from "../query/useFetchUserRoleByRoleName";
import ActivityHeader from "./component/activity-header";
import AddActivity from "./component/add-activity";
import AddCampaigns from "./component/add-campaigns";
import ViewInfoPopup from "./component/contact-tabs/view-info-popup";
import Conversation from "./component/conversation";
import CreateDeal from "./component/create-deal";
import { useApiActions } from "./query/useApiActions";
import { useFetchAllActivitiesByContactId } from "./query/useFetchAllActivitiesByContactId";
import { useFetchContactById } from "./query/useFetchContactById";
import { useFetchTotalCounts } from "./query/useFetchTotalCounts";

export interface IToggle {
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
interface ICollaboratorList {
  data: IData[];
}

function CollaboratorList(props: ICollaboratorList) {
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

function ContactDetails() {
  const location = useLocation();
  const [openInfo, setOpenInfo] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [changingOwner, setChangingOwner] = useState(false);
  const [changingLeadSource, setChangingLeadSource] = useState(false);
  const [totalCompletedApp, setTotalCompletedApp] = useState(0);
  const [openVideo, setOpenVideo] = useState(false);
  const [hideApp, setHideApp] = useState(false);
  const [leadOwner, setLeadOwner] = useState<IData[]>([]);
  const [leadSource, setLeadSource] = useState<IData[]>([]);
  const id = Number(location.pathname.split("/")?.[2]);
  const { setContact, setActivity, setAllCounts } = useContactActions();
  const decodedData = useDecodedData();
  const { data: details, isLoading } = useFetchContactById(id);
  const userInfo = details?.data?.[0];

  const { data: allCounts } = useFetchTotalCounts(id);

  const alert = useAlert();
  const [expandAccordion, setExpandAccordion] = useState("");

  const { data: team } = useFetchUserRoleByRoleName("all", true);

  const { data: leadSources } = useFetchLeadSources(0, 0, false);

  useEffect(() => {
    if (leadSources) {
      const leadSourceData =
        leadSources?.data.map((i) => ({
          id: i.id,
          label: i.leadSourceName,
        })) || [];
      setLeadSource(leadSourceData);
    }
  }, [leadSources]);

  useEffect(() => {
    if (team) {
      const salesData =
        team?.data
          .filter((i) => i.roleName === "Sales" || i.roleName === "Admin")
          .map((i) => ({
            id: i.id,
            label: i.fullName || "",
          })) || [];

      setLeadOwner(salesData);
    }
  }, [team]);

  const [toggles, setToggles] = useState<IToggle>({
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
  const { data: activitiesResponse } = useFetchAllActivitiesByContactId(id);

  useEffect(() => {
    if (allCounts?.data) {
      setAllCounts({ allCounts: allCounts?.data });
    }
  }, [allCounts]);

  useEffect(() => {
    if (activitiesResponse?.data) {
      const appCount = activitiesResponse?.data?.filter(
        (x: any) =>
          x.activityTypeName === "Appointment" && x.isCompleted === true,
      )?.length;
      setTotalCompletedApp(appCount);
    }
  }, [activitiesResponse]);

  const { tryCompleteActivity, changeLeadOwner, changeLeadSource } =
    useApiActions();

  useEffect(() => {
    if (userInfo) {
      setContact({ contact: userInfo });
    }
  }, [userInfo]);

  function handleToggle<T>(name: T) {
    const toggleValue = toggles[name as keyof IToggle];

    setToggles((s) => ({
      ...s,
      [name as keyof IToggle]: !toggleValue,
    }));
  }

  function handleToggleActivity<T>(name: T, data: any) {
    const toggleValue = toggles[name as keyof IToggle];
    if (name === "appointment" || name === "task") {
      setActivity({ activity: data });
    }
    setToggles((s) => ({
      ...s,
      [name as keyof IToggle]: !toggleValue,
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

  const completeActivity = async (id: number) => {
    await tryCompleteActivity(id, userInfo?.id || 0);
  };

  const handleSelectOne = (event: any, id: any) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you want to mark this as done?",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => completeActivity(id),
    });
  };

  const updateLeadOwner = async (id: number) => {
    setChangingOwner(true);
    await changeLeadOwner(id, userInfo?.id || 0);
    setChangingOwner(false);
  };
  const updateLeadSource = async (id: number) => {
    setChangingLeadSource(true);
    await changeLeadSource(id, userInfo?.id || 0);
    setChangingLeadSource(false);
  };

  const handleChangeLeadOwner = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to change owner?",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => updateLeadOwner?.(id),
    });
  };
  const handleChangeLeadSource = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to change lead source?",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => updateLeadSource?.(id),
    });
  };

  return (
    <DashboardLayout isLoading={isLoading}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={2}>
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
                  <ContactTabs details={details?.data} />
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
                    <Button
                      fullWidth
                      color="error"
                      sx={{ mt: 1 }}
                      variant="outlined"
                    >
                      <DeleteOutlineIcon sx={{ mr: 1 }} />
                      <Typography>Delete Contact</Typography>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Card>
                <CardContent sx={{ padding: "6px" }}>
                  <ActivityHeader />
                  <Divider />
                  <Conversation />
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Card>
                <CardContent sx={{ padding: "6px" }}>
                  <Lead
                    disabled={decodedData?.RoleName !== "Admin"}
                    isLoading={changingOwner}
                    label="Lead Owner"
                    leftIcon={<PersonIcon sx={iconStyle} />}
                    menuItems={leadOwner}
                    menuPlaceholder="Update Owner"
                    selectedValue={userInfo?.salesRepId || 0}
                    onChange={(id) => handleChangeLeadOwner(id)}
                  />
                  <Lead
                    isBorderBottom
                    isLoading={changingLeadSource}
                    label="Lead Source"
                    leftIcon={<SourceIcon sx={iconStyle} />}
                    menuItems={leadSource}
                    menuPlaceholder="Update Sources"
                    selectedValue={userInfo?.leadSourceId || 0}
                    onChange={(id) => handleChangeLeadSource(id)}
                  />
                  <AccordionItems
                    hasPopup
                    expanded="collaborators"
                    handleChange={handleChange}
                    handleToggle={(name) => handleToggle(name)}
                    label="Collaborators"
                    leftIcon={<FormatListBulletedIcon sx={iconStyle} />}
                    selectedExpandedPanel={expandAccordion}
                    total={allCounts?.data?.collaboratorsCount || 0}
                  />
                  <AccordionItems
                    hasPopup
                    details="No Deal"
                    expanded="deals"
                    handleChange={handleChange}
                    handleToggle={(name) => handleToggle(name)}
                    label="Deals"
                    leftIcon={<HandshakeIcon sx={iconStyle} />}
                    selectedExpandedPanel={expandAccordion}
                    total={allCounts?.data?.dealsCount || 0}
                  />
                  <AccordionItems
                    hasPopup
                    details="No completed Appointments"
                    expanded="appointment"
                    handleChange={handleChange}
                    handleToggle={(name) => handleToggle(name)}
                    label="Appointment"
                    leftIcon={<AccessTimeFilledIcon sx={iconStyle} />}
                    selectedExpandedPanel={expandAccordion}
                    total={allCounts?.data?.appointmentCount || 0}
                  >
                    <>
                      {activitiesResponse?.data
                        ?.filter(
                          (x: any) =>
                            x.activityTypeName === "Appointment" &&
                            x.isCompleted === false,
                        )
                        ?.map((item) => {
                          return (
                            <Stack
                              sx={{
                                marginBottom: 2,
                                borderTop: "1px solid #f9f3f3",
                              }}
                            >
                              <Stack
                                direction="column"
                                gap={2}
                                justifyContent="space-between"
                                sx={{
                                  padding: "0rem 0",
                                }}
                              >
                                <Stack
                                  alignItems="flex-start"
                                  direction="row"
                                  gap={2}
                                  justifyContent="flex-start"
                                >
                                  <Checkbox
                                    onChange={(event: any) => {
                                      return handleSelectOne(event, id);
                                    }}
                                  />
                                  <Box>
                                    <Box
                                      sx={{ cursor: "pointer" }}
                                      onClick={() => {
                                        handleToggleActivity(
                                          "appointment",
                                          item,
                                        );
                                      }}
                                    >
                                      <Typography
                                        sx={{ color: palette.info.main }}
                                      >
                                        {item?.title}
                                      </Typography>
                                    </Box>
                                    <Typography>
                                      {dateFormatter(item?.date)}
                                    </Typography>
                                    <Typography
                                      sx={{ color: palette.info.main }}
                                    >
                                      {item?.userName}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Stack>
                            </Stack>
                          );
                        })}
                    </>
                    <Box>
                      <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          setHideApp(!hideApp);
                        }}
                      >
                        <Typography
                          sx={{ color: palette.info.dark, fontSize: 19 }}
                        >
                          {totalCompletedApp
                            ? !hideApp
                              ? `View ${totalCompletedApp} completed appointments`
                              : `Hide ${totalCompletedApp} completed appointments`
                            : "No completed Appointments"}
                        </Typography>
                      </Box>
                      <>
                        {hideApp &&
                          activitiesResponse?.data
                            ?.filter(
                              (x: any) =>
                                x.activityTypeName === "Appointment" &&
                                x.isCompleted === false,
                            )
                            ?.map((item) => {
                              return (
                                <Stack
                                  sx={{
                                    marginBottom: 2,
                                    borderTop: "1px solid #f9f3f3",
                                  }}
                                >
                                  <Stack
                                    direction="column"
                                    gap={2}
                                    justifyContent="space-between"
                                    sx={{
                                      padding: "0rem 0",
                                    }}
                                  >
                                    <Stack
                                      alignItems="flex-start"
                                      direction="row"
                                      gap={2}
                                      justifyContent="flex-start"
                                    >
                                      <Checkbox
                                        value="true"
                                        onChange={(event: any) => {
                                          return handleSelectOne(event, id);
                                        }}
                                      />
                                      <Box>
                                        <Box
                                          sx={{ cursor: "pointer" }}
                                          onClick={() => {
                                            handleToggleActivity(
                                              "appointment",
                                              item,
                                            );
                                          }}
                                        >
                                          <Typography
                                            sx={{ color: palette.info.main }}
                                          >
                                            {item?.title}
                                          </Typography>
                                        </Box>
                                        <Typography>
                                          {dateFormatter(item?.date)}
                                        </Typography>
                                        <Typography
                                          sx={{ color: palette.info.main }}
                                        >
                                          {item?.userName}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              );
                            })}
                      </>
                    </Box>
                  </AccordionItems>
                  <AccordionItems
                    hasPopup
                    details="No completed Tasks"
                    expanded="task"
                    handleChange={handleChange}
                    handleToggle={(name) => handleToggle(name)}
                    label="Task"
                    leftIcon={<AssignmentIcon sx={iconStyle} />}
                    selectedExpandedPanel={expandAccordion}
                    total={allCounts?.data?.taskCount || 0}
                  >
                    <>
                      {activitiesResponse?.data
                        ?.filter(
                          (x: any) =>
                            x.activityTypeName === "Task" &&
                            x.isCompleted === false,
                        )
                        ?.map((item) => {
                          return (
                            <Stack
                              sx={{
                                marginBottom: 2,
                                borderTop: "1px solid #f9f3f3",
                              }}
                            >
                              <Stack
                                direction="column"
                                gap={2}
                                justifyContent="space-between"
                                sx={{
                                  padding: "0rem 0",
                                }}
                              >
                                <Stack
                                  alignItems="flex-start"
                                  direction="row"
                                  gap={2}
                                  justifyContent="flex-start"
                                >
                                  <Checkbox
                                    onChange={(event: any) => {
                                      return handleSelectOne(event, id);
                                    }}
                                  />
                                  <Box>
                                    <Box
                                      sx={{ cursor: "pointer" }}
                                      onClick={() => {
                                        handleToggleActivity("task", item);
                                      }}
                                    >
                                      <Typography
                                        sx={{ color: palette.info.main }}
                                      >
                                        {item?.title}
                                      </Typography>
                                    </Box>
                                    <Typography>
                                      {dateFormatter(item?.date)}
                                    </Typography>
                                    <Typography
                                      sx={{ color: palette.info.main }}
                                    >
                                      {item?.userName}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Stack>
                            </Stack>
                          );
                        })}
                    </>
                    <Box>
                      <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          setHideApp(!hideApp);
                        }}
                      >
                        <Typography
                          sx={{ color: palette.info.dark, fontSize: 19 }}
                        >
                          {totalCompletedApp
                            ? !hideApp
                              ? `View ${totalCompletedApp} completed tasks`
                              : `Hide ${totalCompletedApp} completed tasks`
                            : "No completed tasks"}
                        </Typography>
                      </Box>
                      <>
                        {hideApp &&
                          activitiesResponse?.data
                            ?.filter(
                              (x: any) =>
                                x.activityTypeName === "Task" &&
                                x.isCompleted === false,
                            )
                            ?.map((item) => {
                              return (
                                <Stack
                                  sx={{
                                    marginBottom: 2,
                                    borderTop: "1px solid #f9f3f3",
                                  }}
                                >
                                  <Stack
                                    direction="column"
                                    gap={2}
                                    justifyContent="space-between"
                                    sx={{
                                      padding: "0rem 0",
                                    }}
                                  >
                                    <Stack
                                      alignItems="flex-start"
                                      direction="row"
                                      gap={2}
                                      justifyContent="flex-start"
                                    >
                                      <Checkbox
                                        value="true"
                                        onChange={(event: any) => {
                                          return handleSelectOne(event, id);
                                        }}
                                      />
                                      <Box>
                                        <Box
                                          sx={{ cursor: "pointer" }}
                                          onClick={() => {
                                            handleToggleActivity("task", item);
                                          }}
                                        >
                                          <Typography
                                            sx={{ color: palette.info.main }}
                                          >
                                            {item?.title}
                                          </Typography>
                                        </Box>
                                        <Typography>
                                          {dateFormatter(item?.date)}
                                        </Typography>
                                        <Typography
                                          sx={{ color: palette.info.main }}
                                        >
                                          {item?.userName}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              );
                            })}
                      </>
                    </Box>
                  </AccordionItems>

                  <AccordionItems
                    hasPopup
                    details="no campaign assigned"
                    expanded="campaigns"
                    handleChange={handleChange}
                    handleToggle={(name) => handleToggle(name)}
                    label="Campaigns"
                    leftIcon={<CampaignIcon sx={iconStyle} />}
                    selectedExpandedPanel={expandAccordion}
                    total={allCounts?.data?.campaignsCount || 0}
                  />

                  <AccordionItems
                    details="No data available"
                    expanded="formEntries"
                    handleChange={handleChange}
                    handleToggle={(name) => handleToggle(name)}
                    label="Form Entries"
                    leftIcon={<AssignmentIcon sx={iconStyle} />}
                    selectedExpandedPanel={expandAccordion}
                    total={allCounts?.data?.formEntriesCount || 0}
                  />
                </CardContent>
              </Card>
            </Grid>
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
        name="Task"
        open={toggles.task}
        title="Add Task"
      />

      <AddActivity
        handleClose={(name) => handleToggle(name)}
        name="Appointment"
        open={toggles.appointment}
        title="Add Appointment"
      />

      <AddCampaigns
        handleClose={(name) => handleToggle(name)}
        name="campaigns"
        open={toggles.campaigns}
      />

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

export default ContactDetails;
