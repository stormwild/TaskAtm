using TaskAtm.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskAtm.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        // protected override void OnModelCreating(ModelBuilder builder) {
        //     base.OnModelCreating(builder);
        //     // builder.Entity<Account>().HasData(new Account
        //     // {
        //     //     Id = 1,
        //     //     Balance = 100,
        //     //     UserId = "971d3327-c4c8-44bf-940c-be3ee9ef4f97"
        //     // });

        //     // builder.Entity<Transaction>().HasData(new Transaction
        //     // {
        //     //     Id = 1,
        //     //     Amount = 100.00,
        //     //     Created = DateTime.UtcNow,
        //     //     Updated = DateTime.UtcNow,
        //     //     AccountId = 1
        //     // });
        // }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
    }
}
