export interface IGetBrandResponseRoot {
  message: string;
  statusCode: any;
  data: IGetBrandResponseData[];
  totalDocs: number;
}

export interface IGetBrandResponseData {
  id: number;
  userId: number;
  name: string;
  slug: string;
  fileName: string;
  status: number;
  createdOn: string;
  updatedOn: any;
}