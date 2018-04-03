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
  $(".toggle").click(function() {
    $("#login").toggle();
    $("#registration").toggle();
  });

  // REGISTRATION
  $("#registration").submit(function(event){
    event.preventDefault();
    console.log(true);
    var newUsernameInput = $("#new-username").val();
    var newNameInput = $("#new-name").val();
    var initialDepositInput = 0;

    if ($("#initial-deposit").val() === "") {
      initialDepositInput = 0;
    } else {
      initialDepositInput = parseInt($("#initial-deposit").val());
    }

    // var Account = findAccount(usernameInput);
    // if (foundAccount === null) {
    //   alert("No account found.");
    // } else {
    var newAccount = new Account($("#new-username").val(), $("#new-name").val(), parseInt($("#initial-deposit").val()));
    console.log(newAccount);
    // accounts.push(newAccount);
  });

  // LOGIN SECTION
  $("#login").submit(function(event){
    event.preventDefault();

    var usernameInput = $("#username").val();
    var foundAccount = findAccount(usernameInput);
    if (foundAccount === null) {
      alert("No account found.");
    } else {
      $("#login").hide();
      $(".transaction").show();
      $(".account-display").show();
      $(".account-name").text(foundAccount[0].name);
      $(".balance-output").text(foundAccount[0].balance);

      // Transactions
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

      // Logout
      $("#logout").click(function() {
        $("#login").show();
        $(".transaction").hide();
        $(".account-display").hide();
        $("form")[0].reset();
      });
    }
  });
});
