var userString = prompt("Please enter a complete sentence.");

var newString = userString.replace(/^./, userString.charAt(userString.length - 1).toUpperCase()).replace(/.$/, userString.charAt(0).toUpperCase());

alert(newString);
