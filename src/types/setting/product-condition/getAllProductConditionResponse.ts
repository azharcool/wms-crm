export interface GetAllProductConditionRoot {
  statusCode: number;
  data: GetAllProductConditionData[];
}

export interface GetAllProductConditionData {
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
