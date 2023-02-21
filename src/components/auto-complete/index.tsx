import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  FormControl,
  FormLabel,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import palette from "theme/palette";

interface IAutocomplete {
  data?: any[];
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string;
  handleSearch: (event: any) => void;
  handleData: (data: any) => void;
}

function Autocomplete(props: IAutocomplete) {
  const { handleSearch, data, handleData, placeholder, label, name, value } =
    props;
  return (
    <Stack
      sx={{
        position: "relative",
      }}
    >
      <FormControl>
        {label && (
          <FormLabel
            htmlFor={name}
            sx={{
              color: "inherit",
              fontSize: { xs: "1rem", xl: "1.3rem", fontWeight: "500" },
              marginTop: "5px",
              textTransform: "capitalize",
            }}
          >
            {label}
          </FormLabel>
        )}
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder={placeholder}
          sx={{
            backgroundColor: palette.common.white,
            width: 550,
          }}
          type="text"
          value={value}
          onChange={handleSearch}
        />
      </FormControl>
      {data && data.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 60,
          }}
        >
          <List
            sx={{
              // width: "100%",
              width: 550,
              bgcolor: "background.paper",
              height: 200,
              overflowY: "auto",
              zIndex: 999,
              paddingLeft: "1rem",
            }}
          >
            {data.map((data) => (
              <ListItem
                key={data.id}
                disableGutters
                onClick={() => {
                  handleData(data);
                }}
              >
                <ListItemText primary={`${data.firstName} ${data.lastName}`} />
                {/* {data.firstName ? (
                  <ListItemText primary={data.firstName} />
                ) : data.email ? (
                  <ListItemText primary={data.email} />
                ) : (
                  <ListItemText primary={data.phone} />
                )} */}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Stack>
  );
}

export default Autocomplete;
