import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Box, DialogContent, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Slider from "components/layouts/popup-modals/Slider";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";
import { IToggleModel } from "../../type";

interface IAddCollaborator {
  open: boolean;
  handleClose: (_: keyof IToggleModel) => void;
  name: string;
}

function AddCollaborator(props: IAddCollaborator) {
  const { open, handleClose, name } = props;
  const [search, setSearch] = useState("");

  const collaboratorList = [
    {
      id: 1,
      name: "Mohsin amen",
    },
    {
      id: 1,
      name: "Riyaz shiekh",
    },
  ];

  return (
    <Slider open={open} size="sm">
      <DialogTitle>
        Collaborator
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
          <Stack direction="row">
            <TextField
              fullWidth
              placeholder="Type to Search"
              sx={{
                "& .css-lcglzs-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
              value={search}
              variant="outlined"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Button
              sx={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                padding: "0 2rem",
              }}
              variant="contained"
            >
              <SearchIcon />
            </Button>
          </Stack>
          <FormGroup>
            {collaboratorList
              .filter((i) =>
                i.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
              )
              .map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      backgroundColor: palette.background.default,
                      padding: "0.3rem 1rem",
                      marginTop: 2,
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={item.name}
                    />
                  </Box>
                );
              })}
          </FormGroup>
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
            Update Collaborator
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

export default AddCollaborator;
