export interface AddLocationRequestRoot {
  id: number;
  userId: number;
  warehouseId: number;
  areaId: number;
  zoneId: number;
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
}
