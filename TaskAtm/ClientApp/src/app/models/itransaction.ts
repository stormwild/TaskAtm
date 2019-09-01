export interface ITransaction {
  id: number;
  amount: number;
  transactionType: string;
  accountType: string;
  created: Date;
  updated: Date;
  accountId: number;
}
