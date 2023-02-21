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
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { useFetchActivities } from "../../query/useFetchActivities";
import { useFetchActivitiesTypes } from "../../query/useFetchActivitiesTypes";
import ConversationTable from "./conversationTable";

interface Props {
  handleAddActivity?: () => void;
}

type IFilterType = "contactId" | "ActivityTypeId" | "filterType";
type IValue = string | number;

type IValues = { type: IFilterType; value: IValue };
interface IFilterUrl {
  url: string;
  values: IValues[];
}

interface IActivityTab {
  title: string;
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
}

const icons = new Map([
  ["Calls", <CallIcon />],
  ["Appointment", <GroupIcon />],
  ["Task", <TaskIcon />],
  ["Email", <EmailIcon />],
  ["Followup", <GroupAddIcon />],
]);

const activityTypeData = [
  { title: "Planned", value: "Planned" },
  { title: "Overdue", value: "Overdue" },
  { title: "Today", value: "Today" },
  { title: "Tomorrow", value: "Tomorrow" },
  { title: "This Week", value: "ThisWeek" },
  { title: "Next Week", value: "NextWeek" },
];

function ActivityTab(props: IActivityTab) {
  const { title, isActive, onClick, children } = props;
  return (
    <Tooltip title={title}>
      <Button
        sx={{
          backgroundColor: isActive ? palette.info.dark : palette.info.main,
          cursor: "pointer",
        }}
        variant="contained"
        onClick={onClick}
      >
        {children}
      </Button>
    </Tooltip>
  );
}

function Activities(props: Props) {
  const { handleAddActivity } = props;
  const [type, setType] = useState("");
  const [activityTypeTab, setActivityTypeTab] = useState("");
  const [filterUrl, setFilterUrl] = useState<IFilterUrl>({
    url: "&ActivityTypeId=0",
    values: [
      {
        type: "ActivityTypeId",
        value: 0,
      },
    ],
  });
  const [activityLoading, setActivityLoading] = useState(false);
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact, allCounts } = contactsStore;

  const { data: activities } = useFetchActivitiesTypes(true);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const {
    data: activitiesResponse,
    isLoading,
    isRefetching,
    refetch,
  } = useFetchActivities(page, limit, contact?.id, filterUrl.url);

  useEffect(() => {
    setActivityLoading(true);
    setTimeout(() => {
      refetch();
      setActivityLoading(false);
    }, 500);
  }, [refetch]);

  const handleGenerateFilter = (
    value: IValue,
    type: IFilterType,
    filterUrl: IFilterUrl,
  ) => {
    let newValues: IValues[] = [];
    const isExist = filterUrl.values.find((i) => i.type === type);

    if (isExist) {
      newValues = filterUrl.values
        .map((i) => {
          if (i.type === type) {
            return {
              ...i,
              value,
            };
          }

          return i;
        })
        .filter((i) => i.value);
    } else {
      newValues = [
        ...filterUrl.values,
        {
          type,
          value,
        },
      ];
    }

    const urls = newValues
      .map((i) => {
        return `&${i.type}=${i.value}`;
      })
      .filter(Boolean)
      .join("");

    return {
      url: urls,
      values: newValues,
    };
  };

  const handleActivityTab = (
    tabType: string,
    id: IValue,
    type: IFilterType,
    isActivityTab?: boolean,
  ) => {
    if (isActivityTab) {
      setActivityTypeTab(tabType);
    } else {
      setType(tabType);
    }
    setActivityLoading(true);
    const newFilterUrl = handleGenerateFilter(id, type, filterUrl);
    setFilterUrl(newFilterUrl);
    setTimeout(() => {
      refetch();
      setActivityLoading(false);
    }, 500);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            width: { xs: "100%", lg: "55%", xl: "auto" },
          }}
        >
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
              Today : {allCounts?.todayCount || 0}
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
              Completed : {activitiesResponse?.completeCount || 0}
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
              Overdue : {activitiesResponse?.overDueCount || 0}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "41%", xl: "auto" } }}>
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
      <Stack
        alignItems="center"
        direction="column"
        sx={{ textAlign: "center", marginTop: "1rem" }}
      >
        <ButtonGroup
          sx={{
            marginBottom: "1rem",
            "& button": {
              padding: "8px",
            },
          }}
        >
          <ActivityTab
            isActive={type === ""}
            title="All"
            onClick={() => handleActivityTab("", 0, "ActivityTypeId")}
          >
            All
          </ActivityTab>
          {activities?.data?.map((item) => {
            return (
              <ActivityTab
                key={item.id}
                isActive={type === item.activityTypeName}
                title={item.activityTypeName}
                onClick={() =>
                  handleActivityTab(
                    item.activityTypeName,
                    item.id,
                    "ActivityTypeId",
                  )
                }
                // onClick={() => setType(item.activityTypeName)}
              >
                {icons.get(item.activityTypeName)}
              </ActivityTab>
            );
          })}
        </ButtonGroup>
        <ButtonGroup
          sx={{
            marginBottom: "1rem",
            "& button": {
              padding: "8px",
            },
          }}
        >
          <ActivityTab
            isActive={activityTypeTab === ""}
            title="All"
            onClick={() => handleActivityTab("", "", "filterType", true)}
          >
            All
          </ActivityTab>
          {activityTypeData.map((item) => {
            return (
              <ActivityTab
                key={item.title}
                isActive={activityTypeTab === item.value}
                title={item.title}
                onClick={() =>
                  handleActivityTab(item.value, item.value, "filterType", true)
                }
              >
                {item.title}
              </ActivityTab>
            );
          })}
        </ButtonGroup>
      </Stack>
      <Box>
        <ConversationTable
          activities={activitiesResponse}
          activityLoading={activityLoading}
          isLoading={isLoading}
          isRefetching={isRefetching}
          limit={limit}
          openModal={handleAddActivity}
          page={page}
          restUrl={filterUrl.url}
          setLimit={setLimit}
          setPage={setPage}
          type={type}
        />
      </Box>
    </Box>
  );
}

export default Activities;
