import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
  DialogContent,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Slider from "components/layouts/popup-modals/Slider";
import MultipleSelect, { IMenuItems } from "components/multiple-select";
import SecureBlock from "components/secure-block";
import { ACCESS_CODES, SCREEN_CODES } from "config";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useFetchLeadSources } from "pages/admin/settings/screens/lead-source/query/useFetchLeadSources";
import { useFetchLeadStatuses } from "pages/admin/settings/screens/lead-status/query/useFetchLeadStatuses";
import { useFetchPipelines } from "pages/admin/settings/screens/pipelines/query/useFetchPipelines";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCustomFieldsActions } from "redux/custom-fields/CustomFields";
import { isControlAccessible } from "utils";
import useForm, { IAddContact } from "../hooks/useForm";
import { useApiActions } from "../query/useApiAction";
import { useFetchContactsBySearch } from "../query/useFetchContactBySearch";
import { useFetchCustomFields } from "../query/useFetchCustomFields";
import useFetchMyList from "../query/useFetchMyList";
import { useFetchUserRoleByRoleName } from "../query/useFetchUserRoleByRoleName";
import Address from "./contact-form/Address";
import Cc from "./contact-form/Cc";
import ContactInfo from "./contact-form/ContactInfo";
import ContractData from "./contact-form/ContractData";
import CustomSection from "./CustomSection";
import SubHeading from "./SubHeading";

import { IContactAddRoot } from "./types/ContactAddRequest";

interface IAddUser {
  open: boolean;
  handleClose: () => void;
}

function AddUser(props: IAddUser) {
  const { open, handleClose } = props;
  const navigate = useNavigate();
  const { addContactAction } = useApiActions();
  const { setSection } = useCustomFieldsActions();
  const storeSections = useSelector((state: any) => state.customFields);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string[]>([]);
  const decode = useDecodedData();
  const [myLists, setMyLists] = useState<IMenuItems>([]);
  const { data: myListResponse } = useFetchMyList();
  const { data: customFields } = useFetchCustomFields();

  const { data: team, refetch: refetchTeam } = useFetchUserRoleByRoleName(
    "all",
    false,
  );
  const { data: leadStatuses, refetch: refetchLeadStatuses } =
    useFetchLeadStatuses(0, 0, false, false);
  const { data: leadSources, refetch: refetchLeadSource } = useFetchLeadSources(
    0,
    0,
    false,
    false,
  );
  const { data: contacts, refetch: refetchContacts } = useFetchContactsBySearch(
    "",
    false,
  );

  const { data: pipelinesResponse, refetch: refetchPipelines } =
    useFetchPipelines(0, 0, false, false);

  useEffect(() => {
    if (customFields?.data) {
      const customField = customFields?.data?.find(
        (x: any) => x.formName === "Contact",
      );
      const jsonCustomFields =
        customField && JSON.parse(customField?.customField);
      if (jsonCustomFields) {
        setSection({ sections: jsonCustomFields });
      }
    }
  }, [customFields]);

  useEffect(() => {
    if (open) {
      refetchTeam();
      refetchLeadStatuses();
      refetchLeadSource();
      refetchPipelines();
      refetchContacts();
    }
  }, [open]);

  const initialValues: IAddContact = {
    firstName: "",
    lastName: "",
    phone: "",
    mobile: "",
    email: "",
    secondEmail: "",
    companyName: "",
    companyWebsite: "",
    salesRepId: Number(decode?.id),
    entityType: "",
    leadStatus: "",
    pipelineLead: String(pipelinesResponse?.data?.[0]?.id),
    followUp: "",
    recordOwner: "",
    leadSource: "",
    emailFollowUpOptions: "",
    role: "",
    description: "",
    referredBy: "",
    dateContractsSent: "",
    taxId: "",
    seqStartDate: "",
    googleAddress: "",
    street: "",
    state: "",
    city: "",
    zipCode: "",
    serviceAgreementMonth: "",
    setupFree: "",
    employeesType: "",
    serviceAgreementDays: "",
    hoursDayWorked: "",
    virtualEmployees: "",
    rate: "",
    totalHoursMonth: "",
    perApptFee: "",
    totalHoursCycle: "",
    daysPriorCancel: "",
    ccName: "",
    type: "",
    cardNumber: "",
    expiryDate: "",
    security: "",
    address: "",
    dateOfPayment: "",
  };

  const formik = useForm(onSubmit, initialValues);

  const {
    handleSubmit,
    isValid,
    dirty,
    isSubmitting,
    resetForm,
    errors,
    values,
  } = formik;

  useEffect(() => {
    if (myListResponse) {
      const myListRes = myListResponse.data.map((item) => ({
        id: item.id,
        value: item.listName,
      }));
      setMyLists(myListRes);
    }
  }, [myListResponse]);

  async function onSubmit(values: IAddContact) {
    const data: IContactAddRoot = {
      // contact Info
      userId: 0,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      alternatePhone: values.phone,
      mobile: values.mobile,
      email: values.email,
      secondEmail: values.secondEmail,
      companyName: values.companyName,
      companyWebsite: values.companyWebsite,
      salesRepId: Number(values.salesRepId),
      entityTypeId: values.entityType.split(",")[1] || "",
      leadStatusId: values.leadStatus ? Number(values.leadStatus) : 0,
      pipelineId: values.pipelineLead ? Number(values.pipelineLead) : 0,
      followUpId: values.followUp ? Number(values.followUp) : 0,
      recordOwnerId: values.recordOwner ? Number(values.recordOwner) : 0,
      leadSourceId: values.leadSource ? Number(values.leadSource) : 0,
      followUpEmail: values.emailFollowUpOptions.split(",")[1] || "",
      roleId: values.role.split(",")[1] || "",
      // description:
      referredBy: Number(values.referredBy),
      dateContractSent: values.dateContractsSent
        ? new Date(values.dateContractsSent).toJSON() || ""
        : null,
      taxId: Number(values.taxId),
      seqStartDate: values.seqStartDate
        ? new Date(values.seqStartDate).toJSON()
        : null,

      // Address
      contactAddress: {
        id: 0,
        contactId: 0,
        googleAddress: values.googleAddress,
        street: values.street,
        state: values.state,
        city: values.city,
        zipCode: String(values.zipCode),
      },

      // Contract Detail
      contract: {
        id: 0,
        contactId: 0,
        serviceAgreementMonth: values.serviceAgreementMonth.split(",")[1] || "",
        setupFee: values.setupFree,
        employeeType: values.employeesType.split(",")[1] || "",
        serviceAgreementDays: values.serviceAgreementDays.split(",")[1] || "",
        hoursPerDayWork: values.hoursDayWorked.split(",")[1] || "",
        virtualEmployees: values.virtualEmployees.split(",")[1] || "",
        rate: Number(values.rate),
        totalHoursPerMonth: Number(values.totalHoursMonth),
        perAppointmentFee: Number(values.perApptFee),
        totalHoursPerCycle: Number(values.totalHoursCycle),
        daysPriorTocancel: Number(values.daysPriorCancel),
      },

      // Credit Card
      cardDetail: {
        id: 0,
        contactId: 0,
        name: values.ccName,
        type: values.type.split(",")[1] || "",
        cCno: values.cardNumber,
        expDate: values.expiryDate
          ? new Date(values.expiryDate).toJSON() || ""
          : null,
        security: values.security,
        address: values.address,
        dateOFPayment: values.dateOfPayment
          ? new Date(values.dateOfPayment).toJSON() || ""
          : null,
      },

      // myList
      myListIds:
        selectedMenuItem.map((i) => i.split(",")[0] || "").join(", ") || "",
    };

    const response = await addContactAction(data);
    if (response) {
      formik.resetForm();
      handleClose();
      setSelectedMenuItem([]);
    }
  }

  const handleCustomField = () => {
    navigate(`${AppRoutes.SETTINGS}/${AppRoutes.CUSTOM_FIELDS}`);
  };

  return (
    <div>
      <Slider open={open}>
        <DialogTitle>
          <Typography component="h5" variant="h5">
            Add Contact
          </Typography>
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
            <SubHeading title="Contact Info" />

            <Stack>
              <MultipleSelect
                menuItems={myLists}
                placeholder="My List"
                selectedMenuItem={selectedMenuItem}
                onChangeHandler={(event: string[]) =>
                  setSelectedMenuItem(event)
                }
              />
            </Stack>

            <ContactInfo
              contacts={contacts?.data || []}
              formik={formik}
              leadSourcesData={leadSources?.data || []}
              leadStatusesData={leadStatuses?.data || []}
              pipelinesData={pipelinesResponse?.data || []}
              team={team?.data || []}
            />

            <SubHeading title="Address" />
            <Address formik={formik} />

            <SubHeading title="Contract Data" />
            <ContractData formik={formik} />

            <SubHeading title="Credit Card/Debit Card" />
            <Cc formik={formik} />

            {storeSections?.sections?.map((item: any) => {
              return <CustomSection section={item} />;
            })}
            <SecureBlock
              accessible={isControlAccessible(
                ACCESS_CODES.CUSTOM_FIELD,
                SCREEN_CODES.CONTACTS,
              )}
            >
              <Box
                sx={{
                  mt: 2,
                }}
              >
                <Button
                  startIcon={<AddCircleIcon />}
                  style={{ padding: "0.5rem 1rem" }}
                  variant="contained"
                  onClick={handleCustomField}
                >
                  Custom Fields
                </Button>
              </Box>
            </SecureBlock>
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
              // disabled={!(isValid && dirty)}
              startIcon={<AddCircleIcon />}
              style={{ padding: "0.5rem 1rem", minWidth: 150 }}
              variant="contained"
              onClick={() => handleSubmit()}
            >
              {isSubmitting ? (
                <CircularProgress color="warning" size={12} />
              ) : (
                "Add New Contact"
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
export default AddUser;
