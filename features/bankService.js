"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankService = void 0;
class BankService {
    constructor(account) {
        this.account = account;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        const newBalance = this.account.getBalance() + amount;
        this.account.setBalance(newBalance);
        console.log(`Successfully deposited $${amount}. New balance is $${this.account.getBalance()}.`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        if (amount > this.account.getBalance()) {
            console.log("Insufficient funds for this withdrawal.");
            return;
        }
        const newBalance = this.account.getBalance() - amount;
        this.account.setBalance(newBalance);
        console.log(`Successfully withdrew $${amount}. New balance is $${this.account.getBalance()}.`);
    }
    getAccountDetails() {
        console.log(`Account Number: ${this.account.getAccountNumber()}`);
        console.log(`Account Holder: ${this.account.getAccountHolder()}`);
        console.log(`Balance: $${this.account.getBalance()}`);
    }
}
exports.BankService = BankService;
