$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var sentenceArray = $("#sentence").val().split(" ");
    console.log("Checkpoint 1:");
    console.log(sentenceArray);

    var secondArray = [];

    sentenceArray.map(function(word) {
      if (word.length > 3) {
        secondArray.push(word);
      };
    });

    console.log("Checkpoint 2:");
    console.log(secondArray);

    var finalString = secondArray.reverse().join(" ");

    console.log("Checkpoint 3:");
    console.log(finalString);

    $("body").append(finalString);

  });

});
