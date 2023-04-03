export interface GetByIdProductConditionResponseRoot {
  statusCode: number;
  data: GetByIdProductConditionData;
}

export interface GetByIdProductConditionData {
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
