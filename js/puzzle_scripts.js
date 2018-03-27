var vowels = ["a","e","i","o","u"];

$(document).ready(function(){
  var inputStringAsArray = prompt("enter string").split("");
  console.log(inputStringAsArray);
  var outputStringArray = [];

  for (var index = 0; index<inputStringAsArray.length; index+=1) {
    var pushValue = inputStringAsArray[index];

    vowels.forEach(function(vowel){
      if (pushValue === vowel) {
        pushValue = "-";
      };
    });

    outputStringArray.push(pushValue);
  }

  $("#output").text(outputStringArray.join(""));

  $("#toggle-solution").click(function() {
    $("#solution").text(inputStringAsArray.join(""));
    $("#solution").toggle();
    $("#output").toggle();
  });

});
