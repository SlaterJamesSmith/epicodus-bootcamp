function Ticket(title, age, ageGroupName, time) {
  this.movieTitle = title;
  this.ageLimit = age;
  this.ageLimitName = ageGroupName
  this.showTime = time;
}

var pandasTicket = new Ticket ("Pandas", 1, "All Ages", [1, 2]);
var spiralTicket = new Ticket ("Spiral", 1, "All Ages", [1]);
var endlessTicket = new Ticket ("Endless", 2, "Adult", [1, 2]);
var blockersTicket = new Ticket ("Blockers", 2, "Adult", [2]);

var ticketCatalog = [pandasTicket, spiralTicket, endlessTicket, blockersTicket];

function searchTickets(age, time){
  var matchedTickets = [];
  ticketCatalog.forEach(function(ticket) {
    if(age >= ticket.ageLimit && ticket.showTime.includes(time)){
      matchedTickets.push(ticket);
    }
  });
  return matchedTickets;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#show-tickets .ticket").remove();
    $("#show-tickets").show();

    var ageInput = parseInt($("#age-group").val());
    var timeInput = parseInt($("#show-time").val());
    var searchResults = searchTickets(ageInput,timeInput);

    searchResults.forEach(function(ticket){
      $("#show-tickets").append('<div class="ticket"><h3><a href="#">' + ticket.movieTitle +"</a></h3></div>");
      $(".ticket").last().click(function(){
        $(this).addClass("selected")
        if(ageInput === 3){
          $("#show-price h3").text("$8.00")
        } else if(timeInput ===1){
          $("#show-price h3").text("$10.00")
        }else{
          $("#show-price h3").text("$15.00")
        }
        $(".ticket").not(".selected").remove();
        $("#show-price").show();
      });
    });
  });
});
