import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { FormikProps } from "formik";
import React, { Dispatch } from "react";
import { IGetByIdVariantData } from "types/catalog/variants/getByIdVariantResponse";
import { IUploadFile } from "..";
import General from "./General";
import History from "./History";
import International from "./International";
import InventoryLog from "./InventoryLog";
import Stock from "./Stock";
import Suppliers from "./Suppliers";

interface ITabs {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: IGetByIdVariantData;
  setUploadedFiles: Dispatch<React.SetStateAction<IUploadFile[]>>;
  uploadedFiles: IUploadFile[];
  formik: FormikProps<any>;
}

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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: ITabs) {
  const {
    formik,
    data,
    editable,
    isTrue,
    nameRef,
    setUploadedFiles,
    uploadedFiles,
  } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          aria-label="basic tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab label="GENERAL" {...a11yProps(0)} />
          <Tab label="STOCK" {...a11yProps(1)} />
          <Tab label="SUPPLIERS" {...a11yProps(2)} />
          <Tab label="HISTORY" {...a11yProps(3)} />
          <Tab label="INTERNATIONAL" {...a11yProps(4)} />
          <Tab label="INVENTORY LOG" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel index={0} value={value}>
        <General
          data={data}
          editable={editable}
          formik={formik}
          isTrue={isTrue}
          nameRef={nameRef}
          setUploadedFiles={setUploadedFiles}
          uploadedFiles={uploadedFiles}
        />
      </TabPanel>
      <TabPanel index={1} value={value}>
        <Stock />
      </TabPanel>
      <TabPanel index={2} value={value}>
        <Suppliers />
      </TabPanel>
      <TabPanel index={3} value={value}>
        <History />
      </TabPanel>
      <TabPanel index={4} value={value}>
        <International />
      </TabPanel>
      <TabPanel index={5} value={value}>
        <InventoryLog />
      </TabPanel>
    </Box>
  );
}
