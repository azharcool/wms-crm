export interface GetByIdSupplierResponseRoot {
  statusCode: number;
  data: GetByIdSupplierResponseData;
}

export interface GetByIdSupplierResponseData {
  id: number;
  userId: number;
  userName: string;
  companyName: string;
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
  image: string;
  status: number;
  createdOn: string;
  updatedOn: any;
}
