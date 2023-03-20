export interface IGetByIdCategoryRoot {
  statusCode: number;
  data: IGetByIdCategoryData;
}

export interface IGetByIdCategoryData {
  id: number;
  userId: number;
  userName: string;
  parentCategoryId: number;
  position: number;
  tag: string;
  name: string;
  slug: string;
  detail: string;
  status: number;
  createdOn: string;
  updatedOn: any;
  picture: any;
}
