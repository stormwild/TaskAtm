import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../services/account.service';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAccount } from '../models/iaccount';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { appTransactionTypeValidator } from '../validators/transaction-type-validator.directive';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public email: string;
  public account: IAccount;
  public form: FormGroup;

  constructor(
    private accountService: AccountService,
    private authorizeService: AuthorizeService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      amount: [0.00, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+(\.\d{1,2})?$/)
      ])],
      transactionType: ['DEBIT']
    });
  }

  ngOnInit() {
    this.loadAccount();
  }

  loadAccount() {
    this.authorizeService.getUser().pipe(map(u => u && u.name)).subscribe((data) => {
      this.email = data;
    });

    this.accountService.getAccount(1).subscribe((result: IAccount) => {
      this.account = result;
      this.form.setValidators(appTransactionTypeValidator(this.account.balance));
    });
  }

  onSubmit() {

  }

  get amount() { return this.form.get('amount'); }

}



