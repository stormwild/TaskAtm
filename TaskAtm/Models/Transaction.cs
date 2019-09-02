using System;
using System.ComponentModel.DataAnnotations;

namespace TaskAtm.Models
{
  public class Transaction
    {
        public int Id { get; set; }
        [Required]
        public Double Amount { get; set; }
        [Required]
        public string TransactionType { get; set; }
        [Required]
        public string AccountType { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        [Required]
        public int AccountId { get; set; }
    }
}