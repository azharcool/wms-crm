import {
  Box,
  Button,
  Divider,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Search as SearchIcon } from "assets/icons/search";
import palette from "theme/palette";

interface ITableToolbar {
  title: string;
  buttonText: string;
  handleClick?: () => void;
}

function TableToolbar(props: ITableToolbar) {
  const { title, buttonText, handleClick } = props;
  return (
    <Box {...props}>
      <Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            p: 1,
          }}
        >
          <Typography sx={{ m: 1, color: palette.text.secondary }} variant="h4">
            {title}
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button
              sx={{
                backgroundColor: palette.info.main,
                width: "inherit",
                height: "45px",
                borderRadius: "5px",
              }}
              variant="contained"
              onClick={() => {
                handleClick?.();
              }}
            >
              <AddCircleIcon sx={{ mr: 1 }} />
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
