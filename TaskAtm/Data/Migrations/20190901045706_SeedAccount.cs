using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaskAtm.Data.Migrations
{
    public partial class SeedAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "Id", "Balance", "UserId" },
                values: new object[] { 1, 100m, "971d3327-c4c8-44bf-940c-be3ee9ef4f97" });

            migrationBuilder.InsertData(
                table: "Transactions",
                columns: new[] { "Id", "AccountId", "Amount", "Created", "Updated" },
                values: new object[] { 1, 1, 100.0, new DateTime(2019, 9, 1, 4, 57, 6, 363, DateTimeKind.Utc).AddTicks(6770), new DateTime(2019, 9, 1, 4, 57, 6, 363, DateTimeKind.Utc).AddTicks(7370) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Transactions",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
