/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchContactsSearch } from "services/contacts.service";
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
}

export interface IData {
  data: IContacts[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  statusCode: number;
}

export interface IContactsResponse {
  data: IContacts[];
  statusCode: number;
  totalDocs: 0;
  limit: 10;
  totalPages: 0;
  page: 0;
}

async function getContacts(query: string): Promise<IContactsResponse> {
  try {
    const response: any = await fetchContactsSearch();
    if (response.statusCode === 200) {
      return response;
    }
    return {
      data: [],
      totalDocs: 0,
      statusCode: 404,
      limit: 10,
      totalPages: 0,
      page: 0,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchContactsBySearch = (query = "", enabled = true) => {
  const cacheKey = [QueryKeys.contactsBySearch];
  return useQuery(
    cacheKey,
    () => {
      return getContacts(query);
    },
    {
      enabled,
    },
  );
};

export { useFetchContactsBySearch };
