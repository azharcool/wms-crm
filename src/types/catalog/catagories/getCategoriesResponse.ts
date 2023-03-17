export interface IGetCategoriesResponseRoot {
  statusCode: number;
  data: any[];
  totalDocs: number;
  limit: number;
}

export interface IGetCategoriesResponseData {
  id: number;
  userId: number;
  userName: string;
  parentCategoryId?: number;
  position?: number;
  tag?: string;
  name: string;
  slug?: string;
  detail?: string;
  status?: number;
  createdOn: string;
  updatedOn: any;
  picture: any[];
}
