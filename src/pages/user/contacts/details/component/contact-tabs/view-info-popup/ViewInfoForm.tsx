import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useApiActions } from "../../../query/useApiActions";
import useViewInfoForm from "./useViewInfoForm";

export interface IViewInfoForm {
  id?: number;
  contactId?: number;
  googleAddress: string;
  city: string;
  state: string;
  country: string;
  zipCode: string | number;
}

interface Props {
  open: boolean;
  handleClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function ViewInfoForm(props: Props) {
  const { open, setOpen, handleClose } = props;
  const { trySaveAddress } = useApiActions();
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact } = contactsStore;

  const initialValues: IViewInfoForm = {
    id: contact?.address?.id || 0,
    contactId: contact?.id || 0,
    googleAddress: contact?.address?.googleAddress || "",
    city: contact?.address?.city || "",
    state: contact?.address?.state || "",
    country: contact?.address?.country || "",
    zipCode: contact?.address?.zipCode || "",
  };

  const onSubmit = async (values: any) => {
    await trySaveAddress(values);
    setOpen(false);
  };
  const formik = useViewInfoForm(onSubmit, initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik;

  return (
    <Slider open={open}>
      <DialogTitle>
        {contact?.id ? "Edit Contact" : "Add Contact"}
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
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <form>
          <TextField
            error={!!touched.googleAddress && !!errors.googleAddress}
            helperText={
              (touched.googleAddress && errors && errors.googleAddress) || ""
            }
            name="Note"
            placeholder="Enter Address"
            value={values.googleAddress}
            onBlur={handleBlur("googleAddress")}
            onChange={handleChange("googleAddress")}
          />

          <TextField
            error={!!touched.city && !!errors.city}
            helperText={(touched.city && errors && errors.city) || ""}
            name="Note"
            placeholder="Enter City"
            value={values.city}
            onBlur={handleBlur("city")}
            onChange={handleChange("city")}
          />

          <TextField
            error={!!touched.state && !!errors.state}
            helperText={(touched.state && errors && errors.state) || ""}
            name="Note"
            placeholder="Enter State"
            value={values.state}
            onBlur={handleBlur("state")}
            onChange={handleChange("state")}
          />

          <TextField
            error={!!touched.country && !!errors.country}
            helperText={(touched.country && errors && errors.country) || ""}
            name="Note"
            placeholder="Enter Country"
            value={values.country}
            onBlur={handleBlur("country")}
            onChange={handleChange("country")}
          />

          <TextField
            error={!!touched.zipCode && !!errors.zipCode}
            helperText={(touched.zipCode && errors && errors.zipCode) || ""}
            name="Note"
            placeholder="Enter Zip code"
            value={values.zipCode}
            onBlur={handleBlur("zipCode")}
            onChange={handleChange("zipCode")}
          />
        </form>
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
            startIcon={<AddCircleIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            {isSubmitting ? (
              <CircularProgress color="info" size={12} />
            ) : contact?.id ? (
              "Edit"
            ) : (
              "Add"
            )}
          </Button>
          <Button
            autoFocus
            color="error"
            startIcon={<CloseIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
        </Stack>
      </DialogActions>
    </Slider>
  );
}

export default ViewInfoForm;
