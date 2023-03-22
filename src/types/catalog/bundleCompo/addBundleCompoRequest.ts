export interface IAddCompositionbundleRootRequest {
  bundleComposition: Compositionbundle[]
  }
  
  export interface Compositionbundle {
    id?: number
    userId?: number
    bundleId?: number
    productId?: number
    productVariantId?: number
    unitPrice?: number
    conditionCode?: string
    discount?: number
    qty?: number
    total?: number
  }
  