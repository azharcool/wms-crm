import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { Box, Button, InputAdornment, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import DialFooter from "./DialFooter";

export default function DialPad() {
  const [result, setResult] = useState("");

  const clickHandler = (number: number | string) => {
    let tempText = result;
    tempText += number;

    setResult(tempText);
  };
  const clearDisplay = () => {
    setResult("");
  };

  return (
    <>
      <Box sx={{ margin: "0px 14px", paddingTop: "1.3rem" }}>
        <TextField
          id="outlined-basic"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <HighlightOffOutlinedIcon
                  sx={{ cursor: "pointer" }}
                  onClick={clearDisplay}
                />
              </InputAdornment>
            ),
          }}
          placeholder="Phone Number"
          sx={{
            width: "21rem",
            borderRadius: "3rem",
            maxWidth: { xs: "100%" },
          }}
          type="number"
          value={result}
          variant="outlined"
          onChange={(e) => {
            setResult(e.target.value);
          }}
        />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ mt: "0.8rem", maxWidth: { xs: "100%" } }}
      >
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          tabIndex={0}
          variant="contained"
          onClick={() => clickHandler(1)}
        >
          1
        </Button>
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          tabIndex={0}
          variant="contained"
          onClick={() => clickHandler(2)}
        >
          2
        </Button>
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          tabIndex={0}
          variant="contained"
          onClick={() => clickHandler(3)}
        >
          3
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          maxWidth: { xs: "100%" },
        }}
      >
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          variant="contained"
          onClick={() => clickHandler(4)}
        >
          4
        </Button>
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          variant="contained"
          onClick={() => clickHandler(5)}
        >
          5
        </Button>
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          variant="contained"
          onClick={() => clickHandler(6)}
        >
          6
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          maxWidth: { xs: "100%" },
        }}
      >
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          variant="contained"
          onClick={() => clickHandler(7)}
        >
          7
        </Button>
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          variant="contained"
          onClick={() => clickHandler(8)}
        >
          8
        </Button>
        <Button
          color="inherit"
          sx={{ margin: "8px 13px", width: "6rem", borderRadius: "0.8rem" }}
          variant="contained"
          onClick={() => clickHandler(9)}
        >
          9
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          maxWidth: { xs: "100%" },
        }}
      >
        <Button
          color="inherit"
          sx={{ borderRadius: "0.8rem", width: "6rem", margin: "8px 13px" }}
          variant="contained"
          onClick={() => clickHandler("*")}
        >
          *
        </Button>
        <Button
          color="inherit"
          sx={{ borderRadius: "0.8rem", width: "6rem", margin: "8px 13px" }}
          variant="contained"
          onClick={() => clickHandler(0)}
        >
          0
        </Button>
        <Button
          color="inherit"
          sx={{ borderRadius: "0.8rem", width: "6rem", margin: "8px 13px" }}
          variant="contained"
          onClick={() => clickHandler("#")}
        >
          #
        </Button>
      </Stack>
      <DialFooter />
    </>
  );
}
