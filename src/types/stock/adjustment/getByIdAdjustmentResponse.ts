export interface GetByIdAddjustmentRoot {
  statusCode: number;
  data: GetByIdAddjustmentData;
}

export interface GetByIdAddjustmentData {
  id: number;
  userId: number;
  userName: string;
  warehouseId: number;
  warehouseName: string;
  adjustmentReasonId: number;
  reason: string;
  referenceId: number;
  companyId: number;
  companyName: any;
  sa: string;
  lineItem: number;
  qtyChange: number;
  notes: string;
  totalQuantity: number;
  totalValue: number;
  status: number;
  createdOn: string;
  updatedOn: any;
  stockDetails: StockDetail[];
}

export interface StockDetail {
  id: number;
  userId: number;
  adjustmentId: number;
  productId: number;
  variantId: number;
  image: string;
  sku: string;
  barcode: string;
  optionName: string;
  value: string;
  barcodeStrategy: string;
  unitCost: number;
  unitNumber: string;
  serialNumber: string;
  batchNumber: string;
  quantity: number;
  conditionCodeId: number;
  containerNumber: string;
  expiryDate: string;
  locationId: number;
  status: number;
  createdOn: string;
  updatedOn: any;
}
