export interface GetByIdWarehouseAreaRoot {
  statusCode: number;
  data: GetByIdWarehouseAreaData;
}

export interface GetByIdWarehouseAreaData {
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
