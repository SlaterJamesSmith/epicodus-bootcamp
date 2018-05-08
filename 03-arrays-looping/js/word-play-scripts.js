$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var sentenceSplitArray = $("#sentence").val().split(" ");
    var lengthFilterArray = [];

    sentenceSplitArray.map(function(word) {
      if (word.length > 3) {
        lengthFilterArray.push(word);
      }
    });

    var returnString = lengthFilterArray.reverse().join(" ");

    $("#result").append(returnString);
    $("#result").show();
  });
});
