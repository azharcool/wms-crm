import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CampaignIcon from "@mui/icons-material/Campaign";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PersonIcon from "@mui/icons-material/Person";
import SourceIcon from "@mui/icons-material/Source";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import AccordionItems from "components/accordion-items";
import SendEmail from "pages/user/contacts/components/quick-activities/send-email";
import SendMessage from "pages/user/contacts/components/quick-activities/send-message";
import SendVideo from "pages/user/contacts/components/quick-activities/send-video";
import SendVoice from "pages/user/contacts/components/quick-activities/send-voice";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import palette from "theme/palette";
import AddActivity from "../add-activity";
import AddCampaigns from "../add-campaigns";
import AddCollaborator from "../add-collaborator";
import ViewInfoPopup from "../contact-tabs/view-info-popup";
import CreateDeal from "../create-deal";
import Lead from "../lead";

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

interface IProps {
  userInfo: any;
}

function DetailActivity(props: IProps) {
  const { userInfo } = props;
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [expandAccordion, setExpandAccordion] = useState("");

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

  function handleToggle<T>(name: T) {
    const toggleValue = toggles[name as keyof IToggle];
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
  return (
    <Card>
      <CardContent sx={{ padding: "6px" }}>
        <Lead
          label="Lead Owner"
          leftIcon={<PersonIcon sx={iconStyle} />}
          menuItems={leadOwner}
          menuPlaceholder="Update Owner"
          selectedValue={leadOwner[0].label || ""}
        />
        <Lead
          isBorderBottom
          label="Lead Source"
          leftIcon={<SourceIcon sx={iconStyle} />}
          menuItems={leadSource}
          menuPlaceholder="Update Sources"
          selectedValue={leadSource[0].label || ""}
        />
        <AccordionItems
          hasPopup
          expanded="collaborators"
          handleChange={handleChange}
          handleToggle={(name) => handleToggle(name)}
          label="Collaborators"
          leftIcon={<FormatListBulletedIcon sx={iconStyle} />}
          selectedExpandedPanel={expandAccordion}
          total={0}
        >
          <CollaboratorList data={[{ label: "menuItem", id: 1 }]} />
        </AccordionItems>
        <AccordionItems
          hasPopup
          details="No Deal"
          expanded="deals"
          handleChange={handleChange}
          handleToggle={(name) => handleToggle(name)}
          label="Deals"
          leftIcon={<HandshakeIcon sx={iconStyle} />}
          selectedExpandedPanel={expandAccordion}
          total={0}
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
          total={0}
        />
        <AccordionItems
          hasPopup
          details="No completed Tasks"
          expanded="task"
          handleChange={handleChange}
          handleToggle={(name) => handleToggle(name)}
          label="Task"
          leftIcon={<AssignmentIcon sx={iconStyle} />}
          selectedExpandedPanel={expandAccordion}
          total={0}
        />

        <AccordionItems
          hasPopup
          details="no campaign assigned"
          expanded="campaigns"
          handleChange={handleChange}
          handleToggle={(name) => handleToggle(name)}
          label="Campaigns"
          leftIcon={<CampaignIcon sx={iconStyle} />}
          selectedExpandedPanel={expandAccordion}
          total={0}
        />
        <AccordionItems
          details="No data available"
          expanded="formEntries"
          handleChange={handleChange}
          handleToggle={(name) => handleToggle(name)}
          label="Form Entries"
          leftIcon={<AssignmentIcon sx={iconStyle} />}
          selectedExpandedPanel={expandAccordion}
          total={0}
        />
      </CardContent>
      <AddCollaborator
        handleClose={(name: any) => handleToggle(name)}
        name="collaborators"
        open={toggles.collaborators}
      />

      <CreateDeal
        handleClose={(name: any) => handleToggle(name)}
        name="deals"
        open={toggles.deals}
      />

      <AddActivity
        handleClose={(name: any) => handleToggle(name)}
        name="Task"
        open={toggles.task}
        title="Add Task"
      />

      <AddActivity
        handleClose={(name: any) => handleToggle(name)}
        name="Appointment"
        open={toggles.appointment}
        title="Add Appointment"
      />

      <AddCampaigns
        handleClose={(name: any) => handleToggle(name)}
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
    </Card>
  );
}

export default DetailActivity;
