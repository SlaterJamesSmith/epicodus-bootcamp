$(document).ready(function() {
  $("a.activate").click(function() {
    userMessage = prompt("Enter a message for the cipher:");
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
    alert(userMessage);
  } else {
    alert("Message Sent.");
    cipher(userMessage);
  };
};

function cipher(string) {
  var lastFirstCharExtract = (userMessage.slice(-1) + userMessage.slice(0,1)).toUpperCase();
  cipherMessage = userMessage + lastFirstCharExtract;
  cipherMessage = userMessage.charAt(parseInt(userMessage.length / 2)) + cipherMessage;
  cipherMessage = cipherMessage.split("").reverse().join("");
};
