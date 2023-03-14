import {
  Box,
  Card,
  CardContent,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import React from "react";
import { useNavigate } from "react-router-dom";
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
function AllOrderDetails() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const navigation = useNavigate();

  const handleOpen = () => {
    navigation(AppRoutes.PURCHASE.ADD_PURCHASE_ORDER);
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
          <Card>
            <CardContent sx={{ paddingTop: 0 }}>
              <TableToolbar
                breadcrumbs={[{ link: "Purchase", to: "/purchase-order" }]}
                buttonText="Edit"
                handleClick={handleOpen}
                title="Purchase Order"
              />
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  aria-label="basic tabs example"
                  value={value}
                  onChange={handleChange}
                >
                  <Tab label="GENERAL" />
                  <Tab label="GATE PASS" />
                  <Tab label="HISTORY" />
                </Tabs>
              </Box>
              <TabPanel index={0} value={value}>
                <General />
              </TabPanel>
              <TabPanel index={1} value={value}>
                <GatePass />
              </TabPanel>
              <TabPanel index={2} value={value}>
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
