import { ITransaction } from './itransaction';

export interface IAccount {
  id: number;
  balance: number;
  transactions: ITransaction[];
  userId: string;
}

