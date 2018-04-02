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
    console.log(newPlace);
    $("#location-list").append("<li class='place'>" + newPlace.location + "</li>");

    $(".place").last().click(function() {
      $("#show-location h2").text(newPlace.location);
      $("#show-location ul").append("<li>Time of Year: " + newPlace.timeOfYear + "</li>");
      $("#show-location ul").append("<li>Weather : " + newPlace.weather + "</li>");
      $("#show-location ul").append("<li>Landmarks : " + newPlace.landmarks + "</li>");
      $("#show-location").slideDown();
    });
  });
});
