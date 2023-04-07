import { Stack, Typography } from "@mui/material";

import { styled, SxProps, Theme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "green",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

interface ICustomSwitch {
  title?: string;
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  name?: string;
  id?: string;
  sxStack?: SxProps<Theme>;
  disabled?: boolean;
}
function CustomSwitch(props: ICustomSwitch) {
  const { title, checked, onChange, id, name, sxStack, disabled } = props;

  return (
    <Stack alignItems="center" direction="row" gap={2} sx={sxStack}>
      <AntSwitch
        checked={checked}
        disabled={disabled}
        id={id}
        inputProps={{ "aria-label": "ant design" }}
        name={name}
        onChange={onChange}
      />
      {title ? <Typography>{title}</Typography> : null}
    </Stack>
  );
}

export default CustomSwitch;
