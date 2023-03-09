import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import React from "react";
import WarehouseForm from "../../component/WarehouseForm";
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
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
   const [open, setOpen]= React.useState(false)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }; 

  const handleOpen=()=>{
    setOpen(true)
  }
const handleClose=()=>{
  setOpen(false)
}

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
            <CardContent sx={{ paddingTop: 0 }}>
              <TableToolbar
                buttonText="Edit"
                  handleClick={handleOpen}
                title="Warehouse Details"
                breadcrumbs={[{link:"Warehouse", to:"/warehouse"}]}
              />
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="GENERAL" />
                  <Tab label="AREAS" />
                  <Tab label="ZONES" />
                  <Tab label="LOCATIONS" />
                  <Tab label="CONTAINERS" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <General />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Areas />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Zones />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Locations />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Containers />
              </TabPanel>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <WarehouseForm open={open} handleClose={handleClose} />
    </DashboardLayout>
  );
}

export default WarehouseDetails;
