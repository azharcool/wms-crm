export interface GetAllPaginationUnitResponseRoot {
  statusCode: number;
  data: GetAllPaginationUnitResponseData[];
  totalDocs: number;
}

export interface GetAllPaginationUnitResponseData {
  id: number;
  userId: number;
  userName: string;
  variantId: number;
  variantName: string;
  sku: string;
  unitNumber: string;
  oldQuantity: number;
  newQuantity: number;
  sa: string;
  destination: string;
  serialNo: string;
  batchNumber: string;
  expiryDate: string;
  price: number;
  currency: string;
  companyId: number;
  conditionCodeId: number;
  conditionName: any;
  containerNumber: string;
  warehouseId: number;
  warehouseName: string;
  locationId: number;
  locationName: string;
  status: number;
  createdOn: string;
  updatedOn: string;
  available: string;
}
