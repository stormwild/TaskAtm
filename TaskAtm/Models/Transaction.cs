using System;

namespace TaskAtm.Models
{
  public class Transaction
    {
        public int Id { get; set; }
        public Double Amount { get; set; }
        public string TransactionType { get; set; }
        public string AccountType { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public int AccountId { get; set; }
    }
}