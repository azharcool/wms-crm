export interface IGetByIdProductRoot {
  statusCode: number;
  data: IGetByIdProductData;
}

export interface IGetByIdProductData {
  id: number;
  userId: number;
  name: string;
  userName: string;
  type: string;
  description: string;
  supplyPrice: number;
  maxRetailPrice: any;
  retailPrice: any;
  sku: string;
  barcode: string;
  barcodeStrategy: string;
  quantity: number;
  uom: any;
  supplierId: any;
  categoryId: any;
  categoryName: any;
  brandName: any;
  brandId: any;
  tags: any;
  height: any;
  width: any;
  length: any;
  weight: any;
  strategy: string;
  expiryDays: any;
  trackSerialNumbers: any;
  trackExpiryDates: boolean;
  syncSupplyPrice: any;
  status: number;
  createdOn: string;
  updatedOn: any;
  picture: Picture[];
}

export interface Picture {
  id: number;
  userId: number;
  userName: string;
  productId: number;
  atachment: string;
  variantId: any;
  bundleId: any;
  categoryId: any;
  createdOn: string;
}
