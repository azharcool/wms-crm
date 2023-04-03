export interface IAddProductConditionRequestRoot {
  id?: number;
  userId?: number;
  code?: string;
  condition?: string;
  grade?: string;
  warranty?: number;
  color?: string;
  description?: string;
  isDefault?: boolean;
  image?: string;
}
