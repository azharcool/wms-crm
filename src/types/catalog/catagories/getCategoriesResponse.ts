export interface IGetCategoriesResponseRoot {
  statusCode: number;
  data: any[];
  totalDocs: number;
  limit: number;
}

export interface IGetCategoriesResponseData {
  id: number;
  userId: number;
  name: string;
  parentCategoryId: number;
  parentCategoryName?: string;
  position: number;
  tag: string;
  slug: string;
  detail: string;
  status: number;
  createdOn: string;
  updatedOn?: string;
  picture?: Picture;
}

export interface Picture {
  id: number;
  userId: number;
  userName: any;
  productId?: number;
  atachment: string;
  variantId: any;
  bundleId?: number;
  categoryId: number;
  createdOn: string;
}
