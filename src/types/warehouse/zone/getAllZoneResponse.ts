export interface GetAllZoneResponseRoot {
  statusCode: number;
  data: GetAllZoneResponseData[];
  totalDocs: number;
}

export interface GetAllZoneResponseData {
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
