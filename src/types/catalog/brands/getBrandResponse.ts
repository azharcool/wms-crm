export interface IGetBrandResponseRoot {
  message: string;
  statusCode: number;
  data: IGetBrandResponseData[];
  totalDocs: number;
}

export interface IGetBrandResponseData {
  length: number;
  id: number;
  userId: number;
  name: string;
  slug: string;
  fileUrl: string;
  status: number;
  createdOn: string;
  updatedOn: any;
}
