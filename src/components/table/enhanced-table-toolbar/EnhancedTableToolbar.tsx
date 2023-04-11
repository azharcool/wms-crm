import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import CustomPopover, {
  ICustomPopoverRef,
} from "components/utilities-popup/CustomPopover";
import React from "react";
import CustomIcon from "./CustomIcon";

interface ITab {
  id: string;
  title: string;
}

interface MoreListItem {
  id: string;
  title: string;
  onClick: () => void;
}
interface IEnhancedTableToolbar {
  tabs?: ITab[];
  // remove later on
  handleClick?: () => void;
  title?: string;
  icon?: React.ReactNode;

  handle?: (_: "create" | "filter") => void;
  moreList?: MoreListItem[];
}

function EnhancedTableToolbar(props: IEnhancedTableToolbar) {
  const { tabs, handle, moreList } = props;

  const customPopoverRef = React.useRef<ICustomPopoverRef>(null);

  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          width="100%"
        >
          <Stack direction="row">
            <Tabs aria-label="basic tabs example" value={0} onChange={() => {}}>
              <Tab label="ALL" />
              {tabs?.map((item) => {
                return <Tab key={item.id} label={item.title} />;
              })}
            </Tabs>
          </Stack>

          <Stack direction="row">
            <Box sx={{ maxWidth: 300, marginLeft: "1.5rem" }}>
              <TextField
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: 5,
                    "& input": {
                      padding: "8px 10px",
                      paddingLeft: "16px",
                      fontSize: "0.9rem",
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search..."
                variant="outlined"
              />
            </Box>

            <CustomIcon title="Ordering">
              <FormatAlignCenterIcon />
            </CustomIcon>
            <CustomIcon title="Filter list">
              <FilterListIcon />
            </CustomIcon>
            <CustomIcon
              title="Create"
              onClick={() => handle && handle("create")}
            >
              <AddIcon />
            </CustomIcon>
            <CustomIcon
              title="More"
              onClick={() => {
                if (customPopoverRef) {
                  customPopoverRef.current?.handlePopover();
                }
              }}
            >
              <MoreVertIcon />
            </CustomIcon>
          </Stack>
        </Stack>
      </Toolbar>
      {moreList ? (
        <CustomPopover ref={customPopoverRef} title="More">
          <List>
            {moreList.map((item) => {
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton onClick={() => item.onClick()}>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </CustomPopover>
      ) : null}
    </>
  );
}

export default EnhancedTableToolbar;
