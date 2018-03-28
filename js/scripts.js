// BUSINESS LOGIC
function leapYearCheck(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

// USER LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("#year").val());
    var result = leapYearCheck(year);
    $("#result .year").text(year);
    if (!result) {
      $("#result .not").text("not");
    } else {
      $("#result .not").text("");
    }
    $("#result").show();

  });

});
