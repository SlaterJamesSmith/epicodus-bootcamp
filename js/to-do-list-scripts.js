// BUSINESS LOGIC
function Task(name, date, instructions) {
  this.task = name;
  this.completeBy = date;
  this.notes = instructions;
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var task = $("#task").val();
    var completeBy = $("#complete-by").val();
    var notes = $("#notes").val();

    var newTask = new Task(task, completeBy, notes);

    $("#task-list ul").append("<li class='task'>" + newTask.task + "</li>");

    $(".task").last().click(function () {
      $("#task-show h2").text(newTask.task);
      $("#task-show ul").append("<li>" + newTask.completeBy + "</li>");
      $("#task-show ul").append("<li>" + newTask.notes + "</li>");
      $("#task-show").show();
      $("#task-show button").click(function() {
        $("#task-show").hide();
      });
    });
  });
});
