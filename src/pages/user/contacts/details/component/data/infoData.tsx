import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import FolderZipIcon from "@mui/icons-material/FolderZip";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PublicIcon from "@mui/icons-material/Public";
import StreetviewIcon from "@mui/icons-material/Streetview";
import * as React from "react";

export interface InfoProp {
  id: number;
  title?: string;
  text?: string;
  icon?: React.ReactNode;
}

export const moreInfo: InfoProp[] = [
  {
    id: 1,
    title: "Address",
    text: "Poonam chember",
    icon: <LocationOnIcon />,
  },
  {
    id: 2,
    title: "City",
    text: "nagpur",
    icon: <LocationCityIcon />,
  },
  {
    id: 3,
    title: "State",
    text: "Maharashtra",
    icon: <StreetviewIcon />,
  },
  {
    id: 4,
    title: "Zip code",
    text: "440018",
    icon: <FolderZipIcon />,
  },
  {
    id: 5,
    title: "Country",
    text: "India",
    icon: <PublicIcon />,
  },
];
export const contactInfo: InfoProp[] = [
  {
    id: 1,
    title: "Full Name",
    text: "Mohsin Ahmed",
    icon: <AccountCircleIcon />,
  },
  {
    id: 2,
    title: "Email",
    text: "sohail.smart123@gmail.com",
    icon: <EmailIcon />,
  },
  {
    id: 3,
    title: "Phone Number",
    text: "17558227425",
    icon: <LocalPhoneIcon />,
  },
  {
    id: 4,
    title: "Last Contacted",
    text: "No conversations available",
    icon: <PhoneIphoneIcon />,
  },
  {
    id: 5,
    title: "Lead Status",
    text: "Active",
  },
];

export const contactBasicInfo: InfoProp[] = [
  {
    id: 1,
    text: "1234567890",
    icon: <AccountCircleIcon />,
  },
  {
    id: 2,
    text: "sohail.smart123@gmail.com",
    icon: <EmailIcon />,
  },
  {
    id: 3,
    text: "Address",
    icon: <PhoneIphoneIcon />,
  },
];

export const additionalInfo: InfoProp[] = [
  {
    id: 4,
    text: "City",
    icon: <LocationOnIcon />,
  },
  {
    id: 5,
    text: "State",
    icon: <LocationOnIcon />,
  },
  {
    id: 6,
    text: "Country",
    icon: <LocationOnIcon />,
  },
  {
    id: 7,
    text: "Zip Code",
    icon: <LocationOnIcon />,
  },
];
