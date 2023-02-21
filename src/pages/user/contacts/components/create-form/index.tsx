import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import { Box, CircularProgress, DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import useDecodedData from "hooks/useDecodedData";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import useCreateForm, { ICreateForm } from "../../hooks/useCreateForm";
import { useApiActions } from "../../query/useApiAction";

interface ICreateNewList {
  open: boolean;
  handleClose: () => void;
}

function CreateNewList(props: ICreateNewList) {
  const { handleClose, open } = props;
  const { addMyListAction } = useApiActions();
  const getContactIds = useSelector(
    (state: RootState) => state.contacts.contactIds,
  );
  const decode = useDecodedData();

  const initialValues: ICreateForm = {
    listName: "",
    listDescription: "",
  };

  const formik = useCreateForm(onSubmit, initialValues);

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
    resetForm,
  } = formik;

  async function onSubmit(values: ICreateForm) {
    const myContactId =
      getContactIds?.map((i) => ({
        id: 0,
        myListId: 0,
        contactId: i,
      })) || [];

    const response = await addMyListAction({
      id: 0,
      userId: Number(decode.id),
      listName: values.listName,
      listDescription: values.listDescription,
      contactList: myContactId,
    });

    if (response) {
      resetForm();
      handleClose();
    }
  }

  return (
    <div>
      <Slider noHeight open={open} size="sm">
        <DialogTitle>
          Create New List
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
            onClick={handleClose}
          >
            <CancelIcon color="error" />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <TextField
            error={!!touched.listName && !!errors.listName}
            helperText={(touched.listName && errors && errors.listName) || ""}
            name="listName"
            placeholder="List Name"
            style={{ width: "550px" }}
            value={values.listName}
            onBlur={handleBlur("listName")}
            onChange={handleChange("listName")}
          />
          <Box
            sx={{
              margin: "1rem",
            }}
          />
          <TextField
            error={!!touched.listDescription && !!errors.listDescription}
            helperText={
              (touched.listDescription && errors && errors.listDescription) ||
              ""
            }
            name="listDescription"
            placeholder="List Description"
            style={{ width: "550px" }}
            value={values.listDescription}
            onBlur={handleBlur("listDescription")}
            onChange={handleChange("listDescription")}
          />
        </DialogContent>

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
              disabled={!isValid || !dirty}
              startIcon={<SaveIcon />}
              style={{ padding: "0.5rem 1rem" }}
              variant="contained"
              onClick={() => handleSubmit()}
            >
              {isSubmitting ? (
                <CircularProgress color="warning" size={12} />
              ) : (
                "Submit"
              )}
            </Button>
            <Button
              autoFocus
              color="error"
              startIcon={<CancelIcon />}
              style={{ padding: "0.5rem 1rem" }}
              variant="contained"
              onClick={handleClose}
            >
              Close
            </Button>
          </Stack>
        </DialogActions>
      </Slider>
    </div>
  );
}

export default CreateNewList;
