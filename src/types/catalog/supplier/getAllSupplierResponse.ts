export interface GetAllSupplierRoot {
  statusCode: number;
  data: GetAllSupplierData[];
  totalDocs: number;
  limit: number;
}

export interface GetAllSupplierData {
  id: number;
  userId: number;
  companyName: string;
  userName: string;
  shortName: string;
  email: string;
  phoneNumber: string;
  address: string;
  region: string;
  city: string;
  zipCode: any;
  countryId: number;
  firstName: string;
  lastName: string;
  primaryEmail: string;
  primaryPhone: string;
  image: any;
  status: number;
  createdOn: string;
  updatedOn: any;
}
