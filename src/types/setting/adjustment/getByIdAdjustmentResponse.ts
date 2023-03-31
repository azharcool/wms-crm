export interface GetByIdAdjustmentRoot {
  statusCode: number;
  data: GetByIdAdjustmentData[];
  message: string;
  adjustmentReasonId: number;
}

export interface GetByIdAdjustmentData {
  id?: number;
  userId?: number;
  name?: string;
  operations?: string;
}
