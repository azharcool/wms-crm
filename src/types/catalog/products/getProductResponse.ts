export interface IGetProductResponseRoot {
  statusCode: number;
  data: IGetProductResponseData[];
  totalDocs: number;
  limit: number;
}

export interface IGetProductResponseData {
  id: number;
  userId: number;
  name: string;
  type?: string;
  description: string;
  supplyPrice?: number;
  maxRetailPrice?: number;
  retailPrice?: number;
  sku: string;
  barcode: string;
  barcodeStrategy?: string;
  quantity?: number;
  uom?: number;
  supplierId?: number;
  categoryId: number;
  brandId: number;
  tags?: string;
  height?: number;
  width?: number;
  length?: number;
  weight?: number;
  strategy: string;
  expiryDays?: number;
  trackSerialNumbers?: boolean;
  trackExpiryDates?: boolean;
  syncSupplyPrice?: boolean;
  variantCount: any;
  status: number;
  createdOn: string;
  updatedOn: any;
  picture: any[];
}
