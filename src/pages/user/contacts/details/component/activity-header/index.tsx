/* eslint-disable no-unsafe-optional-chaining */
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CallIcon from "@mui/icons-material/Call";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocation, useNavigate } from "react-router-dom";
import { useContactActions } from "redux/contacts/contacts";
import palette from "theme/palette";
import { dateFormatter } from "utils";
import { useFetchActivities } from "../../query/useFetchActivities";
import SnoozePopup from "../snooze-popup";

// interface Props {
//   user: string;
// }
function ActivityHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const { setSelectedContact } = useContactActions();
  const id = Number(location.pathname.split("/")?.[2]);

  const [showActivity, setShowActivity] = useState(false);
  const [openSnooze, setOpenSnooze] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact, paginationList, allCounts } = contactsStore;
  const { data: activitiesResponse } = useFetchActivities(
    0,
    1000,
    contact?.id,
    "&ActivityTypeId=0&filterType=Today",
  );

  useEffect(() => {
    const selected = paginationList?.find((x: any) => x.contactId === id);
    setCurrentIndex(selected?.index);
    setSelectedContact({
      selectedContact: { index: selected?.index, contactId: id },
    });
  }, [paginationList]);

  const handleToggle = () => {
    setShowActivity((state) => !state);
  };

  const handleSnoozeOpen = (data: any) => {
    setSelectedActivity(data);
    setOpenSnooze(true);
  };

  const handleSnoozeClose = () => {
    setOpenSnooze(false);
  };

  const handlePrev = () => {
    const newIndex = currentIndex - 1;
    if (newIndex === 0) {
      setCurrentIndex(paginationList?.length);

      setSelectedContact({
        selectedContact: {
          contactId: paginationList?.[paginationList?.length - 1].contactId,
          index: paginationList?.[paginationList?.length - 1].index,
        },
      });
      navigate(
        `${AppRoutes.CONTACTS_DETAILS}/${
          paginationList?.[paginationList?.length - 1].contactId
        }`,
      );
      return false;
    }

    setSelectedContact({
      selectedContact: {
        contactId: paginationList?.[newIndex - 1].contactId,
        index: paginationList?.[newIndex - 1].index,
      },
    });
    navigate(
      `${AppRoutes.CONTACTS_DETAILS}/${
        paginationList?.[newIndex - 1].contactId
      }`,
    );
    setCurrentIndex(newIndex);
    return true;
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    if (newIndex > paginationList?.length) {
      setCurrentIndex(1);
      setSelectedContact({
        selectedContact: {
          contactId: paginationList?.[0].contactId,
          index: paginationList?.[0].index,
        },
      });
      // navigate(
      //   `${AppRoutes.CONTACTS_DETAILS}/${paginationList?.[0].contactId}`,
      // );
      return false;
    }

    setSelectedContact({
      selectedContact: {
        contactId: paginationList?.[newIndex - 1].contactId,
        index: paginationList?.[newIndex - 1].index,
      },
    });
    navigate(
      `${AppRoutes.CONTACTS_DETAILS}/${
        paginationList?.[newIndex - 1].contactId
      }`,
    );
    setCurrentIndex(newIndex);
    return true;
  };

  return (
    <>
      <Stack sx={{ padding: "1rem", position: "relative" }}>
        <Stack
          alignItems="center"
          direction="row"
          gap={2}
          justifyContent="space-between"
          marginBottom="1rem"
        >
          <Stack alignItems="center" direction="row" gap={2}>
            <IconButton onClick={handlePrev}>
              <ArrowBackIosIcon />
            </IconButton>
            <Typography>
              {currentIndex} out of {paginationList?.length} contacts
            </Typography>
            <IconButton onClick={handleNext}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          gap={1}
          justifyContent="space-between"
          marginBottom="1rem"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Tooltip title="Total Completed">
              <Box
                sx={{
                  backgroundColor: palette.success.lightGreen,
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SentimentSatisfiedAltIcon
                  sx={{
                    fontSize: { lg: "12px", midlg: "14px", xl: "17px" },
                    color: "inherit",
                    mr: "5px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { lg: "12px", midlg: "14px", xl: "17px" },
                    color: "inherit",
                  }}
                >
                  Completed : {allCounts?.completedCount || 0}
                </Typography>
              </Box>
            </Tooltip>
            <Tooltip title="Total Calls">
              <Box
                sx={{
                  backgroundColor: palette.error.lightRed,
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CallIcon
                  sx={{
                    fontSize: { lg: "12px", midlg: "14px", xl: "17px" },
                    color: "inherit",
                    mr: "5px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { lg: "12px", midlg: "14px", xl: "17px" },
                    color: "inherit",
                  }}
                >
                  Calls : {allCounts?.callsCount || 0}
                </Typography>
              </Box>
            </Tooltip>
            <Tooltip title="Total Meetings">
              <Box
                sx={{
                  backgroundColor: palette.warning.light,
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MeetingRoomIcon
                  sx={{
                    fontSize: { lg: "12px", midlg: "14px", xl: "17px" },
                    color: "inherit",
                    mr: "5px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { lg: "12px", midlg: "14px", xl: "17px" },
                    color: "inherit",
                  }}
                >
                  Meetings : {allCounts?.appointmentCount || 0}
                </Typography>
              </Box>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="See Activity List">
              <Box
                sx={{
                  backgroundColor: palette.info.main,
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    opacity: "0.6",
                  },
                }}
                onClick={handleToggle}
              >
                <Typography
                  sx={{
                    fontSize: { lg: "12px", midlg: "14px", xl: "17px" },
                    color: "inherit",
                  }}
                >
                  Today : {allCounts?.todayCount || 0}
                </Typography>
                <ArrowDropDownIcon
                  sx={{
                    fontSize: { lg: "13px", midlg: "14px", xl: "15px" },
                    color: "inherit",
                    ml: "3px",
                  }}
                />
              </Box>
            </Tooltip>
          </Box>
        </Stack>
        <Stack
          sx={{
            //   display: showActivity ? "block" : "none",
            transition: "all 0.3s ease-in-out",
            maxHeight: showActivity ? "300px" : 0,
            overflow: "hidden",
          }}
        >
          <PerfectScrollbar>
            <Stack sx={{ overflowY: "auto" }}>
              {activitiesResponse?.data &&
                activitiesResponse?.data?.map((item) => {
                  return (
                    <Stack>
                      <Stack
                        alignItems="center"
                        direction="row"
                        gap={2}
                        justifyContent="space-between"
                        sx={{
                          borderTop: "1px solid #f9f3f3",
                          padding: "1rem 0",
                        }}
                      >
                        <Box sx={{ flex: "1 1 47%" }}>
                          <Typography sx={{}}>{item?.title}</Typography>
                        </Box>
                        <Box sx={{ flex: "1 1 40%" }}>
                          <Typography>{dateFormatter(item?.date)}</Typography>
                        </Box>
                        <Box sx={{ flex: "1 1 13%" }}>
                          <Button
                            color="error"
                            sx={{ padding: "5px", fontSize: "12px" }}
                            variant="contained"
                            onClick={() => {
                              handleSnoozeOpen(item);
                            }}
                          >
                            Snooze
                          </Button>
                        </Box>
                      </Stack>
                    </Stack>
                  );
                })}
            </Stack>
          </PerfectScrollbar>
        </Stack>
      </Stack>
      {selectedActivity ? (
        <SnoozePopup
          data={selectedActivity}
          handleClose={handleSnoozeClose}
          open={openSnooze}
          setOpen={setOpenSnooze}
        />
      ) : null}
    </>
  );
}

export default ActivityHeader;
