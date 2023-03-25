export interface GetByIdZoneResponseRoot {
  statusCode: number;
  data: GetByIdResponseData;
}

export interface GetByIdResponseData {
  id: number;
  userId: number;
  areaId: number;
  warehouseId: number;
  label: string;
  name: string;
  areaName: string;
  userName: string;
  warehouseName: string;
  status: number;
  createdOn: string;
  updatedOn: any;
}
