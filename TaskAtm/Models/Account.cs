using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace TaskAtm.Models
{
    public class Account
    {
        public int Id { get; set; }
        public decimal Balance { get; set; }
        public virtual ICollection<Transaction> Transactions { get; set; }
        public string UserId { get; set; }
        public void UpdateBalance() {
            var totalDebits = this.Transactions.Where(t => t.TransactionType.Equals("DEBIT")).Select(t => t.Amount).Sum();
            var totalCredits = this.Transactions.Where(t => t.TransactionType.Equals("CREDIT")).Select(t => t.Amount).Sum();
            this.Balance = Convert.ToDecimal(totalDebits) - Convert.ToDecimal(totalCredits);
        }
    }
}