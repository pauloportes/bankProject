"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bankAccount_1 = require("../features/bankAccount");
const bankService_1 = require("../features/bankService");
// Create a new bank account
const myAccount = new bankAccount_1.BankAccount("123456789", "John Doe", 500);
// Create a BankService instance to manage transactions
const bankService = new bankService_1.BankService(myAccount);
// Check account details
bankService.getAccountDetails();
// Deposit money
bankService.deposit(200);
// Withdraw money
bankService.withdraw(100);
// Try to withdraw more money than the balance
bankService.withdraw(700);
// Check the balance
console.log(`Final Balance: $${myAccount.getBalance()}`);
