import { BankAccount } from "./bankAccount";

export class BankService {
    private account: BankAccount;

    constructor(account: BankAccount) {
        this.account = account;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        const newBalance = this.account.getBalance() + amount;
        this.account.setBalance(newBalance);
        console.log(`Successfully deposited $${amount}. New balance is $${this.account.getBalance()}.`);
    }

    public withdraw(amount: number): void {
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

    public getAccountDetails(): void {
        console.log(`Account Number: ${this.account.getAccountNumber()}`);
        console.log(`Account Holder: ${this.account.getAccountHolder()}`);
        console.log(`Balance: $${this.account.getBalance()}`);
    }
}