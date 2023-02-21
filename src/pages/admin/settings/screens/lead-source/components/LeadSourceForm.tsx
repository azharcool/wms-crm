import CloseIcon from "@mui/icons-material/Close";
import { Box, CircularProgress, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { useLeadSourceActions } from "redux/lead-source/leadSource";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
import { ILeadSourceRequest, useApiActions } from "../query/useApiAction";

interface IAddLeadSource {
  open: boolean;
  handleClose: () => void;
}

const initialValues: ILeadSourceRequest = {
  id: 0,
  leadSourceName: "",
};

function AddLeadSource(props: IAddLeadSource) {
  const { open, handleClose } = props;

  const leadSources = useSelector((state: any) => state.leadSources);
  const { leadSource } = leadSources;

  const { trySave } = useApiActions();
  const { removeLeadSource } = useLeadSourceActions();

  const onSubmit = async (values: ILeadSourceRequest) => {
    await trySave(values);

    handleClose();
    removeLeadSource();
    formik.resetForm();
  };

  const formik = useForm(onSubmit, leadSource || initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const onClose = () => {
    handleClose();
    removeLeadSource();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        {leadSource ? "Edit Lead Source" : " Add Lead Source"}
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
            <TextField
              error={!!touched.leadSourceName && !!errors.leadSourceName}
              helperText={
                (touched.leadSourceName && errors && errors.leadSourceName) ||
                ""
              }
              label="Lead Source Name"
              name="leadSource"
              placeholder="LeadSource"
              style={{ width: "550px" }}
              value={values.leadSourceName}
              onBlur={handleBlur("leadSourceName")}
              onChange={handleChange("leadSourceName")}
            />
          </Box>
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          disabled={!(isValid && dirty)}
          sx={{ width: "inherit", backgroundColor: palette.info.main }}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          {isSubmitting ? (
            <CircularProgress color="warning" size={12} />
          ) : leadSource ? (
            "Edit Source"
          ) : (
            " Add Source"
          )}
        </Button>

        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}
export default AddLeadSource;
