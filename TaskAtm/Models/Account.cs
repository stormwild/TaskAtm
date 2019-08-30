using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskAtm.Models
{
    public class Account
    {
        public int Id { get; set; }
        public decimal Balance { get; set; }
        
        [Key, ForeignKey("ApplicationUser")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}