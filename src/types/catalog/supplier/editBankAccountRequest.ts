export interface EditBankAccountRoot {
  edit: EditBankAccountData[];
}

export interface EditBankAccountData {
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
