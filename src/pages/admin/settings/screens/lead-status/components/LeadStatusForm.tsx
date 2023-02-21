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
import { useLeadStatusActions } from "redux/lead-status/leadStatus";
import palette from "theme/palette";
import useForm from "../hooks/useForm";
import { ILeadStatusRequest, useApiActions } from "../query/useApiAction";

interface IAddLeadStatus {
  open: boolean;
  handleClose: () => void;
}

const initialValues: ILeadStatusRequest = {
  id: 0,
  leadStatusName: "",
};

function AddLeadStatus(props: IAddLeadStatus) {
  const { open, handleClose } = props;

  const leadStatuses = useSelector((state: any) => state.leadStatuses);
  const { leadStatus } = leadStatuses;

  const { trySave } = useApiActions();
  const { removeLeadStatus } = useLeadStatusActions();

  const onSubmit = async (values: ILeadStatusRequest) => {
    await trySave(values);

    handleClose();
    removeLeadStatus();
    formik.resetForm();
  };

  const formik = useForm(onSubmit, leadStatus || initialValues);

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
    removeLeadStatus();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        {leadStatus ? "Edit LeadStatus" : " Add LeadStatus"}
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
              error={!!touched.leadStatusName && !!errors.leadStatusName}
              helperText={
                (touched.leadStatusName && errors && errors.leadStatusName) ||
                ""
              }
              label="Lead Status"
              name="leadStatus"
              placeholder="Lead Status"
              style={{ width: "550px" }}
              value={values.leadStatusName}
              onBlur={handleBlur("leadStatusName")}
              onChange={handleChange("leadStatusName")}
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
          ) : leadStatus ? (
            "Edit Status"
          ) : (
            " Add Status"
          )}
        </Button>

        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Slider>
  );
}
export default AddLeadStatus;
