export type AddShippingAddressRoot = AddShippingAddressRootData[];

export interface AddShippingAddressRootData {
  id?: number;
  userId?: number;
  supplierId?: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: number;
  createdOn?: string;
  status?: number;
  updatedOn?: string;
}
