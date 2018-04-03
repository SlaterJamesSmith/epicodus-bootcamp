var mike = {
  username: "mike",
  name: "Mike Chu",
  balance: 0
};

var accounts = [mike];

function findAccount(username) {
  accounts.forEach(function(account) {
    if (username === account.username) {
      return true;
    } else {
      return null;
    }
  });
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
      $(".account-name").text(usernameInput);
      myAccount.balance += initialDepositInput;
      $(".balance-output").text(myAccount.balance);

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

        myAccount.balance += deposit;
        myAccount.balance -= withdraw;
        $(".balance-output").text(myAccount.balance);
      });
    }
  });
});
