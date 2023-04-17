export interface EditBillingRoot {
  editBilling: EditBillingData[];
}

export interface EditBillingData {
  id?: number;
  userId?: number;
  supplierId?: number;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
}
