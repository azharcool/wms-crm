export interface IGetByIdVariantRoot {
  statusCode: number;
  data: IGetByIdVariantData;
}

export interface IGetByIdVariantData {
  id: number;
  userId: number;
  productId: number;
  userName: string;
  productName: string;
  optionName: string;
  value: string;
  variantName: string;
  sku: string;
  barcode: string;
  supplyPrice: number;
  mrp: number;
  retailPrice: number;
  height: any;
  width: any;
  length: any;
  weight: any;
  crossDocking: boolean;
  enable: boolean;
  option: IOption[];
  status: number;
  createdOn: any;
  updatedOn: any;
}

export interface IOption {
  id: number;
  userId: number;
  productId: number;
  variantId: number;
  optionName: string;
  value: string;
}
