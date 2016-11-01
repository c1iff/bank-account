function Account(customerName, balance, acctNumber) {
  this.customerName = customerName;
  this.balance = balance;
  this.acctNumber = acctNumber;
}

function Bank(account) {
  this.accounts = [];
}


Bank.prototype.deposit = function(acctNumber, amount) {

  for (i = 0; i < this.accounts.length; i++) {
    if (acctNumber === this.accounts[i].acctNumber)
      console.log(this.accounts[i].customerName)
      //this.account[i].balance
  }

  //account[index].balance += amount;
};

Bank.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

var wellBank = new Bank();

$(document).ready(function() {
  $("#new-account").submit(function(event) {

    var userName = $("#new-name").val();
    var userDeposit = parseInt($("#initial-deposit").val());
    var userAcctNumber = parseInt($("#account-number").val());

    var newAccount = new Account(userName, userDeposit, userAcctNumber);



    wellBank.accounts.push(newAccount);

    console.log(wellBank.accounts);


    event.preventDefault();
  })
  $("#money-action").submit(function(event) {


    var userAcctNumber = parseInt($("#account-access").val());
    var userDeposit = parseInt($("#deposit").val());

    wellBank.deposit(userAcctNumber, userDeposit);


    event.preventDefault();
  })
})
