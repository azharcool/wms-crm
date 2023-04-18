export type AddBankAccountRoot = AddBabkAccountData[];

export interface AddBabkAccountData {
  id?: number;
  userId?: number;
  supplierId?: number;
  bankName?: string;
  bankBranch?: string;
  bankCode?: string;
  bankSwift?: string;
  accountHolder?: string;
  accountNumber?: string;
}
