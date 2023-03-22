export interface IAddVariantRequestRoot {
  productId?: number;
  variantt?: Variantt[];
  option?: Option[];
}

export interface Variantt {
  id?: number;
  userId?: number;
  productId?: number;
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
}

export interface Option {
  id?: number;
  userId?: number;
  productId?: number;
  variantId?: number;
  optionName?: string;
  value?: string;
}
