import { Card } from "@mui/material";
import { Stack } from "@mui/system";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import AutoComplete from "components/textfield/AutoComplete";
import { FormikHelpers } from "formik";
import Countries from "__mock__/countries.json";
import useAddSupplierForm, { AddSupplierForm } from "../../purchase-orders/hooks/useAddSupplierForm";


interface IAddSupplier {
  open: boolean;
  handleClose: () => void;
}
const initialValues: AddSupplierForm = {
  companyName: "",
  shortName: "",
  email: "",
  phoneNumber: "",
  address: "",
  country: "",
  city: "",
  zipCode: "",
  firstName: "",
  lastName: "",
  primaryEmail: "",
  primaryPhone: "",
};
function AddSupplier(props: IAddSupplier) {
  const { open, handleClose } = props;
  const supplierForm = useAddSupplierForm({ onSubmit, initialValues });
  const { errors, values, touched, handleSubmit, handleChange, handleBlur } =
    supplierForm;

  async function onSubmit(
    value: AddSupplierForm,
    helper: FormikHelpers<AddSupplierForm>,
  ) {
    console.log("add supplier");
  }
  return (
    <Slider
      buttonText="save"
      handleChange={() => {
        handleSubmit();
      }}
      handleClose={handleClose}
      open={open}
      size="sm"
      title="Create Supplier"
      //   isSubmitting={isSubmitting}
    >
      <PerfectScrollbar>
        <Stack
          gap={2}
          sx={{
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="GENERAL">
              <Stack direction="row" gap={2}>
                <TextField
                  error={!!touched.companyName && !!errors.companyName}
                  helperText={
                    (touched.companyName && errors && errors.companyName) || ""
                  }
                  id="companyName"
                  value={values.companyName}
                  onChange={handleChange("companyName")}
                  label="Company Name"
                  name="companyName"
                  size="small"
                />

                <TextField
                  error={!!touched.shortName && !!errors.shortName}
                  helperText={
                    (touched.shortName && errors && errors.shortName) || ""
                  }
                  id="shortName"
                  label="Short Name"
                  value={values.shortName}
                  onChange={handleChange("shortName")}
                  name="shortName"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField id="email" label="Email" name="email" size="small" />

                <TextField
                  id="number"
                  label="Phone Number"
                  name="number"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="ADDRESS">
              <Stack direction="row" gap={2}>
                <TextField
                  id="address"
                  muliline
                  rows={5}
                  label="Address"
                  value={values.address}
                  onChange={handleChange("address")}
                  name="address"
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <AutoComplete
                  getOptionLabel={(option: any) => option?.name}
                  label="Country"
                  options={Countries || []}
                  //   handleChange={}
                />
              </Stack>
              <Stack direction="row" marginTop={2} gap={2}>
                <TextField id="city" label="City" name="city" size="small" />

                <TextField
                  id="zipCode"
                  label="Zip Code"
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange("zipCode")}
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="PRIMARY CONTACT">
              <Stack direction="row" gap={2}>
                <TextField
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  size="small"
                />

                <TextField
                  id="lastName"
                  label="Last Name"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  name="lastName"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  value={values.primaryEmail}
                  onChange={handleChange("primaryEmail")}
                  size="small"
                />

                <TextField
                  id="number"
                  label="Phone Number"
                  value={values.primaryPhone}
                  onChange={handleChange("primaryPhone")}
                  name="number"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default AddSupplier;