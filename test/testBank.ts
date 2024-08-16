import { BankAccount } from "../features/bankAccount";
import { BankService } from "../features/bankService";


// Create a new bank account
const myAccount = new BankAccount("123456789", "John Doe", 500);

// Create a BankService instance to manage transactions
const bankService = new BankService(myAccount);

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