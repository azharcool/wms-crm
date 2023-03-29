export interface AddBundlCompositionRequestRoot {
  bundleComposition?: BundleComposition[];
}

export interface BundleComposition {
  id?: number;
  userId?: number;
  bundleId?: number;
  productId?: number;
  productVariantId?: number;
  unitPrice?: number;
  conditionCode?: string;
  discount?: number;
  qty?: number;
  total?: number;
}
