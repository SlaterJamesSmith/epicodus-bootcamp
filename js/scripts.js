var userUnit = 0;
var convertedResult = 0;

// Change Mode Here
//gallonsToLiters();
litersToGallons();

function gallonsToLiters() {
userUnit = parseFloat(prompt("Please enter number of gallons"));
convertedResult = userUnit * 3.79;
alert( userUnit + " gallons is equal to " + convertedResult + " liters.");
};

function litersToGallons() {
userUnit = parseFloat(prompt("Please enter number of liters"));
convertedResult = userUnit * 0.264;
alert( userUnit + " liters is equal to " + convertedResult + " gallons.");
};
