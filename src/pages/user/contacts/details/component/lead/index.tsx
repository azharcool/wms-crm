import {CircularProgress, Stack, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import palette from "theme/palette";

interface ILead {
  label: string;
  selectedValue: number | string;
  leftIcon: React.ReactNode;
  menuItems: { id: number; label: string }[];
  isBorderBottom?: boolean;
  menuPlaceholder: string;
  isLoading?: boolean;
  disabled?: boolean;
  onChange?: (id: number) => void;
}
function Lead(props: ILead) {
  const {
    label,
    menuItems,
    isBorderBottom,
    leftIcon,
    menuPlaceholder,
    selectedValue,
    onChange,
    isLoading,
    disabled,
  } = props;

  const handleChange = (id: number) => {
    if (id) {
      onChange?.(id);
      // setValue(event.target.value);
    }
  };

  return (
    <Stack
      alignItems="center"
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: "red",
        padding: 1,
        ...(isBorderBottom
          ? { borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }
          : {
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }),
        background: palette.info.lightBg,
        opacity: 1,
      }}
    >
      <Stack alignItems="center" direction="row">
        {leftIcon}
        <Typography
          sx={{ fontSize: { xs: "0.8rem", lg: "0.9rem", xl: "1.1rem" } }}
        >
          {label}
        </Typography>
      </Stack>
      {isLoading ? (
        <CircularProgress color="warning" size={16} />
      ) : (
        <FormControl sx={{ width: "100%", maxWidth: "150px" }}>
          <Select
            displayEmpty
            value={selectedValue}
            onChange={(event) => {
              const { value } = event.target;
              handleChange(Number(value));
            }}
            inputProps={{ "aria-label": "Without label" }}
            // value={age}
            disabled={disabled}
          >
            <MenuItem disabled value="">
              <em>{menuPlaceholder}</em>
            </MenuItem>
            {menuItems.map((menu) => {
              return (
                <MenuItem key={menu.id} value={menu.id}>
                  {menu.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
}

export default Lead;
