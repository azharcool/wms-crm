export interface IGetBundleResponseRoot {
  statusCode: number;
  data: IBundle[];
  totalDocs: number;
  limit: number;
}

export interface IGetByIdBundleResponseRoot {
  statusCode: number;
  data: IBundle;
  totalDocs: number;
  limit: number;
}
export interface IBundle {
  id: number;
  userId: number;
  userName: string;
  name: string;
  description: string;
  sku: string;
  categoryName: string;
  brandName: string;
  barcode: string;
  categoryId: number;
  brandId: number;
  tag: any;
  status: number;
  createdOn: string;
  updatedOn: any;
  picture: IPicture[];
}

export interface IPicture {
  id: number;
  userId: number;
  userName: string;
  categoryName: any;
  productId: number;
  variantId: any;
  bundleId: any;
  categoryId: any;
  atachment: string;
  createdOn: string;
}
