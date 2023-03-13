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
import GatePass from "./tabs/gate-pass";
import General from "./tabs/general";
import History from "./tabs/history";
  
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
  function AllOrderDetails() {
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
                  title="Purchase Order"
                  breadcrumbs={[{link:"Purchase", to:"/purchase-order"}]}
                />
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="GENERAL" />
                    <Tab label="GATE PASS" />
                    <Tab label="HISTORY" />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <General />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <GatePass />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <History />
                </TabPanel>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </DashboardLayout>
    );
  }
  
  export default AllOrderDetails;
  