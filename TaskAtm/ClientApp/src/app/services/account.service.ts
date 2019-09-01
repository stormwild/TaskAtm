import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAccount } from '../models/iaccount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public _http: HttpClient;
  public _baseUrl: string;

  public accounts: IAccount[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  allAccounts(): Observable<IAccount[]> {
    return this._http.get<IAccount[]>(this._baseUrl + 'api/accounts/');
  }

  getAccount(id: number): Observable<IAccount> {
    return this._http.get<IAccount>(this._baseUrl + 'api/accounts/' + id);
  }
}
