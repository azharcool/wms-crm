export interface IGetAllVariantResponseRoot {
  statusCode: number;
  data: IGetAllVariantResponseData[];
  totalDocs: number;
  limit: number;
}

export interface IGetAllVariantResponseData {
  picture: any;
  id?: number;
  userId?: number;
  optionName?: string;
  value?: string;
  variantName?: string;
  sku?: string;
  barcode?: string;
  supplyPrice?: number;
  mrp?: number;
  retailPrice?: number;
  height?: number;
  width?: number;
  length?: number;
  weight?: number;
  crossDocking?: boolean;
  enable?: boolean;
  userName?: string;
  productName?: string;
  bundleName?: string;
  productVariantName?: string;
  bundleId?: number;
  productId?: number;
  productVariantId?: number;
  unitPrice?: number;
  conditionCode?: string;
  discount?: number;
  qty?: number;
  total?: number;
  status?: number;
  createdOn?: string;
  updatedOn?: any;
}
