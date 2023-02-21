import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneIcon from "@mui/icons-material/Phone";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs aria-label="icon tabs example" value={value} onChange={handleChange}>
      <Tab aria-label="phone" icon={<PhoneIcon />} />
      <Tab aria-label="favorite" icon={<FavoriteIcon />} />
      <Tab aria-label="person" icon={<PersonPinIcon />} />
    </Tabs>
  );
}
