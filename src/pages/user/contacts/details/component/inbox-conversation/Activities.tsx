import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import TaskIcon from "@mui/icons-material/Task";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import palette from "theme/palette";
import ConversationTable from "./conversationTable";

interface Props {
  handleAddActivity?: () => void;
}

function Activities(props: Props) {
  const { handleAddActivity } = props;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              backgroundColor: palette.info.lightBg2,
              color: palette.info.main,
              borderRadius: "4px",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
            }}
          >
            <WatchLaterIcon
              sx={{ fontSize: "13px", color: "inherit", mr: "5px" }}
            />
            <Typography sx={{ fontSize: "inherit", color: "inherit" }}>
              Today : 0
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: palette.success.lightBg,
              color: palette.success.lightGreen,
              borderRadius: "4px",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
            }}
          >
            <SentimentSatisfiedAltIcon
              sx={{ fontSize: "13px", color: "inherit", mr: "5px" }}
            />
            <Typography sx={{ fontSize: "inherit", color: "inherit" }}>
              Comopleted : 0
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: palette.error.lightBg,
              color: palette.error.lightRed,
              borderRadius: "4px",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              fontSize: "13px",
            }}
          >
            <SentimentVeryDissatisfiedIcon
              sx={{ fontSize: "13px", color: "inherit", mr: "5px" }}
            />
            <Typography sx={{ fontSize: "inherit", color: "inherit" }}>
              Overdue : 0
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            startIcon={<AddCircleIcon />}
            style={{ padding: "0.5rem 1rem" }}
            sx={{ backgroundColor: palette.info.main }}
            variant="contained"
            onClick={handleAddActivity}
          >
            Add New Activity
          </Button>
        </Box>
      </Box>
      <Divider sx={{ margin: "1rem 0" }} />
      <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
        <ButtonGroup
          sx={{
            marginBottom: "1rem",
            "& button": {
              padding: "8px",
            },
          }}
        >
          <Tooltip title="All">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              All
            </Button>
          </Tooltip>
          <Tooltip title="Call">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              <CallIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Meeting">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              <GroupIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Task">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              <TaskIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Deadline">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              <AccessTimeIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Email">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              <EmailIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Followup">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              <GroupAddIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
        <ButtonGroup
          sx={{
            marginBottom: "1rem",
            "& button": {
              padding: "8px",
            },
          }}
        >
          <Tooltip title="Planned">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              Planned
            </Button>
          </Tooltip>
          <Tooltip title="Completed">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              Completed
            </Button>
          </Tooltip>
          <Tooltip title="Overdue">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              Overdue
            </Button>
          </Tooltip>
          <Tooltip title="Today">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              Today
            </Button>
          </Tooltip>
          <Tooltip title="Tomorrow">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              Tomorrow
            </Button>
          </Tooltip>
          <Tooltip title="This Week">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              This Week
            </Button>
          </Tooltip>
          <Tooltip title=" Next Week">
            <Button
              sx={{ backgroundColor: palette.info.main }}
              variant="contained"
            >
              Next Week
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Box>
      <Box>
        <ConversationTable />
      </Box>
    </Box>
  );
}

export default Activities;
