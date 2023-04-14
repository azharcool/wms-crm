export interface GetAllShippingAddressRoot {
  statusCode: number;
  data: GetAllShippingAddressData[];
}

export interface GetAllShippingAddressData {
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
