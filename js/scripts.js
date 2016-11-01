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
    if (acctNumber === this.accounts[i].acctNumber){
      this.accounts[i].balance += amount;
      return this.accounts[i].balance;
    }
    else if(i === this.accounts.length - 1){
      return " no match"
    }
  };
}

Bank.prototype.withdraw = function(acctNumber, amount) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (acctNumber === this.accounts[i].acctNumber){
      this.accounts[i].balance -= amount;
      return this.accounts[i].balance;
    }
    else if(i === this.accounts.length - 1){
      return " no match"
    }
  }
};

var wellBank = new Bank();

$(document).ready(function() {
  $("#new-account").submit(function(event) {

    var userName = $("#new-name").val();
    var userDeposit = parseFloat($("#initial-deposit").val());
    var userAcctNumber = parseInt($("#account-number").val());

    var newAccount = new Account(userName, userDeposit, userAcctNumber);
    wellBank.accounts.push(newAccount);

    $(".balance-output").text(newAccount.balance);

    console.log(wellBank.accounts);
    event.preventDefault();
  });

  $("#money-action").submit(function(event) {


    var userAcctNumber = parseInt($("#account-access").val());
    var userDeposit = parseFloat($("#deposit").val());
    var userWithdraw = parseFloat($("#withdraw").val());
    console.log(userAcctNumber, userDeposit, userWithdraw)
    if(userDeposit){
      var ouputBal = wellBank.deposit(userAcctNumber, userDeposit);
      $(".balance-output").text(ouputBal);
    }

    if(userWithdraw){
      var ouputBal = wellBank.withdraw(userAcctNumber, userWithdraw)
      $(".balance-output").text(ouputBal);
    }
    console.log(wellBank.accounts);

    event.preventDefault();
  })
})
