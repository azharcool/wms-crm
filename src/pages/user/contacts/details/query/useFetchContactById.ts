/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchContactById } from "services/contacts.service";
import { QueryKeys } from "utils/QueryKeys";

export interface Address {
  id: number;
  contactId: number;
  googleAddress: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
  status: number;
  createdOn: string;
  createdBy: string;
  country?: string;
  updatedOn?: any;
  updatedBy?: any;
}

export interface Card {
  id: number;
  contactId: number;
  name: string;
  type: number;
  cCno: number;
  expDate: string;
  security: string;
  address: string;
  dateOFPayment: string;
  status: number;
  createdOn: string;
  createdBy?: any;
  updatedOn?: any;
  updatedBy?: any;
}

export interface ContractDetails {
  id: number;
  contactId: number;
  serviceAgreementMonth: number;
  setupFee: number;
  employeeType: number;
  serviceAgreementDays: number;
  hoursPerDayWork: number;
  virtualEmployees: number;
  rate: number;
  totalHoursPerMonth?: any;
  perAppointmentFee?: any;
  totalHoursPerCycle: number;
  daysPriorTocancel: number;
  status: number;
  createdOn: string;
  updatedOn?: any;
}

export interface IContacts {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  phone: string;
  alternatePhone: number;
  mobile: string;
  email: string;
  businessEmail: string;
  pipelineId: number;
  leadSourceId: number;
  leadStatusId: number;
  leadSourceName: string;
  referredBy: number;
  entityTypeId: number;
  recordOwnerId: number;
  followUpId: number;
  followUpEmail: string;
  dateContractSent: string;
  taxId: number;
  seqStartDate: string;
  salesRepId: number;
  companyName: string;
  companyWebsite: string;
  roleId: number;
  status: number;
  createdOn: string;
  createdBy: string;
  updatedOn?: any;
  updatedBy?: any;
  address: Address;
  card: Card;
  contractDetails: ContractDetails;
  leadStatusName: string;
}

export interface IContactsResponse {
  data?: IContacts[];
  statusCode: number;
}

async function getContactById(id: number): Promise<IContactsResponse> {
  try {
    const response: any = await fetchContactById(id);
    if (response.statusCode === 200) {
      return response;
    }
    return {
      statusCode: 404,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchContactById = (id: number) => {
  const cacheKey = [QueryKeys.contacts, id];
  return useQuery(
    cacheKey,
    () => {
      return getContactById(id);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchContactById };
