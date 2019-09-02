import { ITransaction } from "./itransaction";

export class Transaction implements ITransaction {
  id: number;  amount: number;
  transactionType: string;
  accountType: string;
  created: Date;
  updated: Date;
  accountId: number;
}
