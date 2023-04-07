export interface GetAllLocationResponseRoot {
  statusCode: number;
  data: GetAllLocationResponseData[];
}

export interface GetAllLocationResponseData {
  id: number;
  userId: number;
  userName: string;
  warehouseId: number;
  warehouseName: string;
  areaId: number;
  areaName: string;
  zoneId: number;
  zoneName: string;
  locationLabel: string;
  aisle: string;
  rack: string;
  shelf: string;
  position: string;
  height: number;
  width: number;
  length: number;
  maxLoad: number;
  volume: number;
  locationAlias: string;
  locationType: string;
  operations: string;
  x: number;
  y: number;
  z: number;
  status: number;
  createdOn: string;
  updatedOn: any;
}
