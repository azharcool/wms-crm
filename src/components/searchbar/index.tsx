import { InputAdornment, SvgIcon, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Search as SearchIcon } from "assets/icons/search";

interface Props {
  placeholder?: string;
  iconColor?: string;
  iconSize?: string;
}

function SearchBar(props: any) {
  return (
    <Box sx={{ maxWidth: 500, width: "100%"}}>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgIcon
                color={props?.iconColor || "action"}
                fontSize={props?.iconSize}
              >
                {/* <SearchIcon /> */}
              </SvgIcon>
            </InputAdornment>
          ),
        }}
        placeholder={props?.placeholder}
        variant="outlined"
      />
    </Box>
  );
}

export default SearchBar;
