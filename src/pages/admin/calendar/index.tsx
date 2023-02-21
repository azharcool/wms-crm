import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CallIcon from "@mui/icons-material/Call";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import ModeIcon from "@mui/icons-material/Mode";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import ReorderIcon from "@mui/icons-material/Reorder";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Card, CardContent, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import CalendarFull from "components/calendar-full";
import DashboardLayout from "components/dashboard-container";
import ContactTable from "pages/user/contacts/components/ContactTable";
import { useState } from "react";
import palette from "theme/palette";
import IconText from "./components/Icons-text";

function Calendar() {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState("showcalendar");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
          <Card>
            <CardContent sx={{ padding: "6px", width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "15px",
                }}
              >
                <Typography fontWeight="500" mt="8px" variant="h5">
                  Activity
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <IconText
                    bgColor="rgba(60,126,243,0.1)"
                    icon={
                      <AccessTimeFilledIcon
                        sx={{ color: "#3c7ef3", marginRight: "10px" }}
                      />
                    }
                    Textcolor="#3c7ef3"
                    title="All"
                  />
                  <IconText
                    bgColor="rgba(60,126,243,0.1)"
                    icon={
                      <AccessTimeFilledIcon
                        sx={{ color: "#3c7ef3", marginRight: "10px" }}
                      />
                    }
                    Textcolor="#3c7ef3"
                    title="Today : 0"
                  />
                  <IconText
                    bgColor="rgba(255,38,74,0.1)"
                    icon={
                      <MoodBadIcon
                        sx={{
                          color: "#ff264a",
                          marginRight: "10px",
                        }}
                      />
                    }
                    Textcolor="#ff264a"
                    title="Overdue : 9"
                  />
                  <IconText
                    bgColor="rgba(39,174,95,0.1)"
                    icon={
                      <TagFacesIcon
                        sx={{ color: "#27AE60", marginRight: "10px" }}
                      />
                    }
                    Textcolor="#27AE60"
                    title="Complete : 12"
                  />
                </Box>
                <Box sx={{ marginLeft: "10px" }}>
                  <Tabs
                    aria-label="basic tabs example"
                    sx={{
                      ".css-skv0gj-MuiButtonBase-root-MuiTab-root": {
                        color: "#ffff",
                      },
                      borderRadius: "8px",
                      backgroundColor: "#f6f7fb",
                      "& button": { borderRadius: 0 },
                      "& > button:hover": {
                        backgroundColor: "#3c7ef3",
                        color: "#fff",
                      },
                      "& .css-1hpt7kt-MuiTabs-indicator": {
                        backgroundColor: "transparent",
                      },
                      "& .css-skv0gj-MuiButtonBase-root-MuiTab-root.Mui-selected":
                      {
                        color: "#fff",
                      },
                      "& .css-ksn32w-MuiButtonBase-root-MuiTab-root.Mui-selected":
                      {
                        color: "#fff",
                      },
                    }}
                    value={value}
                    onChange={handleChange}
                  >
                    <Tab
                      label="List"
                      sx={{
                        backgroundColor:
                          show === "showlist" ? "#3c7ef3" : "#f6f7fb",
                      }}
                      onClick={() => setShow("showlist")}
                    />
                    <Tab
                      label="Calendar"
                      sx={{
                        backgroundColor:
                          show === "showcalendar" ? "#3c7ef3" : "#f6f7fb",
                      }}
                      onClick={() => setShow("showcalendar")}
                    />
                  </Tabs>
                </Box>
                <Box sx={{ marginLeft: "10px" }}>
                  <Button
                    startIcon={<AddCircleIcon sx={{ fontSize: "20px" }} />}
                    sx={{
                      backgroundColor: palette.info.light,
                      padding: "10px",
                    }}
                    variant="contained"
                  >
                    Add New Activity
                  </Button>
                </Box>
              </Box>
              <Divider
                sx={{
                  margin: "15px",
                  backgroundColor: "#a9a9a9",
                  height: "0.5px",
                }}
              />
              <Box
                sx={{
                  margin: "15px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ButtonGroup
                  aria-label="outlined primary button group"
                  // variant="contained"
                  sx={{
                    "& button": {
                      color: "grey",
                      backgroundColor: "#f6f7fb",
                      borderRadius: "0px",
                      fontSize: "15px",
                    },
                    "& button:hover": {
                      backgroundColor: "#3c7ef3",
                      color: "#fff",
                    },
                  }}
                >
                  <IconButton>
                    <ReorderIcon />
                  </IconButton>

                  <IconButton>All</IconButton>

                  <IconButton>
                    <GroupsIcon />
                  </IconButton>

                  <IconButton>
                    <CallIcon />
                  </IconButton>

                  <IconButton>
                    <LocalPostOfficeIcon />
                  </IconButton>

                  <IconButton>
                    <ModeIcon />
                  </IconButton>

                  <IconButton>
                    <AccessTimeFilledIcon />
                  </IconButton>
                </ButtonGroup>
                {show === "showlist" ? (
                  <Box>
                    <ButtonGroup
                      aria-label="outlined primary button group"
                      sx={{
                        fontSize: "13px",
                        "& button": {
                          color: "grey",
                          backgroundColor: "transparent",
                          borderRadius: "0px",
                          border: "1.7px solid #E5E8EF",
                          padding: "5px 10px 5px 10px",
                        },
                        "& button:hover": {
                          backgroundColor: "#3c7ef3",
                          color: "#fff",
                        },
                      }}
                    >
                      <Button>Planned</Button>
                      <Button>Overdue</Button>
                      <Button>Today</Button>
                      <Button>Tomorrow</Button>
                      <Button>This Week</Button>
                      <Button>Next Week</Button>
                      <Button>Completed</Button>
                    </ButtonGroup>
                  </Box>
                ) : null}
              </Box>

              {show === "showcalendar" ? (
                <Box sx={{ margin: "0px" }}>
                  <CalendarFull />
                </Box>
              ) : (
                <Box>
                  <ContactTable
                    contacts={[]}
                    setCurrentPage={() => alert("CurrentPage")}
                    setPageLimit={() => alert("PageLimit")}
                    total={0}
                  />
                </Box>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default Calendar;
