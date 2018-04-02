// BUSINESS LOGIC
function Places(location, month, weather, landmarks) {
  this.location = location;
  this.timeOfYear = month;
  this.weather = weather;
  this.landmarks = landmarks;
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var location = $("input#location").val();
    var month = $("input#month").val();
    var weather = $("input#weather").val();
    var landmarks =$("input#landmarks").val();

    var newPlace = new Places(location, month, weather, landmarks);

    $("#location-list").append("<li class='place'>" + newPlace.location + "</li>");
  });
});
