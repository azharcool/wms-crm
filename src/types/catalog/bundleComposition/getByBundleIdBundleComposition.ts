export interface GetByBundleIdBundleCompositionRoot {
  statusCode: number;
  data: GetByBundleIdBundleCompositionData[];
}

export interface GetByBundleIdBundleCompositionData {
  id: number;
  userId: number;
  userName: string;
  productName: string;
  bundleName: string;
  productVariantName: string;
  bundleId: number;
  productId: number;
  productVariantId: number;
  unitPrice: number;
  conditionCode: string;
  discount: number;
  qty: number;
  total: number;
  status: number;
  createdOn: string;
  updatedOn: any;
}
