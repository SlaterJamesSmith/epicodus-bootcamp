//Pandas G both
//Spiral PG matinee only
//Endless PG-13 both
//Blockers R night only

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

function getMovie(age, time){
  var ticketMatch = [];
  ticketCatalog.forEach(function(ticket) {
    if(age >= ticket.ageLimit && ticket.showTime.includes(time)){
      ticketMatch.push(ticket);
    }
  });
  return ticketMatch;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".ticket-output").empty();
    var ageInput = parseInt($(".age-group").val());
    var timeInput = parseInt($(".time-of-day").val());

    var ticketMatch = getMovie(ageInput,timeInput);

    ticketMatch.forEach(function(ticket){
      $(".ticket-output").append("<div class='ticket'><h2>" + ticket.movieTitle +"</h2></div>");
      $(".ticket").last().click(function(){
        $(this).addClass("selected")
        if(ageInput === 3){
          $(".price-output").text("Your ticket will be $5")
        } else if(timeInput ===1){
          $(".price-output").text("$8")
        }else{
          $(".price-output").text("$15")
        }
        $(".ticket").not(".selected").remove();
      })
    });

  });
});
