function Account(username, name, balance){
  this.username = username;
  this.name = name;
  this.balance = balance;
}

var mike = {
  username: "mike",
  name: "Mike Chu",
  balance: 0
};


var accounts = [mike];

function findAccount(username) {
  var targetAccount = [];
  accounts.forEach(function(account) {
    if (username === account.username) {
      targetAccount.push(account);
    } else {
      targetAccount = null;
    }
  });
  return targetAccount;
}

$(document).ready(function() {
  $("#login").submit(function(event){
    event.preventDefault();
    var usernameInput = $("#username").val();
    var initialDepositInput = 0;

    var foundAccount = findAccount(usernameInput);
    if (foundAccount === null) {
      alert("No account found.");
    } else {
      if ($("#initial-deposit").val() === "") {
        initialDepositInput = 0;
      } else {
        initialDepositInput = parseInt($("#initial-deposit").val());
      }
      $("#login").hide();
      $(".transaction").show();
      $(".account-display").show();
      $(".account-name").text(foundAccount[0].name);
      foundAccount[0].balance += initialDepositInput;
      $(".balance-output").text(foundAccount[0].balance);

      $(".transaction button").click(function() {
        var deposit = 0;
        var withdraw = 0;

        if ($("#deposit").val() === "") {
          deposit = 0;
        } else {
          deposit = parseInt($("#deposit").val());
        }

        if ($("#withdraw").val() === "") {
          withdraw = 0;
        } else {
          withdraw = parseInt($("#withdraw").val());
        }

        foundAccount[0].balance += deposit;
        foundAccount[0].balance -= withdraw;
        $(".balance-output").text(foundAccount[0].balance);
      });

      $("#logout").click(function() {
        $("#login").show();
        $(".transaction").hide();
        $(".account-display").hide();
        $("form")[0].reset();
      });
    }
  });
});
