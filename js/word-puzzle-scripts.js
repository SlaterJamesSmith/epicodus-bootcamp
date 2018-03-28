$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var vowels = ["a","e","i","o","u"];
    var inputStringArray = $("#input").val().split("");
    var outputStringArray = [];

    for (var i = 0; i < inputStringArray.length; i += 1) {
      var pushValue = inputStringArray[i];

      vowels.forEach(function(vowel){
        if (pushValue === vowel) {
          pushValue = "-";
        };
      });

      outputStringArray.push(pushValue);
    }

    $("#output").text(outputStringArray.join(""));
    $("#result").show();
    $("form").hide();


    $("#toggle-solution").click(function() {
      $("#solution").text(inputStringArray.join(""));
      $("#solution").toggle();
      $("#output").toggle();
    });

  });

});
