export interface EditCategoryRequestRoot {
  id?: number;
  userId?: number;
  parentCategoryId?: number;
  position?: number;
  tag?: string;
  name?: string;
  slug?: string;
  detail?: string;
  status?: number;
  image?: string[];
}
