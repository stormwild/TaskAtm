import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export function appTransactionTypeValidator(balance: number): ValidatorFn {
  return (fg: FormGroup): ValidationErrors | null => {
    const amount = fg.get('amount');
    const transactionType = fg.get('transactionType');

    return amount.value > balance && transactionType.value === 'CREDIT' ? { 'appTransactionTypeValidator': true } : null;
  };
}


@Directive({
  selector: '[appTransactionTypeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: TransactionTypeValidatorDirective, multi: true}]
})
export class TransactionTypeValidatorDirective implements Validator {
  @Input('appTransactionTypeValidator') balance: number;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.balance ? appTransactionTypeValidator(this.balance)(control) : null;
  }

}
