export type AddBillingAddressRoot = AddBillingAddressRootData[];

export interface AddBillingAddressRootData {
  id?: number;
  userId?: number;
  supplierId?: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: number;
}
