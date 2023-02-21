import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Stack } from "@mui/material";
import Autocomplete from "components/auto-complete";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import useDecodedData from "hooks/useDecodedData";
import { SyntheticEvent, useEffect, useState } from "react";
import { formatPhoneNumber } from "utils";
import { IAddContact } from "../../hooks/useForm";
import {
  IMenuItem,
  clientRole,
  entityOption,
  followUpOptions,
} from "./optionData";

interface Props {
  formik: FormikProps<IAddContact>;
  team: any[];
  leadStatusesData?: any[];
  leadSourcesData?: any[];
  pipelinesData?: any[];
  contacts?: any[];
}

function ContactInfo(props: Props) {
  const {
    formik,
    team,
    leadStatusesData,
    leadSourcesData,
    contacts,
    pipelinesData,
  } = props;
  const [leadStatus, setLeadStatus] = useState<IMenuItem[]>([]);
  const [leadSource, setLeadSource] = useState<IMenuItem[]>([]);
  const [leadPipelines, setLeadPipelines] = useState<IMenuItem[]>([]);
  const [salesUSers, setSalesUSers] = useState<IMenuItem[]>([]);
  const [followUpUser, setFollowUpUsers] = useState<IMenuItem[]>([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);
  const decode = useDecodedData();

  const { handleBlur, handleChange, setFieldValue, values, errors, touched } =
    formik;

  useEffect(() => {
    if (team) {
      const temp: IMenuItem[] = [];
      const salesData = team.filter(
        (x: any) => x.roleName === "Sales" || x.roleName === "Admin",
      );
      salesData.forEach((role: any) => {
        temp.push({
          id: role.id,
          value: role.fullName,
        });
      });
      setFollowUpUsers(temp);
    }
  }, [team]);
  useEffect(() => {
    if (team) {
      const temp: IMenuItem[] = [];
      const salesData = team.filter((x: any) => x.roleName === "Sales");
      salesData.forEach((role: any) => {
        temp.push({
          id: role.id,
          value: role.fullName,
        });
      });
      setSalesUSers(temp);
    }
  }, [team]);

  useEffect(() => {
    if (leadStatusesData) {
      const leadStatusOption: any = [];
      leadStatusesData?.map((item: any) => {
        leadStatusOption.push({
          id: item?.id,
          value: item?.leadStatusName,
        });
        return item;
      });
      setLeadStatus(leadStatusOption);
    }
  }, [leadStatusesData]);

  useEffect(() => {
    if (leadSourcesData) {
      const leadSourceOption: any = [];
      leadSourcesData?.map((item: any) => {
        leadSourceOption.push({
          id: item?.id,
          value: item?.leadSourceName,
        });
        return item;
      });
      setLeadSource(leadSourceOption);
    }
  }, [leadSourcesData]);

  useEffect(() => {
    if (pipelinesData) {
      const leadPipelinesOption: any = [];
      pipelinesData?.map((item: any) => {
        return leadPipelinesOption.push({
          id: item?.id,
          value: item?.stage,
        });
      });
      setLeadPipelines(leadPipelinesOption);
    }
  }, [pipelinesData]);

  const handleSearch = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
    const value = target.value.toLowerCase();
    const filterContact = contacts
      ? contacts?.filter(
          (i) =>
            i.email.toLowerCase().includes(value) ||
            i.firstName.toLowerCase().includes(value) ||
            i.lastName.toLowerCase().includes(value) ||
            i.phone.toLowerCase().includes(value),
        )
      : [];
    setData(filterContact);
  };
  return (
    <>
      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.firstName && !!errors.firstName}
          helperText={(touched.firstName && errors && errors.firstName) || ""}
          icon={<AccountCircleIcon />}
          label="First name*"
          name="firstName"
          placeholder="Enter First Name"
          // style={{ width: "550px" }}
          value={values.firstName}
          onBlur={handleBlur("firstName")}
          onChange={handleChange("firstName")}
        />

        <TextField
          error={!!touched.lastName && !!errors.lastName}
          helperText={(touched.lastName && errors && errors.lastName) || ""}
          icon={<AccountCircleIcon />}
          label="Last name*"
          name="lastName"
          placeholder="Enter Last Name"
          // style={{ width: "550px" }}
          value={values.lastName}
          onBlur={handleBlur("lastName")}
          onChange={handleChange("lastName")}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.phone && !!errors.phone}
          helperText={(touched.phone && errors && errors.phone) || ""}
          icon={<LocalPhoneIcon />}
          label="Phone*"
          name="phone"
          placeholder="+1 (123) 456-7890"
          value={formatPhoneNumber(values.phone)}
          // style={{ width: "550px" }}
          onBlur={handleBlur("phone")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("phone", value.replace(/[^0-9]/g, ""));
          }}
        />

        <TextField
          error={!!touched.mobile && !!errors.mobile}
          helperText={(touched.mobile && errors && errors.mobile) || ""}
          icon={<PhoneIphoneIcon />}
          label="Mobile*"
          name="mobile"
          placeholder="+1 (123) 456-7890"
          // style={{ width: "550px" }}
          value={formatPhoneNumber(values.mobile)}
          onBlur={handleBlur("mobile")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("mobile", value.replace(/[^0-9]/g, ""));
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.email && !!errors.email}
          helperText={(touched.email && errors && errors.email) || ""}
          icon={<EmailIcon />}
          label="Email*"
          name="email"
          placeholder="Enter Email"
          // style={{ width: "550px" }}
          value={values.email}
          onBlur={handleBlur("email")}
          onChange={handleChange("email")}
        />

        <TextField
          error={!!touched.secondEmail && !!errors.secondEmail}
          helperText={
            (touched.secondEmail && errors && errors.secondEmail) || ""
          }
          icon={<EmailIcon />}
          label="2nd Email Address"
          name="email2"
          placeholder="Enter Email"
          // style={{ width: "550px" }}
          value={values.secondEmail}
          onBlur={handleBlur("secondEmail")}
          onChange={handleChange("secondEmail")}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          error={!!touched.companyName && !!errors.companyName}
          helperText={
            (touched.companyName && errors && errors.companyName) || ""
          }
          icon={<EmailIcon />}
          label="Company Name"
          name="companyName"
          placeholder="Enter Company Name"
          // style={{ width: "550px" }}
          value={values.companyName}
          onBlur={handleBlur("companyName")}
          onChange={handleChange("companyName")}
        />

        <TextField
          error={!!touched.companyWebsite && !!errors.companyWebsite}
          helperText={
            (touched.companyWebsite && errors && errors.companyWebsite) || ""
          }
          icon={<EmailIcon />}
          label="Company Website"
          name="comapnyWebsite"
          placeholder="Enter company website"
          value={values.companyWebsite}
          onBlur={handleBlur("companyWebsite")}
          onChange={handleChange("companyWebsite")}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          isSelect
          disabled={decode?.RoleName === "Sales"}
          error={!!touched.salesRepId && !!errors.salesRepId}
          helperText={(touched.salesRepId && errors && errors.salesRepId) || ""}
          label="Sales Rep"
          menuItems={salesUSers || []}
          name="salesRep"
          value={values.salesRepId}
          onBlur={handleBlur("salesRepId")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("salesRepId", event.target.value);
            } else {
              setFieldValue("salesRepId", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          isSelect
          error={!!touched.leadSource && !!errors.leadSource}
          helperText={(touched.leadSource && errors && errors.leadSource) || ""}
          label="Lead Source"
          menuItems={leadSource}
          name="leadSource"
          // style={{ width: "550px" }}
          value={values.leadSource}
          onBlur={handleBlur("leadSource")}
          onChange={handleChange("leadSource")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("leadSource", event.target.value);
            } else {
              setFieldValue("leadSource", "");
            }
          }}
        />

        <TextField
          isSelect
          error={!!touched.leadStatus && !!errors.leadStatus}
          helperText={(touched.leadStatus && errors && errors.leadStatus) || ""}
          label="Lead Status"
          menuItems={leadStatus}
          name="leadStatus"
          value={values.leadStatus}
          onBlur={handleBlur("leadStatus")}
          onChange={handleChange("leadStatus")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("leadStatus", event.target.value);
            } else {
              setFieldValue("leadStatus", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          isSelect
          error={!!touched.pipelineLead && !!errors.pipelineLead}
          helperText={
            (touched.pipelineLead && errors && errors.pipelineLead) || ""
          }
          label="Pipeline - Lead"
          menuItems={leadPipelines || []}
          name="pipelineLead"
          value={values.pipelineLead}
          onBlur={handleBlur("pipelineLead")}
          // onChange={handleChange("pipelineLead")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("pipelineLead", event.target.value);
            } else {
              setFieldValue("pipelineLead", "");
            }
          }}
        />

        <TextField
          isSelect
          error={!!touched.followUp && !!errors.followUp}
          helperText={(touched.followUp && errors && errors.followUp) || ""}
          label="Follow Up"
          menuItems={followUpUser || []}
          name="followUp"
          value={values.followUp}
          onBlur={handleBlur("followUp")}
          onChange={handleChange("followUp")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("followUp", event.target.value);
            } else {
              setFieldValue("followUp", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        {/* <TextField
          hasAllValue
          isSelect
          error={!!touched.recordOwner && !!errors.recordOwner}
          helperText={
            (touched.recordOwner && errors && errors.recordOwner) || ""
          }
          label="Record Owner"
          menuItems={salesUSers}
          name="recordOwner"
          value={values.recordOwner}
          // style={{ width: "550px" }}
          onBlur={handleBlur("recordOwner")}
          onChange={handleChange("recordOwner")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("recordOwner", event.target.value);
            } else {
              setFieldValue("recordOwner", "");
            }
          }}
        /> */}
        <TextField
          hasAllValue
          isSelect
          error={!!touched.entityType && !!errors.entityType}
          helperText={(touched.entityType && errors && errors.entityType) || ""}
          label="Entity Type"
          menuItems={entityOption}
          name="entityType"
          value={values.entityType}
          onBlur={handleBlur("entityType")}
          onChange={handleChange("entityType")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("entityType", event.target.value);
            } else {
              setFieldValue("entityType", "");
            }
          }}
        />

        <TextField
          hasAllValue
          isSelect
          error={
            !!touched.emailFollowUpOptions && !!errors.emailFollowUpOptions
          }
          helperText={
            (touched.emailFollowUpOptions &&
              errors &&
              errors.emailFollowUpOptions) ||
            ""
          }
          label="Email Follow Up Options"
          menuItems={followUpOptions}
          name="emailFollowUpOptions"
          value={values.emailFollowUpOptions}
          // style={{ width: "550px" }}
          onBlur={handleBlur("emailFollowUpOptions")}
          onChange={handleChange("emailFollowUpOptions")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("emailFollowUpOptions", event.target.value);
            } else {
              setFieldValue("emailFollowUpOptions", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="1rem">
        <TextField
          hasAllValue
          isSelect
          error={!!touched.role && !!errors.role}
          helperText={(touched.role && errors && errors.role) || ""}
          label="Role"
          menuItems={clientRole}
          name="role"
          // style={{ width: "550px" }}
          value={values.role}
          onBlur={handleBlur("role")}
          onChange={handleChange("role")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("role", event.target.value);
            } else {
              setFieldValue("role", "");
            }
          }}
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="2.5rem">
        <Autocomplete
          data={data}
          handleData={(data) => {
            setData([]);
            setSearch("");
            setFieldValue("referredBy", data?.id);
            setFieldValue(
              "referredName",
              `${data?.firstName} ${data?.lastName}`,
            );
          }}
          handleSearch={handleSearch}
          label="Referred By"
          name="refferBy"
          placeholder="Referred By"
          value={values.referredName}
        />
        {/* <TextField
          hasAllValue
          isSelect
          error={!!touched.referredBy && !!errors.referredBy}
          helperText={(touched.referredBy && errors && errors.referredBy) || ""}
          label="Referred By"
          menuItems={refferedBy}
          name="referredBy"
          // style={{ width: "550px" }}
          value={values.referredBy}
          onBlur={handleBlur("referredBy")}
          onChange={handleChange("referredBy")}
          onSelectHandler={(event) => {
            if (event.target.value) {
              setFieldValue("referredBy", event.target.value);
            } else {
              setFieldValue("referredBy", "");
            }
          }}
        /> */}

        <TextField
          error={!!touched.dateContractsSent && !!errors.dateContractsSent}
          helperText={
            (touched.dateContractsSent && errors && errors.dateContractsSent) ||
            ""
          }
          label="DATE Contracts Sent"
          name="DATE Contracts Sent"
          placeholder="Enter DATE Contracts Sent"
          onBlur={handleBlur("dateContractsSent")}
          onChange={handleChange("dateContractsSent")}
          value={values.dateContractsSent}
          // style={{ width: "550px" }}
          type="date"
        />
      </Stack>

      <Stack direction="row" gap={2} marginBottom="2.5rem">
        <TextField
          error={!!touched.taxId && !!errors.taxId}
          helperText={(touched.taxId && errors && errors.taxId) || ""}
          icon={<PhoneIphoneIcon />}
          label="Tax ID #"
          name="TaxID"
          placeholder="Enter Tax ID"
          // style={{ width: "550px" }}
          value={values.taxId}
          onBlur={handleBlur("taxId")}
          onChange={(e) => {
            const { target } = e;
            const { value } = target;
            setFieldValue("taxId", value.replace(/[^0-9F]/g, ""));
            // handleChange("taxId")
          }}
        />

        <TextField
          error={!!touched.seqStartDate && !!errors.seqStartDate}
          helperText={
            (touched.seqStartDate && errors && errors.seqStartDate) || ""
          }
          label="Seq Start Date"
          name="Seq Start Date"
          placeholder="Enter Seq Start Date"
          type="date"
          value={values.seqStartDate}
          onBlur={handleBlur("seqStartDate")}
          onChange={handleChange("seqStartDate")}
        />
      </Stack>
    </>
  );
}

export default ContactInfo;
