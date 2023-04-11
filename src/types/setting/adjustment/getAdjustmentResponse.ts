export interface IGetAdjustmentResponseRoot {
  statusCode: number;
  data: IGetAdjustmentResponseData[];
  message: string;
  adjustmentReasonId: number;
  totalDocs: number;
  limit: number;
}

export interface IGetAdjustmentResponseData {
  id?: number;
  userId?: number;
  name?: string;
  operations?: string;
}
