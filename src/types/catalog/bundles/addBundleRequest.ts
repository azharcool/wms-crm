export interface IAddBundleRequestRoot {
  id?: number;
  userId?: number;
  name?: string;
  description?: string;
  sku?: string;
  barcode?: string;
  categoryId?: number;
  brandId?: number;
  tag?: string;
  image?: (string | undefined)[];
  oldImage?: string[];
  fileUrl?: string;
}
