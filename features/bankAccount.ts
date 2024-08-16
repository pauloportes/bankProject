export class BankAccount {
    private accountNumber: string;
    private accountHolder: string;
    private balance: number;

    constructor(accountNumber: string, accountHolder: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }

    public getAccountHolder(): string {
        return this.accountHolder;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(newBalance: number): void {
        this.balance = newBalance;
    }
}