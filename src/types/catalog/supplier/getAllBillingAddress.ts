export interface GetAllBillingAddressRoot {
  statusCode: number;
  data: GetAllBillingAddress[];
}

export interface GetAllBillingAddress {
  id: number;
  userId: number;
  supplierId: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  country: number;
  createdOn: string;
  status: number;
  updatedOn: any;
}
