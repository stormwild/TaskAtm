-- SQLite
-- SELECT * FROM AspNetUsers;

SELECT a.Id, a.Balance, t.Amount, t.TransactionType, t.AccountType 
FROM Accounts a
INNER JOIN Transactions t
ON a.Id = t.AccountId;

-- SELECT * FROM Transactions;

