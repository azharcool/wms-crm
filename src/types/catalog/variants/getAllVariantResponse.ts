export interface IGetAllVariantResponseRoot {
  statusCode: number;
  data: IGetAllVariantResponseData[];
  totalDocs: number;
  limit: number;
}

export interface IGetAllVariantResponseData {
  id: number;
  userId: number;
  productId: number;
  optionName: string;
  value: string;
  variantName: string;
  sku: string;
  barcode: string;
  supplyPrice: number;
  mrp: number;
  retailPrice: number;
  height: number;
  width: number;
  length: number;
  weight: number;
  crossDocking: boolean;
  enable: boolean;
  status: number;
  createdOn: string;
  updatedOn: any;
}
