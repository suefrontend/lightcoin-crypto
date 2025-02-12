let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Deposit extends Transaction {
  // Update the balance in the account
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  // Pass in the account that the withdrawal this for

  // Update the balance in the account
  get value() {
    return -this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("billybob");

console.log("Starting Balance:", myAccount.balance);

const t1 = new Deposit(120.0, myAccount);
t1.commit();

const t2 = new Withdrawal(50.0, myAccount);
t2.commit();

console.log("Ending Balance:", myAccount.balance);
