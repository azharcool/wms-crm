import { Stack } from "@mui/material";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import { IAddContact } from "../../hooks/useForm";

interface Props {
  formik: FormikProps<IAddContact>;
}

function ContractData(props: Props) {
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
          hasAllValue
          isSelect
          error={
            !!touched.serviceAgreementMonth && !!errors.serviceAgreementMonth
          }
          helperText={
            (touched.serviceAgreementMonth &&
              errors &&
              errors.serviceAgreementMonth) ||
            ""
          }
          label="Service Agreement Month"
          menuItems={[
            { id: 1, value: "1" },
            { id: 2, value: "3" },
            { id: 3, value: "6" },
            { id: 4, value: "12" },
          ]}
          name="serviceAgreementMonth"
          value={values.serviceAgreementMonth}
          onBlur={handleBlur("serviceAgreementMonth")}
          onChange={handleChange("serviceAgreementMonth")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("serviceAgreementMonth", event.target.value);
            } else {
              setFieldValue("serviceAgreementMonth", "");
            }
          }}
        />
        <TextField
          error={!!touched.setupFree && !!errors.setupFree}
          helperText={(touched.setupFree && errors && errors.setupFree) || ""}
          label="Setup Fee"
          name="setupFee"
          placeholder="Enter Setup Fee"
          value={values.setupFree}
          onBlur={handleBlur("setupFree")}
          onChange={handleChange("setupFree")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("setupFree", event.target.value);
            } else {
              setFieldValue("setupFree", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          hasAllValue
          isSelect
          error={!!touched.employeesType && !!errors.employeesType}
          helperText={
            (touched.employeesType && errors && errors.employeesType) || ""
          }
          label="1/2 PT , Part Time or Full Time Virtual Employees"
          menuItems={[
            { id: 1, value: "1/2 Part Time" },
            { id: 2, value: "Part Time" },
            { id: 3, value: "Full Time" },
          ]}
          name="fullTimeVirtualEmployees"
          value={values.employeesType}
          onBlur={handleBlur("employeesType")}
          onChange={handleChange("employeesType")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("employeesType", event.target.value);
            } else {
              setFieldValue("employeesType", "");
            }
          }}
        />
        <TextField
          hasAllValue
          isSelect
          error={
            !!touched.serviceAgreementDays && !!errors.serviceAgreementDays
          }
          helperText={
            (touched.serviceAgreementDays &&
              errors &&
              errors.serviceAgreementDays) ||
            ""
          }
          label="Service Agreement in Days"
          menuItems={[
            { id: 1, value: "(20 Business Days)" },
            { id: 2, value: "(60 Business Days)" },
            { id: 3, value: "(120 Business Days)" },
            { id: 4, value: "(240 Business Days)" },
          ]}
          name="fullTimeVirtualEmployees"
          value={values.serviceAgreementDays}
          onBlur={handleBlur("serviceAgreementDays")}
          onChange={handleChange("serviceAgreementDays")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("serviceAgreementDays", event.target.value);
            } else {
              setFieldValue("serviceAgreementDays", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          hasAllValue
          isSelect
          error={!!touched.hoursDayWorked && !!errors.hoursDayWorked}
          helperText={
            (touched.hoursDayWorked && errors && errors.hoursDayWorked) || ""
          }
          label="Hours Per Day Worked"
          menuItems={[
            { id: 1, value: "2" },
            { id: 2, value: "4" },
            { id: 3, value: "8" },
          ]}
          name="hoursPerDayWorked"
          value={values.hoursDayWorked}
          onBlur={handleBlur("hoursDayWorked")}
          onChange={handleChange("hoursDayWorked")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("hoursDayWorked", event.target.value);
            } else {
              setFieldValue("hoursDayWorked", "");
            }
          }}
        />
        <TextField
          hasAllValue
          isSelect
          error={!!touched.virtualEmployees && !!errors.virtualEmployees}
          helperText={
            (touched.virtualEmployees && errors && errors.virtualEmployees) ||
            ""
          }
          label="Virtual Employees"
          menuItems={[
            { id: 1, value: "1" },
            { id: 2, value: "2" },
            { id: 3, value: "3" },
            { id: 4, value: "4" },
            { id: 5, value: "5" },
          ]}
          name="virtualEmployees"
          value={values.virtualEmployees}
          onBlur={handleBlur("virtualEmployees")}
          onChange={handleChange("virtualEmployees")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("virtualEmployees", event.target.value);
            } else {
              setFieldValue("virtualEmployees", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.rate && !!errors.rate}
          helperText={(touched.rate && errors && errors.rate) || ""}
          label="Rate"
          name="rate"
          placeholder="Enter Rate"
          value={values.rate}
          onBlur={handleBlur("rate")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("rate", value.replace(/[^0-9]/g, ""));
          }}
        />
        <TextField
          hasAllValue
          isSelect
          error={!!touched.totalHoursMonth && !!errors.totalHoursMonth}
          helperText={
            (touched.totalHoursMonth && errors && errors.totalHoursMonth) || ""
          }
          label="Total Hours Per Month"
          menuItems={[
            { id: 1, value: "40" },
            { id: 2, value: "80" },
            { id: 3, value: "160" },
          ]}
          name="totalHoursPerMonth"
          value={values.totalHoursMonth}
          onBlur={handleBlur("totalHoursMonth")}
          onChange={handleChange("totalHoursMonth")}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.perApptFee && !!errors.perApptFee}
          helperText={(touched.perApptFee && errors && errors.perApptFee) || ""}
          label="PER APPT FEE"
          name="PER_APPT_FEE"
          placeholder="Enter PER APPT FEE"
          value={values.perApptFee}
          onBlur={handleBlur("perApptFee")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("perApptFee", value.replace(/[^0-9]/g, ""));
          }}
        />
        <TextField
          error={!!touched.totalHoursCycle && !!errors.totalHoursCycle}
          helperText={
            (touched.totalHoursCycle && errors && errors.totalHoursCycle) || ""
          }
          label="Total Hours Per Cycle"
          name="totalHoursPerCycle"
          placeholder="Enter Total Hours Per Cycle"
          value={values.totalHoursCycle}
          onBlur={handleBlur("totalHoursCycle")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("totalHoursCycle", value.replace(/[^0-9]/g, ""));
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.daysPriorCancel && !!errors.daysPriorCancel}
          helperText={
            (touched.daysPriorCancel && errors && errors.daysPriorCancel) || ""
          }
          label="Days Prior to Cancel"
          name="daysPriortoCancel"
          placeholder="Enter PER APPT FEE"
          value={values.daysPriorCancel}
          onBlur={handleBlur("daysPriorCancel")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("daysPriorCancel", value.replace(/[^0-9]/g, ""));
          }}
        />
      </Stack>
    </>
  );
}

export default ContractData;
