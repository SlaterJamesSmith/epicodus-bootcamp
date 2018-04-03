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

var mike2 = {
  username: "mike2",
  name: "Mike Chu 2",
  balance: 0
};

var accounts = [mike, mike2];

function findAccount(username) {
  var accountIndex;
  accounts.forEach(function(account) {
    if (username === account.username) {
      accountIndex = accounts.indexOf(account);
    }
  });
  return accountIndex;
}

$(document).ready(function() {

  function accessAccount(accountIndex) {
    $(".transaction").show();
    $(".account-display").show();

    $(".account-name").text(accounts[accountIndex].name);
    $(".balance-output").text(accounts[accountIndex].balance);

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

      accounts[accountIndex].balance += deposit;
      accounts[accountIndex].balance -= withdraw;
      $(".balance-output").text(accounts[accountIndex].balance);
    });

    // Logout
    $("#logout").click(function() {
      $("#login").show();
      $(".transaction").hide();
      $(".account-display").hide();
      $("form")[0].reset();
    });
  }

  $(".toggle").click(function() {
    $("#login").toggle();
    $("#registration").toggle();
  });

  // REGISTRATION
  $("#registration").submit(function(event){
    event.preventDefault();

    var newUsernameInput = $("#new-username").val();
    var newNameInput = $("#new-name").val();
    var initialDepositInput = 0;

    if ($("#initial-deposit").val() === "") {
      initialDepositInput = 0;
    } else {
      initialDepositInput = parseInt($("#initial-deposit").val());
    }

    if (findAccount(newUsernameInput) !== undefined) {
      alert("Username already exists.");
    } else {

      var newAccount = new Account(newUsernameInput, newNameInput, initialDepositInput);

      accounts.push(newAccount);

      $("#registration").hide();
      accessAccount(findAccount(newUsernameInput));
    }
  });

  // LOGIN SECTION
  $("#login").submit(function(event){
    event.preventDefault();

    var usernameInput = $("#username").val();
    var accounIndex = findAccount(usernameInput);
    if (accounIndex === undefined) {
      alert("No account found.");
    } else {
      $("#login").hide();
      accessAccount(accounIndex);

      // $(".transaction").show();
      // $(".account-display").show();
      // $(".account-name").text(foundAccount[0].name);
      // $(".balance-output").text(foundAccount[0].balance);
      //
      // // Transactions
      // $(".transaction button").click(function() {
      //   var deposit = 0;
      //   var withdraw = 0;
      //
      //   if ($("#deposit").val() === "") {
      //     deposit = 0;
      //   } else {
      //     deposit = parseInt($("#deposit").val());
      //   }
      //
      //   if ($("#withdraw").val() === "") {
      //     withdraw = 0;
      //   } else {
      //     withdraw = parseInt($("#withdraw").val());
      //   }
      //
      //   foundAccount[0].balance += deposit;
      //   foundAccount[0].balance -= withdraw;
      //   $(".balance-output").text(foundAccount[0].balance);
      // });
      //
      // // Logout
      // $("#logout").click(function() {
      //   $("#login").hide();
      //   $(".transaction").hide();
      //   $(".account-display").hide();
      //   $("form")[0].reset();
      // });
    }
  });
});
