export interface IEditVariantRequestRoot {
  id?: number;
  userId: number;
  productId?: number;
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
  image?: string[];
  oldImage?: string[];
}
