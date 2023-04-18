export interface GetAllBankAccountRoot {
  statusCode: number;
  data: GetAllBankAccountData[];
}

export interface GetAllBankAccountData {
  id: number;
  userId: number;
  supplierId: number;
  bankName: string;
  bankBranch: string;
  bankCode: string;
  bankSwift: string;
  accountHolder: string;
  accountNumber: string;
  status: number;
  createdOn: string;
  updatedOn: any;
}
