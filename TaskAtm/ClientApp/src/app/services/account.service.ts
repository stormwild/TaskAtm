import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAccount } from '../models/iaccount';
import { Observable } from 'rxjs';
import { ITransaction } from '../models/itransaction';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public accounts: IAccount[];
  private baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  allAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(this.baseUrl + 'api/accounts/');
  }

  getAccount(id: number): Observable<IAccount> {
    return this.http.get<IAccount>(this.baseUrl + 'api/accounts/' + id);
  }

  addTransaction(transaction: ITransaction): Observable<ITransaction> {
    return this.http.post<ITransaction>(this.baseUrl + 'api/transactions/', transaction);
  }
}
