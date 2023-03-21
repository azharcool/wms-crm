export interface IGetByIdBrandResponseRoot {
  statusCode: number;
  data: IGetByIdBrandResponseData;
}

export interface IGetByIdBrandResponseData {
  id: number;
  userId: number;
  name: string;
  slug: string;
  fileName: string;
  status: number;
  createdOn: string;
  updatedOn: any;
}
