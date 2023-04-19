import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GatePass from "./GatePass";
import General from "./General";
import History from "./History";

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

function PurchaseOrderDetails() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Receive",
      onClick: () => {
        // setEditable(false);
      },
      icon: (
        <ArrowBackIosIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Edit",
      onClick: () => {
        navigate(
          `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.purchaseOrders.update}/1`,
        );
      },
      icon: (
        <EditIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  return (
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={[
          {
            link: "PURCHASE ORDER",
            to: `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.purchaseOrders.listing}`,
          },
        ]}
        buttonText="Save"
        handleClick={() => {}}
        navTitle="PO-2223"
        rightActions={rightActionsData}
        title="Purchase Details"
      />
      <Stack direction="row">
        <Tabs
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: "#c44e13",
            },
          }}
          TabIndicatorProps={{
            style: {
              background: "#c44e13",
            },
          }}
          value={value}
          onChange={handleChange}
        >
          <Tab label="GENERAL" />
          <Tab label="GATE PASS" />
          <Tab label="HISTORY" />
        </Tabs>
      </Stack>
      <TabPanel index={0} value={value}>
        <General />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <GatePass />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <History />
      </TabPanel>
    </Container>
  );
}

export default PurchaseOrderDetails;
