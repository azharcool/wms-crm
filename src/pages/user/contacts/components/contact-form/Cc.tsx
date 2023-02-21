import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import { IAddContact } from "../../hooks/useForm";
import { cardType } from "./optionData";

interface Props {
  formik: FormikProps<IAddContact>;
}

function Cc(props: Props) {
  const { formik } = props;

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
  return (
    <>
      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.ccName && !!errors.ccName}
          helperText={(touched.ccName && errors && errors.ccName) || ""}
          icon={<AccountCircleIcon />}
          label="Name"
          name="CCName"
          placeholder="Enter Name"
          // style={{ width: "550px" }}
          value={values.ccName}
          onBlur={handleBlur("ccName")}
          onChange={handleChange("ccName")}
        />

        <TextField
          hasAllValue
          isSelect
          error={!!touched.type && !!errors.type}
          helperText={(touched.type && errors && errors.type) || ""}
          label="Type"
          menuItems={cardType}
          name="type"
          // style={{ width: "550px" }}
          value={values.type}
          onBlur={handleBlur("type")}
          onChange={handleChange("type")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("type", event.target.value);
            } else {
              setFieldValue("type", "");
            }
          }}
        />
      </Stack>
      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.cardNumber && !!errors.cardNumber}
          helperText={(touched.cardNumber && errors && errors.cardNumber) || ""}
          label="Card Number"
          name="CC#"
          placeholder="Enter Card Number"
          // style={{ width: "550px" }}
          value={values.cardNumber}
          onBlur={handleBlur("cardNumber")}
          onChange={handleChange("cardNumber")}
        />

        <TextField
          error={!!touched.expiryDate && !!errors.expiryDate}
          helperText={(touched.expiryDate && errors && errors.expiryDate) || ""}
          label="Expiry Date"
          name="expDate"
          placeholder="Enter EXP DATE"
          type="date"
          value={values.expiryDate}
          onBlur={handleBlur("expiryDate")}
          onChange={handleChange("expiryDate")}
          // style={{ width: "550px" }}
        />
      </Stack>
      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.security && !!errors.security}
          helperText={(touched.security && errors && errors.security) || ""}
          label="Security (cvv)"
          name="security"
          placeholder="Enter Security"
          // style={{ width: "550px" }}
          value={values.security}
          onBlur={handleBlur("security")}
          onChange={handleChange("security")}
        />

        <TextField
          error={!!touched.address && !!errors.address}
          helperText={(touched.address && errors && errors.address) || ""}
          label="Address"
          name="CCAddress"
          placeholder="Enter Address"
          // style={{ width: "550px" }}
          value={values.address}
          onBlur={handleBlur("address")}
          onChange={handleChange("address")}
        />
      </Stack>
      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          iconEnd
          error={!!touched.dateOfPayment && !!errors.dateOfPayment}
          helperText={
            (touched.dateOfPayment && errors && errors.dateOfPayment) || ""
          }
          label="Date of Payment"
          name="Date of Payment"
          placeholder="Enter Date of Payment"
          // style={{ width: "550px" }}
          type="date"
          value={values.dateOfPayment}
          onBlur={handleBlur("dateOfPayment")}
          onChange={handleChange("dateOfPayment")}
        />
      </Stack>
    </>
  );
}

export default Cc;
