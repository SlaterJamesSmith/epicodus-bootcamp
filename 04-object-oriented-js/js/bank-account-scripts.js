function Account(username, password, name, balance) {
  this.username = username;
  this.password = password
  this.name = name;
  this.balance = balance;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount;
}

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

  // Toggle Registration & Login
  $(".toggle").click(function() {
    $("#login")[0].reset();
    $("#register")[0].reset();
    $("#login").toggle();
    $("#register").toggle();
  });

  function accessAccount(username) {
    var accountIndex = targetAccountIndex(username);
    $("#transactions").show();
    $("#account-view").show();
    $("#account-view .name").text(registeredAccounts[accountIndex].name);
    $("#account-balance").text(registeredAccounts[accountIndex].balance);

    // TRANSACTIONS
    $("#transactions").submit(function(event) {
      event.preventDefault();
      var transactionAmount = 0;
      var transactionType = $("input:radio[name=transaction]:checked").val();

      if (parseFloat(parseFloat($("#transaction-amount").val()).toFixed(2)) === NaN) {
        alert("Please enter a dollar amount.")
      } else {
        transactionAmount = parseFloat(parseFloat($("#transaction-amount").val()).toFixed(2));
      }

      if (transactionType === "deposit") {
        registeredAccounts[accountIndex].deposit(transactionAmount);
      } else {
        registeredAccounts[accountIndex].withdraw(transactionAmount);
      }

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

  // REGISTRATION
  $("#register").submit(function(event) {
    event.preventDefault();
    var newUsername = $("#create-username").val();
    var newPassword = $("#create-password").val();
    var newName = $("#register-name").val();
    var initialDeposit = 0;

    if (parseFloat(parseFloat($("#initial-deposit").val()).toFixed(2)) === NaN) {
      initialDeposit = 0;
    } else {
      initialDeposit = parseFloat(parseFloat($("#initial-deposit").val()).toFixed(2));
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
