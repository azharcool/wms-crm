export interface GetAllWarehouseAreaResponseRoot {
  statusCode: number;
  data: GetAllWarehouseAreaResponseData[];
  totalDocs: number;
}

export interface GetAllWarehouseAreaResponseData {
  id: number;
  userId: number;
  warehouseId: number;
  warehouseName: string;
  userName: string;
  label: string;
  name: string;
  status: number;
  createdOn: string;
  updatedOn: any;
}
