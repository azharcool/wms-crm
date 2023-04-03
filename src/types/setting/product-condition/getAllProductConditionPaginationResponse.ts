export interface GetAllProductConditionPaginationResponseRoot {
  statusCode: number;
  data: GetAllProductConditionPaginationResponseData[];
  totalDocs: number;
}

export interface GetAllProductConditionPaginationResponseData {
  id: number;
  userId: number;
  code: string;
  condition: string;
  grade: string;
  warranty: number;
  color: string;
  description: string;
  isDefault: boolean;
  image: string;
  createdOn: string;
  updatedOn: any;
  status: number;
}
