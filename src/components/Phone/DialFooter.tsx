import CallEndIcon from "@mui/icons-material/CallEnd";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Button, IconButton } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function DialFooter() {
  const topNumber = [
    { label: " 1234567892" },
    { label: " 9808619134" },
    { label: " 9865437643" },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "3px 13px",
          marginTop: "0.6rem",
        }}
      >
        <Box>
          <p>Call From</p>
        </Box>
        <Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={topNumber}
            renderInput={(params) => (
              <TextField placeholder="+1(307) 323-2451" {...params} />
            )}
            sx={{
              width: 245,
              backgroundColor: "#E5E4E2",
              borderRadius: "10px",
              placeholder: "123456789",
              maxWidth: { xs: "100%", width: "14rem" },
            }}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: "0.8rem" }}>
        <Button
          fullWidth
          sx={{
            borderRadius: "0rem",
            backgroundColor: "#68ebcb",
            "&:hover": {
              backgroundColor: "#9ffce7",
            },
          }}
        >
          <CallEndIcon fontSize="large" sx={{ color: "#fff" }} />
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#143159",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "#fff",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="delete" size="large">
              <PersonIcon color="info" fontSize="large" />
            </IconButton>
          </Box>
          <p style={{ color: "#fff", margin: "0px" }}>Contact</p>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "#fff",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton aria-label="delete" size="large">
              <DialpadIcon color="info" fontSize="large" />
            </IconButton>
          </Box>
          <p style={{ color: "#fff", margin: "0px" }}>DialPad</p>
        </Box>
      </Box>
    </Box>
  );
}
export default DialFooter;
