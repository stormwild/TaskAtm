import { IAccount } from './iaccount';
import { ITransaction } from './itransaction';

export class Account implements IAccount {
  id: number;  balance: number;
  transactions: ITransaction[];
  userId: string;
}
