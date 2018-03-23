// BUSINESS LOGIC
function tallyScore(traitCode) {
  if (traitCode === "A") {
    return 0;
  } else if (traitCode === "B") {
    return 1;
  } else if (traitCode === "C") {
    return 2;
  } else {
    return;
  };
};

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $(".input-name").text($("#firstname").val().slice(0,1).toUpperCase() + $("#firstname").val().slice(1,$("#firstname").val().length).toLowerCase());

    var aptitudeCode = $("input:radio[name=aptitude1]:checked").val() + $("input:radio[name=aptitude2]:checked").val();
    var attitudeCode = $("input:radio[name=attitude1]:checked").val();
    var interestCode = $("input:radio[name=interest1]:checked").val() + $("input:radio[name=interest2]:checked").val() + $("input:radio[name=interest3]:checked").val();

    var aptitudeScore = tallyScore(aptitudeCode.slice(0,1)) + tallyScore(aptitudeCode.slice(1,2));
    var attitudeScore = tallyScore(attitudeCode);
    var interestScore = tallyScore(interestCode.slice(0,1)) + tallyScore(interestCode.slice(1,2)) + tallyScore(interestCode.slice(2,3));

    $("form").hide();
    $("#thankyou").fadeIn();

    // Sequentially Check Base Aptitude, sub-branch thru Attitude, then sub-branch thru Interest
    if (aptitudeScore === 0) {
      if (attitudeScore === 0) {
        $("#result1").fadeIn();
      } else {
        $("#result2").fadeIn();
      };
    // Aptitude 1
    } else if (aptitudeScore === 1) {
      if (attitudeScore === 0) {
        $("#result2").fadeIn();
      } else {
        $("#result3").fadeIn();
      };
    // Aptitude 2
    } else if (aptitudeScore === 2) {
      if (attitudeScore <= 1) {
        $("#result3").fadeIn();
      } else {
        if (interestScore <= 3) {
          $("#result3").fadeIn();
        } else if (interestScore > 3 && interestScore <= 5) {
          $("#result5").fadeIn();
        } else {
          $("#result4").fadeIn();
        };
      };
    // Aptitude 3 - 4
    } else {
      if (attitudeScore === 0) {
        if (interestScore <= 3) {
          $("#result3").fadeIn();
        } else {
          $("#result4").fadeIn();
        };
      } else {
        if (interestScore === 0) {
          $("#result3").fadeIn();
        } else if (interestScore >= 1 && interestScore <= 2) {
          $("#result5").fadeIn();
        } else if (interestScore >= 3 && interestScore <= 4) {
          $("#result4").fadeIn();
        } else {
          $("#result6").fadeIn();
        };
      };
    };
  });

  $("#retake-survey").click(function() {
    $("form").show();
    $(".no-display").hide();
    $("form")[0].reset();
  });
});
