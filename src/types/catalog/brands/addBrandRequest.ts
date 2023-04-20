export interface IAddBrandRequestRoot {
  id?: number;
  userId?: number;
  name?: string;
  slug?: string;
  image?: string | undefined | false;
  fileUrl?: string | undefined | false;
}
