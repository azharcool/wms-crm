export interface GetVariantByIdRoot {
  statusCode: number;
  data: GetVariantByIdData;
}

export interface GetVariantByIdData {
  id: number;
  userId: number;
  productId: number;
  userName: string;
  productName: any;
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
