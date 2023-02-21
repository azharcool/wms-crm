import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Chip,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";

import { nanoid } from "@reduxjs/toolkit";
import Slider from "components/layouts/popup-modals/Slider";
import ToggleSwitch from "components/switch";
import TextField from "components/textfield";
import { useState } from "react";
import palette from "theme/palette";
import useFormBuilderForm from "../hooks/useForm";
import { IFormBuilderRequest } from "../query/useApiAction";

interface IProps {
  open: boolean;
  field: any;
  onClose: () => void;
  handleSubmit: (data: any) => void;
}

const initialValues: IFormBuilderRequest = {
  id: 0,
  label: "",
  options: [],
  isRequired: false,
};
function FieldDetail(props: IProps) {
  const { open, onClose, handleSubmit: addField, field } = props;
  const [option, setOption] = useState<string>("");

  const onSubmit = () => {
    const finalField = {
      ...field,
      isRequired: values.isRequired,
      label: values.label,
      options: values.options,
    };
    addField(finalField);
    formik.resetForm();
    onClose();
  };

  const formik = useFormBuilderForm(onSubmit, initialValues);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const onAddOption = () => {
    const tempOptions = JSON.parse(JSON.stringify(values.options));
    tempOptions.push({ value: option, id: nanoid() });
    setFieldValue("options", tempOptions);
    setOption("");
  };

  const handleOption = (event: any) => {
    setOption(event.target.value);
  };

  const handleDelete = (id: string) => {
    const newOptions = values.options?.filter((x: any) => x.id !== id);
    setFieldValue("options", newOptions);
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        More Details
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme: any) => theme.palette.grey[500],
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <PerfectScrollbar>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <Box>
              <TextField
                error={!!touched.label && !!errors.label}
                helperText={(touched.label && errors && errors.label) || ""}
                label="Label"
                name="place_holder"
                placeholder="Label"
                value={values.label}
                onBlur={handleBlur("label")}
                onChange={handleChange("label")}
              />
            </Box>
          </Box>
          {field?.multi ? (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: "column",
                marginBottom: "1rem",
              }}
            >
              <Stack alignItems="flex-end" direction="row" gap={2}>
                <TextField
                  label="Options"
                  name="options"
                  placeholder="add options here"
                  style={{ maxWidth: "460px" }}
                  value={option}
                  onChange={handleOption}
                />
                <Button
                  sx={{
                    backgroundColor: palette.info.main,
                    mb: 1,
                  }}
                  variant="contained"
                  onClick={onAddOption}
                >
                  <AddCircleIcon />
                </Button>
              </Stack>
              <Stack direction="row" spacing={1}>
                {values.options?.map((item) => {
                  return (
                    <Chip
                      label={item.value}
                      // onClick={handleClick}
                      onDelete={() => handleDelete(item.id)}
                    />
                  );
                })}
              </Stack>
            </Box>
          ) : null}
          <Box>
            <ToggleSwitch
              checked={values.isRequired}
              label="Required"
              onChange={() => {
                setFieldValue("isRequired", !values.isRequired);
              }}
            />
          </Box>
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          sx={{ width: "inherit", backgroundColor: palette.info.main }}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Save
        </Button>

        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}

export default FieldDetail;
