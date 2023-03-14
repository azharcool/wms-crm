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
import Toolbar from "@mui/material/Toolbar";
import CustomIcon from "./CustomIcon";

interface ITab {
  id: string;
  title: string;
}
interface IEnhancedTableToolbar {
  tabs?: ITab[];
}

function EnhancedTableToolbar(props: IEnhancedTableToolbar) {
  const { tabs } = props;
  return (
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
          <CustomIcon title="More">
            <MoreVertIcon />
          </CustomIcon>
        </Stack>
      </Stack>
    </Toolbar>
  );
}

export default EnhancedTableToolbar;
