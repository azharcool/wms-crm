import Stack from "@mui/material/Stack";
import TextField from "components/textfield";
import { IDropdown } from "constants/interfaces";
import { FormikProps } from "formik";
import useDecodedData from "hooks/useDecodedData";
import { IAddActivityForm } from "pages/user/contacts/hooks/useAddActivityForm";
import { useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { timeDuration } from "utils";

interface IActivityFields {
  formik: FormikProps<IAddActivityForm>;
  salesTeam?: any[];
}

function ActivityFields(props: IActivityFields) {
  const { formik, salesTeam } = props;
  const [sales, setSales] = useState<IDropdown[]>([]);
  const decode = useDecodedData();

  useEffect(() => {
    if (salesTeam) {
      const temp: IDropdown[] = [];
      salesTeam.forEach((role) => {
        temp.push({
          id: role.id,
          value: role.fullName,
        });
      });
      setSales(temp);
    }
  }, [salesTeam]);

  const { handleBlur, handleChange, values, errors, touched, setFieldValue } =
    formik;

  return (
    <>
      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.title && !!errors.title}
          helperText={(touched.title && errors && errors.title) || ""}
          label="Title"
          name="activityTitle"
          placeholder="Enter Title"
          style={{ width: "550px" }}
          value={values.title}
          onBlur={handleBlur("title")}
          onChange={handleChange("title")}
        />

        <TextField
          error={!!touched.descrition && !!errors.descrition}
          helperText={(touched.descrition && errors && errors.descrition) || ""}
          label="Description"
          name="addActivityDescription"
          placeholder="Enter Description"
          style={{ width: "550px" }}
          value={values.descrition}
          onBlur={handleBlur("descrition")}
          onChange={handleChange("descrition")}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          isSelect
          disabled={decode?.RoleName === "Sales"}
          error={!!touched.assignToId && !!errors.assignToId}
          helperText={(touched.assignToId && errors && errors.assignToId) || ""}
          label="Assign to"
          menuItems={sales || []}
          name="activityAssignto"
          placeholder="Assign to"
          value={values.assignToId}
          onChange={handleChange("assignToId")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("assignToId", event.target.value);
            } else {
              setFieldValue("assignToId", "");
            }
          }}
          style={{ width: "550px" }}
          // value={values.assignToId}
          onBlur={handleBlur("assignToId")}
        />
        <TextField
          hasAllValue
          isSelect
          error={!!touched.duration && !!errors.duration}
          helperText={(touched.duration && errors && errors.duration) || ""}
          label="Duration"
          menuItems={timeDuration()}
          name="activityDuration"
          placeholder="Enter Duration "
          value={`${values.durationCount},${values.duration}`}
          onSelectHandler={(event) => {
            if (event.target.value) {
              const value = event.target.value.split(",");
              setFieldValue("duration", value[1]);
              setFieldValue("durationCount", value[0]);
            } else {
              setFieldValue("duration", "");
              setFieldValue("durationCount", "");
            }
          }}
          style={{ width: "550px" }}
          // value={values.duration}
          onBlur={handleBlur("duration")}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="2.5rem">
        <TextField
          error={!!touched.date && !!errors.date}
          helperText={(touched.date && errors && errors.date) || ""}
          label="Date"
          minDate={new Date().toISOString().slice(0, 16)}
          name="activityDate"
          placeholder="Enter Date"
          style={{ width: "550px" }}
          type="datetime-local"
          value={values.date}
          onBlur={handleBlur("date")}
          onChange={(event) => {
            setFieldValue("date", event.target.value);
            setFieldValue("time", event.target.value);
          }}
        />
      </Stack>
      {values?.id ? (
        <Stack direction="row" gap={2} marginBottom="1rem">
          <TextField
            disabled
            label="Contact Name"
            name="activityTitle"
            placeholder="Contact Name"
            style={{ width: "550px" }}
            value={values.contactName}
          />

          <TextField
            disabled
            label="Contact Email"
            name="addActivityDescription"
            placeholder="Contact Email"
            style={{ width: "550px" }}
            value={values.contactEmail}
          />
        </Stack>
      ) : null}
    </>
  );
}

export default ActivityFields;
