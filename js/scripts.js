$(document).ready(function() {
  $("a.activate").click(function() {
    userMessage = prompt("Enter a brief message for the cipher (40 character limit):");
    messageCheck();
  });

  $("a.monitor").click(function() {
    alert(userMessage);
  });
});

var userMessage = "Error: No Message Input.";

var cipherMessage;

function messageCheck() {
  if (userMessage === null || userMessage === "" || userMessage === undefined) {
    userMessage = "Error: No Message Input.";
    $(".cipher h2").html("Standby.");
    alert(userMessage);
  } else {
    if (userMessage.length > 40) {
      $(".cipher h2").html("Standby.");
      userMessage = "Error: No Message Input.";
      alert("Error: Message Exceeds 40 Character Limit.");
    } else {
      alert("Message Sent.");
      cipher(userMessage);
      $(".cipher h2").html('\"' + cipherMessage + '\"');
    };
  };
};

function cipher(string) {
  var lastFirstCharExtract = (userMessage.slice(-1) + userMessage.slice(0,1)).toUpperCase();
  cipherMessage = userMessage + lastFirstCharExtract;
  cipherMessage = userMessage.charAt(parseInt(userMessage.length / 2)) + cipherMessage;
  cipherMessage = cipherMessage.split("").reverse().join("");
};
