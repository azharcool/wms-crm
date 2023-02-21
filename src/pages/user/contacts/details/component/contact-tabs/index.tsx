import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EmailIcon from "@mui/icons-material/Email";
import FolderZipIcon from "@mui/icons-material/FolderZip";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PublicIcon from "@mui/icons-material/Public";
import StreetviewIcon from "@mui/icons-material/Streetview";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import palette from "theme/palette";
import {formatPhoneNumber} from "utils";
import {IContacts} from "../../query/useFetchContactById";
import EditInfoForm from "../edit-info-form";
import EditContactForm from "./edit-contact-form";

interface Props {
  details: IContacts[] | null | undefined;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ContactTabs(props: Props) {
  const { details } = props;
  const [value, setValue] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const userInfo = details?.[0] || ({} as IContacts);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: palette.gray.light,
          borderRadius: "4px",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            aria-label="contact tabs"
            sx={{
              "& button": {
                fontSize: { xs: "0.75rem", xl: "0.95rem" },
                padding: "8px 6px",
                minWidth: "calc(100%/3)",
                "&:first-child": {
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: 0,
                },
                "&:last-child": {
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: 0,
                },
                "&.Mui-selected": {
                  backgroundColor: palette.info.light,
                  color: "#fff",
                },
              },
            }}
            value={value}
            // variant="scrollable"
            onChange={handleChange}
          >
            <Tab label="Contact" {...a11yProps(0)} />
            <Tab label="More Info" {...a11yProps(1)} />
            <Tab label="Tags" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel index={0} value={value}>
          <Box sx={{ padding: { xs: 0, xl: "10px" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <Typography component="p" variant="h6">
                Contact Details
              </Typography>
              <Tooltip title="Edit Info">
                <IconButton onClick={handleEditOpen}>
                  <BorderColorIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <List
              dense={dense}
              sx={{
                color: palette.text.secondary,
                backgroundColor: "#fff",
                overflow: "hidden",
              }}
            >
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: palette.text.primary,
                    // flex: "1 1 20%",
                    minWidth: { xs: "35px", xl: "45px" },
                    "& svg": {
                      fontSize: "1.6rem ",
                    },
                  }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "0.95rem" } }}
                    variant="h6"
                  >
                    Full Name
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.firstName} {userInfo?.lastName}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: palette.text.primary,
                    // flex: "1 1 20%",
                    minWidth: { xs: "35px", xl: "45px" },
                    "& svg": {
                      fontSize: "1.6rem ",
                    },
                  }}
                >
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "0.95rem" } }}
                    variant="h6"
                  >
                    Email
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.email || "-"}{" "}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: palette.text.primary,
                    // flex: "1 1 20%",
                    minWidth: { xs: "35px", xl: "45px" },
                    "& svg": {
                      fontSize: "1.6rem ",
                    },
                  }}
                >
                  <PhoneIphoneIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "0.95rem" } }}
                    variant="h6"
                  >
                    Phone Number
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {formatPhoneNumber(userInfo?.phone) || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              {/* <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: palette.text.primary,
                    // flex: "1 1 20%",
                    minWidth: { xs: "35px", xl: "45px" },
                    "& svg": {
                      fontSize: "1.6rem ",
                    },
                  }}
                >
                  <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "0.95rem" } }}
                    variant="h6"
                  >
                    Last Contact
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {formatPhoneNumber(userInfo?.phone) || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" /> */}
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: palette.text.primary,
                    // flex: "1 1 20%",
                    minWidth: { xs: "35px", xl: "45px" },
                    "& svg": {
                      fontSize: "1.6rem ",
                    },
                  }}
                >
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "0.95rem" } }}
                    variant="h6"
                  >
                    Lead Status
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.leadStatusName || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />

              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    Deal Value
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.contractDetails?.rate || "0"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    Company Name
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.companyName || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <InsertLinkIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    Url
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.companyWebsite || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
            </List>
          </Box>
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <Typography component="p" variant="h6">
                More info
              </Typography>
              <Tooltip title="Edit Info">
                <IconButton onClick={handleOpen}>
                  <BorderColorIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <List
              dense={dense}
              sx={{
                color: palette.text.secondary,
                backgroundColor: "#fff",
              }}
            >
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    Address
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.address?.googleAddress || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />

              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    City
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.address?.googleAddress || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <StreetviewIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    State
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.address?.state || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <FolderZipIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    Zip Code
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.address?.zipCode || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem
                sx={{
                  padding: { xs: "8px", xl: "8px 16px" },
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "45px", color: palette.text.primary }}
                >
                  <PublicIcon />
                </ListItemIcon>
                <ListItemText sx={{ flex: "1 1 80%" }}>
                  <Typography
                    component="h6"
                    sx={{ fontSize: { xs: "0.85rem", xl: "1rem" } }}
                    variant="h6"
                  >
                    Country
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: palette.text.muted,
                      fontSize: { xs: "0.75rem", xl: "0.85rem" },
                    }}
                  >
                    {userInfo?.address?.country || "-"}
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider component="li" />
            </List>
          </Box>
        </TabPanel>
        <TabPanel index={2} value={value}>
          Tags
        </TabPanel>
      </Box>
      <EditContactForm
        handleClose={handleEditClose}
        open={openEdit}
        setOpen={setOpenEdit}
        userInfo={userInfo}
      />
      <EditInfoForm handleClose={handleClose} open={open} userInfo={userInfo} />
    </>
  );
}
