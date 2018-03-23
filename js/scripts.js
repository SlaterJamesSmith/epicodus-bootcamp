// BUSINESS LOGIC

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    $("#input-name").text($("#firstname").val().slice(0,1).toUpperCase() + $("#firstname").val().slice(1,$("#firstname").val().length).toLowerCase());

    var aptitudeCode = $("input:radio[name=aptitude1]:checked").val() + $("input:radio[name=aptitude2]:checked").val();
    var attitudeCode = $("input:radio[name=attitude1]:checked").val();
    var interestCode = $("input:radio[name=interest1]:checked").val() + $("input:radio[name=interest2]:checked").val() + $("input:radio[name=interest3]:checked").val();

    console.log(aptitudeCode);
    console.log(attitudeCode);
    console.log(interestCode);
    //
    // var aptitudeScore =
    // var attitudeScore = ;
    // var interestScore = ;
    //
    // if () {
    //
    // } else if () {
    //
    // } else if () {
    //
    // } else if () {
    //
    // } else {
    //
    // };

    $("form").hide();
    $("#thankyou").show();

  });

  $("#retake-survey").click(function() {
    $("form").show();
    $(".no-display").hide();

  });
});
