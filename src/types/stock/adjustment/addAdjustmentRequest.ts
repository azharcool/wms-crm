export interface AddAdjustmentRequestRoot {
  id?: number;
  userId?: number;
  warehosuseId?: number;
  adjustmentReasonId?: number;
  referenceId?: number;
  companyId?: number;
  sa?: string;
  lineItem?: number;
  qtyChange?: number;
  notes?: string;
  totalQuantity?: number;
  totalValue?: number;
  stock?: Stock[];
}

export interface Stock {
  id?: number;
  userId?: number;
  adjustmentId?: number;
  productId?: number;
  variantId?: number;
  image?: string;
  sku?: string;
  barcode?: string;
  optionName?: string;
  value?: string;
  barcodeStrategy?: string;
  unitCost?: number;
  unitNumber?: string;
  serialNumber?: string;
  batchNumber?: string;
  quantity?: number;
  conditionCodeId?: number;
  containerNumber?: string;
  expiryDate?: string;
  locationId?: number;
}
