import {
  Box,
  CardContent,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import React from "react";
import Areas from "./component/tabs/areas";
import Containers from "./component/tabs/containers";
import General from "./component/tabs/general";
import Locations from "./component/tabs/locations";
import Zones from "./component/tabs/zones";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function WarehouseDetails() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
          {/* <Card> */}
          <CardContent sx={{ paddingTop: 0 }}>
            <TableToolbar
              breadcrumbs={[{ link: "Warehouse", to: "/warehouse" }]}
              buttonText="Edit"
              handleClick={handleOpen}
              title="Warehouse Details"
            />
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                aria-label="basic tabs example"
                value={value}
                onChange={handleChange}
              >
                <Tab label="GENERAL" />
                <Tab label="AREAS" />
                <Tab label="ZONES" />
                <Tab label="LOCATIONS" />
                <Tab label="CONTAINERS" />
              </Tabs>
            </Box>
            <TabPanel index={0} value={value}>
              <General />
            </TabPanel>
            <TabPanel index={1} value={value}>
              <Areas />
            </TabPanel>
            <TabPanel index={2} value={value}>
              <Zones />
            </TabPanel>
            <TabPanel index={3} value={value}>
              <Locations />
            </TabPanel>
            <TabPanel index={4} value={value}>
              <Containers />
            </TabPanel>
          </CardContent>
          {/* </Card> */}
        </Container>
      </Box>
      {/* <WarehouseForm handleClose={handleClose} open={open} /> */}
    </DashboardLayout>
  );
}

export default WarehouseDetails;
