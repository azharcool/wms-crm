import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { DialogContent, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import Slider from "components/layouts/popup-modals/Slider";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";
import { IToggleModel } from "../../type";

interface IAddCampaigns {
  open: boolean;
  handleClose: (_: keyof IToggleModel) => void;
  name: string;
}

const contactData = [
  {
    id: 1,
    name: "Campaign Name (8)",
    desc: "+13073232451",
  },
  {
    id: 2,
    name: "Campaign Name (7)",
    desc: "+13073232451",
  },
  {
    id: 3,
    name: "Campaign Name (4)",
    desc: "+13073232451",
  },
  {
    id: 4,
    name: "Campaign Name (3)",
    desc: "demo@gmail.com",
  },
  {
    id: 5,
    name: "Campaign Name (3)",
    desc: "demo@gmail.com",
  },
  {
    id: 6,
    name: "Campaign Name (3)",
    desc: "demo@gmail.com",
  },
  {
    id: 7,
    name: "Rampaign Name (3)",
    desc: "demo@gmail.com",
  },
];

function AddCampaigns(props: IAddCampaigns) {
  const { open, handleClose, name } = props;
  const [search, setSearch] = useState("");
  const [selectedValue, setSelectedValue] = useState(-1);

  const handleChange = (id: number) => {
    setSelectedValue(id);
  };

  return (
    <Slider open={open} size="sm">
      <DialogTitle>
        Add Campaigns
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={() => handleClose(name as keyof IToggleModel)}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <PerfectScrollbar>
        <DialogContent dividers>
          <Stack margin="auto">
            <Typography>You can add to the following campaigns:</Typography>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Type and search"
              sx={{
                backgroundColor: palette.background.default,
              }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <PerfectScrollbar
              style={{
                height: 400,
              }}
            >
              <Stack gap={2} marginTop="1rem">
                {contactData
                  .filter((i) =>
                    i.name.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((item) => {
                    return (
                      <Stack
                        key={item.id}
                        sx={{
                          backgroundColor: palette.background.default,
                        }}
                        onChange={() => {
                          handleChange(item.id);
                        }}
                      >
                        <Stack alignItems="center" direction="row">
                          <Radio
                            checked={selectedValue === item.id}
                            inputProps={{ "aria-label": "A" }}
                            name="radio-buttons"
                            value={item.id}
                            // onChange={handleChange}
                          />
                          <Typography>{item.name}</Typography>
                        </Stack>

                        <Typography
                          sx={{
                            marginLeft: 5,
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Stack>
                    );
                  })}
              </Stack>
            </PerfectScrollbar>
          </Stack>
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions
        sx={{
          padding: "1.2rem 0",
          justifyContent: "center",
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
        >
          <Button
            startIcon={<AddCircleIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            // onClick={() handleClose}
          >
            Assign Campaign
          </Button>
          <Button
            autoFocus
            color="error"
            startIcon={<CloseIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={() => handleClose(name as keyof IToggleModel)}
          >
            Cancel
          </Button>
        </Stack>
      </DialogActions>
    </Slider>
  );
}

export default AddCampaigns;
