export interface IContactAddRoot {
  userId: number;
  firstName: string;
  lastName: string;
  phone: string;
  alternatePhone: string;
  mobile: string;
  email: string;
  secondEmail: string;
  pipelineId: number;
  leadSourceId: number;
  leadStatusId: number;
  referredBy: number;
  entityTypeId: string;
  recordOwnerId: number;
  followUpId: number;
  followUpEmail: string;
  dateContractSent: string | null;
  taxId: number;
  seqStartDate: string | null;
  salesRepId: number;
  companyName: string;
  companyWebsite: string;
  roleId: string;
  contactAddress: IContactAddress;
  cardDetail: ICardDetail;
  contract: IContract;
  myListIds: string;
}

export interface IContactAddress {
  id: number;
  contactId: number;
  googleAddress: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
}

export interface ICardDetail {
  id: number;
  contactId: number;
  name: string;
  type: string;
  cCno: string;
  expDate: string | null;
  security: string;
  address: string;
  dateOFPayment: string | null;
}

export interface IContract {
  id: number;
  contactId: number;
  serviceAgreementMonth: string;
  setupFee: string;
  employeeType: string;
  serviceAgreementDays: string;
  hoursPerDayWork: string;
  virtualEmployees: string;
  rate: number;
  totalHoursPerMonth: number;
  perAppointmentFee: number;
  totalHoursPerCycle: number;
  daysPriorTocancel: number;
}

export interface IContactDetails {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  phone: string;
  alternatePhone: string;
  mobile: string;
  email: string;
  secondEmail: string;
  pipelineId: number;
  pipelineName: string;
  leadSourceId: number;
  leadSourceName: string;
  leadStatusId: number;
  leadStatusName: string;
  referredBy: number;
  entityTypeId: string;
  recordOwnerId: number;
  followUpId: number;
  followUpEmail: string;
  dateContractSent: string;
  taxId: number;
  seqStartDate: string;
  salesRepId: number;
  companyName: string;
  companyWebsite: string;
  roleId: string;
  status: number;
  createdOn: string;
  createdBy: string;
  updatedOn: string;
  updatedBy: string;
  address: any;
  card: any;
  contractDetails: any;
}
