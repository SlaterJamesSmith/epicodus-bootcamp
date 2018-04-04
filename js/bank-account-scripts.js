function Account(username, password, name, balance) {
  this.username = username;
  this.password = password
  this.name = name;
  this.balance = balance;
};

var mike = new Account ("mike", "mike", "Mike Chu", 100);
var ami = new Account ("ami", "ami", "Ami Cooper", 200);

var registeredAccounts = [mike, ami];

function checkNewUsername(username) {
  var isUnique = true;
  registeredAccounts.forEach(function(account) {
    if (username === account.username) {
      isUnique = false;
    }
  });
  return isUnique;
};

function checkLoginCredentials(username, password) {
  var isValid = false;
  registeredAccounts.forEach(function(account) {
    if (username === account.username && password === account.password) {
      isValid = true;
    }
  });
  return isValid;
};

function targetAccountIndex(username) {
  var targetIndex;
  registeredAccounts.forEach(function(account) {
    if (username === account.username) {
      targetIndex = registeredAccounts.indexOf(account);
    }
  });
  return targetIndex;
}

$(document).ready(function() {

  function accessAccount(username) {
    var accountIndex = targetAccountIndex(username);
    $("#transactions").show();
    $("#account-view").show();
    $("#account-view .name").text(registeredAccounts[accountIndex].name);
    $("#account-balance").text(registeredAccounts[accountIndex].balance);

    // Transactions
    $("#transactions button").click(function() {
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

      registeredAccounts[accountIndex].balance += deposit;
      registeredAccounts[accountIndex].balance -= withdraw;
      $("#account-balance").text(registeredAccounts[accountIndex].balance);
    });

    // Logout
    $("#logout").click(function() {
      $("#login").hide();
      $("#register").show();
      $("#transactions").hide();
      $("#account-view").hide();
    });
  }

  $(".toggle").click(function() {
    $("#login").toggle();
    $("#register").toggle();
  });

  // REGISTRATION
  $("#register").submit(function(event) {
    event.preventDefault();
    var newUsername = $("#create-username").val();
    var newPassword = $("#create-password").val();
    var newName = $("#register-name").val();
    var initialDeposit = 0;

    if ($("#initial-deposit").val() === "") {
      initialDepositInput = 0;
    } else {
      initialDepositInput = parseInt($("#initial-deposit").val());
    }

    if (checkNewUsername(newUsername)) {
      var newAccount = new Account(newUsername, newPassword, newName, initialDeposit);
      registeredAccounts.push(newAccount);
      accessAccount(newUsername);
      $("#register")[0].reset();
      $("#register").hide();
    } else {
      alert("Username already exists. Please choose another.");
    }
  });

  // LOGIN SECTION
  $("#login").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    if (checkLoginCredentials(username, password)) {
      accessAccount(username);
      $("#login")[0].reset();
      $("#login").hide();
    } else {
      alert("Username or password does not match.");
    }
  });
});
