import CloseIcon from "@mui/icons-material/Close";
import PublicIcon from "@mui/icons-material/Public";
import { CircularProgress, DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";

import FolderZipIcon from "@mui/icons-material/FolderZip";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StreetviewIcon from "@mui/icons-material/Streetview";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import useAddressForm, { IAddress } from "../../hooks/useAddressForm";
import { useApiActions } from "../../query/useApiActions";
import { IContacts } from "../../query/useFetchContactById";

interface IAddUser {
  open: boolean;
  userInfo?: IContacts;
  handleClose: () => void;
}

function EditInfoForm(props: IAddUser) {
  const { open, handleClose, userInfo } = props;

  const { trySaveAddress } = useApiActions();
  const address = userInfo?.address;
  const initialValues: IAddress = {
    id: address?.id,
    contactId: address?.contactId || 0,
    googleAddress: address?.googleAddress || "",
    street: address?.street || "",
    state: address?.state || "",
    city: address?.city || "",
    zipCode: address?.zipCode || "",
  };

  const onSubmit = async (values: IAddress) => {
    await trySaveAddress(values);
    handleClose();
  };
  const formik = useAddressForm(onSubmit, initialValues);

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

  return (
    <div>
      <Slider open={open}>
        <DialogTitle>
          Add/Edit Address
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

        <PerfectScrollbar>
          <DialogContent dividers>
            <form>
              <>
                <Stack direction="row" gap={2} marginBottom="1rem">
                  <TextField
                    error={!!touched.googleAddress && !!errors.googleAddress}
                    helperText={
                      (touched.googleAddress &&
                        errors &&
                        errors.googleAddress) ||
                      ""
                    }
                    icon={<LocationOnIcon />}
                    label="Address"
                    name="googleAddress"
                    style={{ width: "550px" }}
                    type="text"
                    value={values.googleAddress}
                    onBlur={handleBlur("googleAddress")}
                    onChange={handleChange("googleAddress")}
                  />

                  <TextField
                    error={!!touched.city && !!errors.city}
                    helperText={(touched.city && errors && errors.city) || ""}
                    icon={<StreetviewIcon />}
                    label="City"
                    name="city"
                    style={{ width: "550px" }}
                    type="text"
                    value={values.city}
                    onBlur={handleBlur("city")}
                    onChange={handleChange("city")}
                  />
                </Stack>

                <Stack direction="row" gap={2} marginBottom="1rem">
                  <TextField
                    error={!!touched.state && !!errors.state}
                    helperText={(touched.state && errors && errors.state) || ""}
                    icon={<FolderZipIcon />}
                    label="State"
                    name="state"
                    style={{ width: "550px" }}
                    type="text"
                    value={values.state}
                    onBlur={handleBlur("state")}
                    onChange={handleChange("state")}
                  />
                  <TextField
                    error={!!touched.country && !!errors.country}
                    helperText={
                      (touched.country && errors && errors.country) || ""
                    }
                    icon={<PublicIcon />}
                    label="Country"
                    name="Country"
                    style={{ width: "550px" }}
                    type="text"
                    value={values.country}
                    onBlur={handleBlur("country")}
                    onChange={handleChange("country")}
                  />
                </Stack>

                <Stack direction="row" gap={2} marginBottom="2.5rem">
                  <TextField
                    error={!!touched.zipCode && !!errors.zipCode}
                    helperText={
                      (touched.zipCode && errors && errors.zipCode) || ""
                    }
                    icon={<FolderZipIcon />}
                    label="Zip Code"
                    name="zipCode"
                    type="text"
                    value={values.zipCode}
                    onBlur={handleBlur("zipCode")}
                    onChange={handleChange("zipCode")}
                  />
                </Stack>
              </>
            </form>
          </DialogContent>
        </PerfectScrollbar>
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
              startIcon={<UpgradeIcon />}
              style={{ padding: "0.5rem 1rem" }}
              variant="contained"
              onClick={() => handleSubmit()}
            >
              {isSubmitting ? (
                <CircularProgress color="warning" size={12} />
              ) : (
                "Update"
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
    </div>
  );
}
export default EditInfoForm;
