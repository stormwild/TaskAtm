import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../services/account.service';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAccount } from '../models/iaccount';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public email: string;
  public account: IAccount;

  constructor(private accountService: AccountService, private authorizeService: AuthorizeService) {  }

  ngOnInit() {
    this.loadAccount();
  }

  loadAccount() {
    this.authorizeService.getUser().pipe(map(u => u && u.name)).subscribe((data) => {
      this.email = data;
    });

    this.accountService.getAccount(1).subscribe((result: IAccount) => {
      this.account = result;
    });
  }

}



