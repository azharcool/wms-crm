import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Container,
  PaletteMode,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableToolbar from "components/table-toolbar";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Composition from "./Composition";
import General from "./General";

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

function BundleDetails() {
  const navigate = useNavigate();
  const nameRef = useRef<any>(null);
  const newtheme = useSelector((state: any) => state.theme);
  const [value, setValue] = useState(0);
  const [editable, setEditable] = useState(false);
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        setEditable(false);
        // history.push(`123436/${AppRoutes.CATALOG.categoryDetail}`);
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
        setEditable(true);
        setTimeout(() => {
          nameRef.current?.focus();
        }, 500);
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
    {
      id: crypto.randomUUID(),
      title: "Save",
      onClick: () => {
        setEditable(false);
        navigate(-1);
      },
      icon: (
        <SaveIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  const istrue = !editable;
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          buttonText="Edit"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="BUNDLES"
          rightActions={
            editable
              ? rightActionsData.filter((i) => i.title !== "Edit")
              : rightActionsData.filter((i) => i.title === "Edit")
          }
          title="bundles"
        />
        <Stack direction="row">
          <Tabs
            aria-label="basic tabs example"
            value={value}
            onChange={handleChange}
          >
            <Tab label="General" />
            <Tab label="Composition" />
          </Tabs>
        </Stack>
        <TabPanel index={0} value={value}>
          <General isTrue={istrue} />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <Composition isTrue={istrue} />
        </TabPanel>
      </Container>
    </ThemeProvider>
  );
}

export default BundleDetails;
