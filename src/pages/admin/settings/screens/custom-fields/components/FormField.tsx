import ClearIcon from "@mui/icons-material/Clear";
import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import TextField from "components/textfield";

interface IProps {
  field: any;
  onDelete: (data: any) => void;
}

function Field(props: any) {
  const { field } = props;
  const { type, label, options } = field;
  switch (type) {
    case "radio":
      return (
        <Box
          sx={{
            mb: 2,
          }}
        >
          <FormLabel
            htmlFor={label}
            sx={{
              color: "inherit",
              fontSize: { xs: "1rem", xl: "1.3rem", fontWeight: "500" },
            }}
          >
            {label}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name={label}
          >
            {options?.map((item: any) => {
              return (
                <FormControlLabel
                  control={<Radio />}
                  label={item.value}
                  value={item.value}
                />
              );
            })}
          </RadioGroup>
        </Box>
      );
    case "checkbox":
      return (
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormLabel
            htmlFor={label}
            sx={{
              color: "inherit",
              fontSize: { xs: "1rem", xl: "1.3rem", fontWeight: "500" },
            }}
          >
            {label}
          </FormLabel>
          <Box>
            {options?.map((item: any) => {
              return (
                <FormControlLabel control={<Checkbox />} label={item.value} />
              );
            })}
          </Box>
        </Box>
      );
    default:
      return (
        <Box
          sx={{
            mb: 2,
            display: "flex",
          }}
        >
          <TextField
            isSelect={type === "dropdown"}
            label={`${label} ${field?.isRequired ? "*" : ""}`}
            menuItems={options}
            name="form-type"
            placeholder={`${label} ${field?.isRequired ? "*" : ""}`}
            style={{ width: "550px", marginRight: 5 }}
            type={type}
          />
        </Box>
      );
  }
}

function FormField(props: IProps) {
  const { field, onDelete } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Field field={field} />
      <IconButton
        onClick={() => {
          onDelete(field);
        }}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
}

export default FormField;
