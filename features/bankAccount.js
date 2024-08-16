"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, accountHolder, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getAccountHolder() {
        return this.accountHolder;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(newBalance) {
        this.balance = newBalance;
    }
}
exports.BankAccount = BankAccount;
