import {
  Box,
  Button,
  Divider,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import CreateIcon from "@mui/icons-material/Create";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Search as SearchIcon } from "assets/icons/search";
import palette from "theme/palette";
import { useNavigate } from "react-router-dom";

interface IBreadcrumb {
  link: string;
  to: string;
}
interface ITableToolbar {
  title: string;
  isAdd?:boolean;
  buttonText: string;
  handleClick?: () => void;
  breadcrumbs?: IBreadcrumb[];
}

function TableToolbar(props: ITableToolbar) {
  const { title, buttonText, handleClick, breadcrumbs, isAdd } = props;
  const navigation = useNavigate();
  const handleBread = (link: string) => {
    navigation(link);
  };

  return (
    <Box {...props}>
      <Box>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs?.map((item: IBreadcrumb) => {
              const { link, to } = item;
              return (
                <Link
                  underline="hover"
                  key={1}
                  color="inherit"
                  onClick={() => handleBread(to)}
                >
                  {link}
                </Link>
              );
            })}
            ,
            <Typography key="3" color="text.primary">
              {title}
            </Typography>
          </Breadcrumbs>
        </Stack>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            p: 1,
          }}
        >
          <Typography
            sx={{ m: 1, color: palette.text.secondary, fontSize: 20 }}
            variant="h4"
          >
            {title}
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button
              sx={{
                // backgroundColor: palette.info.main,
                width: "inherit",
                height: "45px",
                borderRadius: "5px",
                backgroundColor: palette.warning.dark,
                color: "#fff",
              }}
              variant="contained"
              onClick={() => {
                handleClick?.();
              }}
            >
              {isAdd? <AddCircleIcon
                sx={{
                  fontSize:18,
                  mr:1
                }}
              />
            :
              <CreateIcon
                sx={{
                  fontSize:16,
                  mr:1
                }}
              />
}
              <Typography
                component="span"
                sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
              >
                {buttonText}
              </Typography>
            </Button>
          </Box>
        </Box>
        <Divider />
        {/* <Box sx={{ maxWidth: 500, mt: 3, width: "100%", marginLeft: "auto" }}>
          <TextField
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search Users..."
            variant="outlined"
          />
        </Box> */}
      </Box>
    </Box>
  );
}

export default TableToolbar;
