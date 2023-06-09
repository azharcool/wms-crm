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
export interface IDeleteBundleByIdResponseRoot {
  statusCode: 200;
  message: string;
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
  tag: string;
  status: number;
  createdOn: string;
  updatedOn: any;
  picture: IPicture[];
}
export interface IBundleDetails {
  id: number
  userId: number
  userName: string
  name: string
  description: string
  sku: string
  barcode: string
  categoryId: any
  categoryName: any
  brandName: any
  brandId: any
  tag: any
  status: number
  createdOn: string
  updatedOn: any
  picture: any[]
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
